import AdaptiveButton from "@/components/navigation/AdaptiveButton";
import { onboardingData } from "@/data/onboardingData";
import { router, Stack } from "expo-router";
import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import Carousel from "react-native-reanimated-carousel";

interface OnboardingCarouselProps {
  // Add any props you want to pass to the component here
}

export interface OnboardingSlide {
  id: string; // Unique identifier for each slide
  title: string; // Title of the slide
  description: string; // Description of the slide
  image: any; // Update to accept any type
  cta: string; // Call-to-action text
}

const OnboardingCarousel: React.FC<OnboardingCarouselProps> = () => {
  const { width, height } = Dimensions.get("window");

  return (
    <View className="mt-4 flex-1 ">
      <Stack.Screen
        options={{
          headerTitle: "Welcome",
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: "bold",
            // color: "#ffd700",
          },
          headerTitleAlign: "center",
        }}
      />
      <Carousel
        data={onboardingData}
        renderItem={({ item }) => (
          <View className="gap-y-5 px-4" key={item.id}>
            {item.image && item.image}
            <Text className="text-[18px] font-bold">{item.title}</Text>
            <Text className="font-[17px]">{item.description}</Text>
            <Text className="text-[13px]">{item.cta}</Text>
          </View>
        )}
        width={width} // Use the device's screen width
        height={height - 200} // Subtract the height of the header and any other elements
      />
      <View className="mx-4 my-4">
        <AdaptiveButton
          title="Sign up"
          size="large"
          variant="success"
          className=""
          // disabled
          // icon={<CustomIcon />}
          // onPress={() => router.push("./onBoarding")}
        />
      </View>
    </View>
  );
};

export default OnboardingCarousel;
