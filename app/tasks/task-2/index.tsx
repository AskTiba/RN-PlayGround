import { StyleSheet, Text, View } from "react-native";
import React, { useRef, useState } from "react";
import LottieView from "lottie-react-native";
import { Stack } from "expo-router";
import { BlurView } from "expo-blur";
import IOSSwitch from "@/components/core/IOSSwitch";
import AndroidLoader from "@/components/core/AndroidLoader";
import AdaptiveButton from "@/components/navigation/AdaptiveButton";

const index = () => {
  const animation = useRef(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };

  const handlePress = () => {
    setIsLoading(true);
    // Simulate an async operation
    setTimeout(() => {
      setIsLoading(false);
    }, 30000);
  };

  return (
    <BlurView
      intensity={30}
      tint="dark"
      className="h-screen w-full flex-auto justify-center items-center"
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
      <View className="flex-1 justify-center items-center">
      <Text>Toggle Switch Example</Text>
      <IOSSwitch
        value={isEnabled}
        onValueChange={toggleSwitch}
      />
      <Text>Switch is {isEnabled ? 'ON' : 'OFF'}</Text>
    </View>
    <View className="flex-1 justify-center items-center">
      <Text className="text-lg mb-4">Android Loader Example</Text>
      
      {isLoading ? (
        <AndroidLoader size={50} color="#4285F4" isLoading={true} />
      ) : (
        <AdaptiveButton title="Start Loading" onPress={handlePress} />
      )}
    </View>
    </BlurView>
  );
};

export default index;

const styles = StyleSheet.create({});
