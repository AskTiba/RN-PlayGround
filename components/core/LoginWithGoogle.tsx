import { View, Text, Image, Platform } from "react-native";
import { useEffect, useState } from "react";
import * as WebBrowser from "expo-web-browser";
import * as Google from "expo-auth-session/providers/google";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AdaptiveButton from "../navigation/AdaptiveButton";
import Gooogle from "@/assets/svgs/google";

const androidClientId =
  "897927068195-nb3jsgrt8n6m6oobhou9uqkm01cjv0lc.apps.googleusercontent.com";
const webClientId =
  "897927068195-mf8n9vasb05irank1gga7qvkqu179r4q.apps.googleusercontent.com";

WebBrowser.maybeCompleteAuthSession();

interface User {
  email: string;
  name: string;
  picture: string;
  verified_email: boolean;
}

export default function LoginWithGoogle() {
  const [userInfo, setUserInfo] = useState<User | null>(null);

  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId,
    webClientId,
    // Uncomment the following line if you need these scopes explicitly
    // scopes: ["profile", "email"],
  });

  useEffect(() => {
    console.log("useEffect triggered. Response:", response);
    handleEffect();
  }, [response]);

  async function handleEffect() {
    console.log("handleEffect called");
    const user = await getLocalUser();
    if (user) {
      setUserInfo(user);
      console.log("User loaded locally:", user);
    } else if (response) {
      console.log(
        "Response received in handleEffect:",
        JSON.stringify(response, null, 2)
      );
      if (response.type === "success") {
        const { authentication } = response;
        if (authentication?.accessToken) {
          console.log("Access Token found:", authentication.accessToken);
          await getUserInfo(authentication.accessToken);
        } else {
          console.log(
            "No Access Token found in authentication:",
            JSON.stringify(authentication, null, 2)
          );
        }
      } else {
        console.log("Response type is not success:", response.type);
        console.log("Full response object:", JSON.stringify(response, null, 2));
      }
    } else {
      console.log("No response received in handleEffect.");
    }
  }

  const getLocalUser = async () => {
    console.log("getLocalUser called");
    const data = await AsyncStorage.getItem("@user");
    if (!data) {
      console.log("No local user found");
      return null;
    }
    console.log("Local user found:", data);
    return JSON.parse(data);
  };

  const getUserInfo = async (token: string) => {
    console.log("getUserInfo called with token:", token);
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("API Response status:", response.status);
      const user = await response.json();
      console.log("Parsed user data:", JSON.stringify(user, null, 2));

      if (user.error) {
        console.error("API Error:", user.error);
        return;
      }

      await AsyncStorage.setItem("@user", JSON.stringify(user));
      setUserInfo(user);
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  };

  return (
    <View className="flex-1 items-center justify-center">
      {!userInfo ? (
        <AdaptiveButton
          variant="success"
          title="Sign in with Google"
          icon={<Gooogle />}
          disabled={!request}
          onPress={() => {
            console.log("Sign in button pressed");
            promptAsync({ showInRecents: true })
              .then((result) => {
                console.log(
                  "promptAsync result:",
                  JSON.stringify(result, null, 2)
                );
              })
              .catch((error) => {
                console.error("Sign-in error:", error);
              });
          }}
          className="bg-[#99582a]"
        />
      ) : (
        <View className="border border-gray-200 rounded-lg p-4">
          {userInfo?.picture && (
            <Image
              source={{ uri: userInfo.picture }}
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
        title="Remove local user"
        onPress={async () => {
          await AsyncStorage.removeItem("@user");
          setUserInfo(null);
          console.log("Local user removed");
        }}
        className="my-4"
      />
    </View>
  );
}
