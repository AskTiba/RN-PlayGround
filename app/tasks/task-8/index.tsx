import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import AdaptiveButton from "@/components/navigation/AdaptiveButton";
import { router, Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function index() {
  return (
    <LinearGradient
      colors={["#06e1e1", "#bbfaff", "#06e1e1"]}
      className="absolute left-0 right-0 top-0 h-full"
    >
      <Stack.Screen
        options={{
          headerTitle: "Tables",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: "bold",
          },
          
        }}
      />
      <View className="flex-1 justify-between">
        <View></View>
        <View className="mx-4 my-4">
          <AdaptiveButton
            title="Next"
            size="large"
            variant="primary"
            // icon={<CustomIcon />}
            onPress={() => router.push("./chessPlayers")}
          />
        </View>
      </View>
    </LinearGradient>
  );
}
