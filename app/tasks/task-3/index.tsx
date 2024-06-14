import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Stack } from "expo-router";

const index = () => {
  return (
    <ThemedView className="flex-1 justify-center items-center">
      <Stack.Screen
        options={{ title: "Gestures", headerTitleAlign: "center" }}
      />
      <ThemedText>index</ThemedText>
    </ThemedView>
  );
};

export default index;

const styles = StyleSheet.create({});
