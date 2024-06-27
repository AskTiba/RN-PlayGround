import Button from "@/components/core/Button";
import { Stack } from "expo-router";
import { View } from "react-native";
import Animated from "react-native-reanimated";

export default function App() {
  return (
    <Animated.View
      className="flex justify-center items-center bg-[#32cd32] h-full w-full"
      style={
        {
          // width: 200,
          // height: 200,
          // backgroundColor: "violet",
        }
      }
    >
      <Stack.Screen
        options={{ title: "Button & Reanimated", headerTitleAlign: "center" }}
      />
      <View className="">
        <Button />
      </View>
    </Animated.View>
  );
}
