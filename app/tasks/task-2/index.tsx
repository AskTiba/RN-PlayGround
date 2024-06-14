import { StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import LottieView from "lottie-react-native";
import { Stack } from "expo-router";
import { BlurView } from "expo-blur";

const index = () => {
  const animation = useRef(null);
  return (
    <BlurView
      intensity={70}
      tint="dark"
      className="h-screen w-full bg-indigo-500 flex-auto justify-center items-center"
    >
      <Stack.Screen
        options={{ title: "Lottie Animations", headerTitleAlign: "center" }}
      />
      {/* <LottieView
        autoPlay
        // ref={animation}
        style={{
          width: 200,
          height: 200,
          backgroundColor: "#eee",
        }}
        source={require("@assets/lotties/welcome.json")}
      /> */}
      <Text>index</Text>
    </BlurView>
  );
};

export default index;

const styles = StyleSheet.create({});
