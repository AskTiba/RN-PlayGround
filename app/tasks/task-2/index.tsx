import {Text, View } from "react-native";
import React, { useState } from "react";
import LottieView from "lottie-react-native";
import { Stack } from "expo-router";
import { BlurView } from "expo-blur";
import IOSSwitch from "@/components/core/IOSSwitch";
import AndroidLoader from "@/components/core/AndroidLoader";
import AdaptiveButton from "@/components/navigation/AdaptiveButton";

const Index = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const toggleSwitch = () => setIsEnabled(prev => !prev);

  const handleConfirm = (date: Date) => {
    setSelectedDate(date);
    console.log('Selected Date:', date);
  };

  const handlePress = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 3000); // Reduced to 3 seconds for better UX
  };

  return (
    <BlurView
      intensity={30}
      tint="dark"
      className="flex-1 justify-center items-center"
    >
      <Stack.Screen
        options={{ title: "Task 2 Demo", headerTitleAlign: "center" }}
      />
      
      <View className="w-full p-4 space-y-8">
        <View className="items-center">
          <Text className="text-lg mb-2">Toggle Switch</Text>
          <IOSSwitch value={isEnabled} onValueChange={toggleSwitch} />
          <Text className="mt-2">Switch is {isEnabled ? 'ON' : 'OFF'}</Text>
        </View>

        <View className="items-center">
          <Text className="text-lg mb-4">Android Loader</Text>
          {isLoading ? (
            <AndroidLoader size={50} color="#4285F4" isLoading={true} />
          ) : (
            <AdaptiveButton title="Start Loading" onPress={handlePress} />
          )}
        </View>

        {/* <View className="items-center">
          <Text className="text-lg mb-4">Date and Time Picker</Text>
          <CustomDateTimePicker
            mode="datetime"
            onConfirm={handleConfirm}
          />
          {selectedDate && (
            <Text className="mt-2">
              Selected: {selectedDate.toLocaleString()}
            </Text>
          )}
        </View> */}
      </View>
    </BlurView>
  );
};

export default Index;
