import { View, Text } from "react-native";
import React, { useCallback, useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import AdaptiveButton from "@/components/navigation/AdaptiveButton";
import { router, Stack, useFocusEffect } from "expo-router";
import Cards from "@/assets/svgs/cards";

export default function index() {
  useFocusEffect(
    useCallback(() => {
      // Set a timer to navigate to the next screen after a fixed duration
      const timer = setTimeout(() => {
        router.push("./signUp"); // Replace 'NextScreen' with your target screen
      }, 1000); // Duration in milliseconds (3000ms = 3 seconds)

      // Cleanup the timer when the screen is unfocused
      return () => clearTimeout(timer);
    }, [])
  );
  return (
    <View
      className="flex-1 items-center justify-center"
      //   style={styles.container}
    >
      <Stack.Screen
        options={{
          headerShown: false,
          headerTitle: "onBoarding",
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#ebffff",
          },
          headerTitleStyle: {
            fontSize: 17,
            fontWeight: "bold",
          },
        }}
      />
      <LinearGradient
        // Background Linear Gradient
        // colors={["rgba(0,0,0,0.9)", "transparent"]}
        colors={["#06e1e1", "#bbfaff", "#06e1e1"]}
        className="absolute left-0 right-0 top-0 h-full"
        // style={styles.background}
      />
      <View className="">
        <Cards height={300} width={300} />
      </View>
      {/* <View className="mb-4 my-4 flex-1 justify-between">
        <View className="">
          <Text>Welcome Tony</Text>
        </View>
        <View className="">
          <AdaptiveButton
            title="Continue"
            variant="secondary"
            size="large"
            // onPress={() => console.log('Secondary action')}
            className="mt-4 bg-[#d4af37]"
          />
        </View>
      </View> */}
    </View>
  );
}
