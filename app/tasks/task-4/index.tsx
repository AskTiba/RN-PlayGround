import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <SafeAreaView className="">
      <Stack.Screen
        options={{ title: "Story Book", headerTitleAlign: "center" }}
      />
      <Text>index</Text>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
