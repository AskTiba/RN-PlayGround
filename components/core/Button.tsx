import { View, Text } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {
  const loginWithFacebook = () => {
    console.warn("Why are you gay");
  };

  return (
    <View className="flex-1 justify-center items-center ">
      <FontAwesome.Button
        name="facebook"
        backgroundColor="#ffd700"
        onPress={loginWithFacebook}
        className="border-2 border-green-600"
      >
        Login with Facebook
      </FontAwesome.Button>
    </View>
  );
}
