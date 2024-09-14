import { View, Text, Image } from "react-native";
import { useEffect, useState } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AdaptiveButton from "../navigation/AdaptiveButton";
import Gooogle from "@/assets/svgs/google"; // Assuming you have this icon

const androidClientId =
  "897927068195-hjmvc3app2rh3n8e4fp33sekidudjr4o.apps.googleusercontent.com";
const webClientId =
  "897927068195-aht4aoh8dhgsfoqci5pgd1utg5f6rric.apps.googleusercontent.com";

WebBrowser.maybeCompleteAuthSession();

interface User {
  email: string;
  name: string;
  picture: string;
  verified_email: boolean;
}

export default function LoginWithGoogle() {
  // const [token, setToken] = useState<string>("");
  const [userInfo, setUserInfo] = useState<User | null>(null);
  const [isRequestInProgress, setIsRequestInProgress] = useState(false);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId,
    webClientId,
  });

  const handleSignIn = async () => {
    if (!isRequestInProgress) {
      console.log("Starting Google sign-in process...");
      setIsRequestInProgress(true);
      try {
        const result = await promptAsync(); // Awaiting the Google prompt
        console.log("Google sign-in prompt finished. Result:", result);
        if (result.type === "success" && result.authentication) {
          console.log("Google authentication successful:", result);
          const token = result.authentication.accessToken;
          getUserInfo(token);
          const user = await getLocalUser();
          if (!user) {
            console.log("No local user found. Storing user info...");
            await AsyncStorage.setItem("@user", JSON.stringify(userInfo));
          } else {
            console.log("User loaded from local storage.");
          }
        } else if (result.type === "error") {
          console.log("Google authentication error:", result.error);
        } else if (result.type === "dismiss") {
          console.log("Google authentication dismissed.");
        } else {
          console.log("No valid response type received.");
        }
      } catch (error) {
        console.error("Error during Google sign-in:", error);
      }
      setIsRequestInProgress(false);
      console.log("Google sign-in process finished.");
    }
  };

  const getLocalUser = async () => {
    try {
      const data = await AsyncStorage.getItem("@user");
      if (!data) return null;
      console.log("User data found locally.");
      return JSON.parse(data);
    } catch (error) {
      console.error("Error fetching local user data:", error);
      return null;
    }
  };

  const getUserInfo = async (token: string) => {
    if (!token) {
      console.log("No token provided. Aborting user info fetch.");
      return;
    }

    try {
      console.log("Fetching user info with token:", token);
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const userData: User = await response.json();
      console.log("Fetched user info:", userData);

      await AsyncStorage.setItem("@user", JSON.stringify(userData));
      setUserInfo(userData); // Update the userInfo state with the correct user data
    } catch (error: any) {
      console.error("Error fetching user info:", error);
      console.error("Error stack trace:", error.stack);
    }
  };
  return (
    <View className="flex-1 items-center justify-center">
      {!userInfo ? (
        <>
          <AdaptiveButton
            variant="success"
            title="Sign in with Google"
            icon={<Gooogle />}
            disabled={!request || isRequestInProgress}
            onPress={handleSignIn}
            className="bg-[#99582a]"
          />
        </>
      ) : (
        <View className="border border-gray-200 rounded-lg p-4">
          {userInfo?.picture && (
            <Image
              source={{ uri: userInfo?.picture }}
              className="w-24 h-24 rounded-full"
            />
          )}
          <Text className="text-lg font-bold">{userInfo.email}</Text>
          <Text className="text-lg font-bold">
            Verified: {userInfo.verified_email ? "yes" : "no"}
          </Text>
          <Text className="text-lg font-bold">{userInfo.name}</Text>
        </View>
      )}

      <AdaptiveButton
        variant="outline"
        // disabled={!request || isRequestInProgress}
        title="Remove local user"
        onPress={async () => {
          console.log("Removing local user...");
          await AsyncStorage.removeItem("@user");
          setUserInfo(null);
        }}
        className="my-4"
      />
    </View>
  );
}
