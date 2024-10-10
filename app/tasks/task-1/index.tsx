import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import CountDown from "@/components/core/CountDown";

const index = () => {
  return (
    <View className="">
      <Stack.Screen
        options={{ title: "Count Down", headerTitleAlign: "center" }}
      />
      {/* <StatusBar style="auto" /> */}
      <CountDown targetDate="2024-08-25T21:59:59" />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
