import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AdaptiveButton from "@/components/navigation/AdaptiveButton";
import { LinearGradient } from "expo-linear-gradient";
import Gooogle from "@/assets/svgs/google";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { router } from "expo-router";

type config = {
  offlineAccess?: boolean | undefined;
  webClientId?: string | undefined;
  cientId?: string | undefined;
};

GoogleSignin.configure({
  offlineAccess: true,
  webClientId:
    "897927068195-mf8n9vasb05irank1gga7qvkqu179r4q.apps.googleusercontent.com",
  // clientId:
  //   "897927068195-nb3jsgrt8n6m6oobhou9uqkm01cjv0lc.apps.googleusercontent.com",
  scopes: ["profile", "email"],
});

export default function index() {
  const [userData, setUserData] = useState({});

  const testGoogleLoginFunctionality = async () => {
    try {
      await GoogleSignin.hasPlayServices();

      // log in using Google account (on Android it will only work if google play services are installed)
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo.data?.user);
      console.log(JSON.stringify(userInfo, null, 2));
      router.push("./chessPlayers");

      // try to sign in silently (this should be done when the user is already signed-in)
      /*
        const userInfo2 = await GoogleSignin.signInSilently();
        console.log(userInfo2);
      */

      // to logout use the following piece of code
      const resp = await GoogleSignin.signOut();
      console.log(resp);
    } catch (error: any) {
      if (error.code) {
        console.log("Error related to Google sign-in: ", error);
      } else {
        console.log("An error that is not related to Google sign-in: ", error);
      }
    }
  };
  return (
    <LinearGradient
      colors={["#00b09b", "#faf3dd", "#00b09b"]}
      className="left-0 right-0 top-0 flex-1"
    >
      <View className="flex-1 justify-center items-center">
        <View className="mx-4 my-4">
          <AdaptiveButton
            title="Sign in with Google"
            size="medium"
            variant="primary"
            icon={<Gooogle />}
            onPress={() => testGoogleLoginFunctionality()}
            className="bg-[#06e1e1]"
          />
        </View>
      </View>
    </LinearGradient>
  );
}
