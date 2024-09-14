import { View, Text } from "react-native";
import React from "react";
import LoginWithGoogle from "@/components/core/LoginWithGoogle";

export default function index() {
  return (
    <View className="flex-1 justify-center items-center px-4">
      <View>
        <LoginWithGoogle />
      </View>
    </View>
  );
}
