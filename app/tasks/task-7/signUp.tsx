import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { Stack } from "expo-router";

// Import the image from the assets folder
const image = require("@assets/images/3dRender.png");

export default function signUp() {
  return (
    <View className="flex-1 flex-col">
      <Stack.Screen options={{ headerShown: false }} />
      <ImageBackground
        className="flex-1 justify-center"
        source={image}
      ></ImageBackground>
    </View>
  );
}
