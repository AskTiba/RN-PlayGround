import { View, Text } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";

type ButtonProps = React.HTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {
  const loginWithFacebook = () => {
    router.push("./reanimate");
  };

  return (
    <View className="flex-1 justify-center items-center ">
      <FontAwesome.Button
        name="facebook"
        backgroundColor="#ffd700"
        onPress={loginWithFacebook}
        className="border-2 border-green-600"
      >
        <Text className="text-xl font-extrabold px-2">Go & reanimate</Text>
      </FontAwesome.Button>
    </View>
  );
}
