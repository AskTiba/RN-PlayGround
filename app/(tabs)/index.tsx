import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

export default function index() {
  return (
    <View className="flex-1 bg-white">
      {/* <Stack.Screen options={{ headerShown: true, headerTitle: "" }} /> */}
      <Text>index</Text>
    </View>
  );
}
