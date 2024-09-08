import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { router, Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import AdaptiveButton from "@/components/navigation/AdaptiveButton";
import Queen from "@/assets/svgs/queen";

// Import the image from the assets folder
const image = require("@assets/images/3dRender.png");

export default function signUp() {
  return (
    <View className="flex-1 flex-col">
      <Stack.Screen options={{ headerShown: false }} />

      <LinearGradient
        colors={["#06e1e1", "#bbfaff", "#06e1e1"]}
        className="absolute left-0 right-0 top-0 h-full"
        // start={{ x: 0, y: 0 }}
        // end={{ x: 1, y: 1 }}
        // locations={[0.0, 0.5, 1.0]}
      >
        <ImageBackground resizeMode="contain" className="flex-1" source={image}>
          <View className="flex-1 justify-between">
            <View className="flex-1 justify-center items-center">
              {/* <View className="mt-5">
                <Queen
                  strokeWidth={10}
                  stroke={"#ffd700"}
                  fill={""}
                  className=""
                />
              </View>
              <View className="">
                <Text className="text-3xl text-white">Uganda Chess</Text>
              </View> */}
            </View>
            <View className="mx-4 my-4">
              <AdaptiveButton
                title="Next"
                size="large"
                variant="primary"
                // icon={<CustomIcon />}
                onPress={() => router.push("./onBoarding")}
              />
            </View>
          </View>
        </ImageBackground>
      </LinearGradient>
    </View>
  );
}
