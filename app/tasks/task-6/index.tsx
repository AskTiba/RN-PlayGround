import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import React from "react";
import { router, Stack } from "expo-router";
import AdaptiveButton from "@/components/navigation/AdaptiveButton";
import { cardData, CardData } from "./data";

// Get the device width
const { width: screenWidth } = Dimensions.get("window");

// Define the card size (you can adjust this as needed)
const CARD_SIZE = screenWidth * 0.32; // 60% of screen width

// Define a functional component to render each item
const CardItem: React.FC<{ title: string }> = ({ title }) => (
  <TouchableOpacity
    style={{ width: CARD_SIZE, height: CARD_SIZE }}
    className="bg-[#d4af37] p-2 my-2 rounded-lg"
  >
    <Text className="font-bold">{title}</Text>
  </TouchableOpacity>
);

export default function index() {
  return (
    <View className="flex-1 bg-[#ebffff] px-4 justify-between">
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Grand Prix Events",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 17, // Adjust the font size
            fontWeight: "bold", // Adjust the font weight
          },
          // headerStyle: {
          //   // height: 100, // Set the desired height for the header
          //   // backgroundColor: "#32cd32", // Optional: set the background color
          // },
          // headerLeft: () => (
          //   <TouchableOpacity
          //     onPress={() => router.back()}
          //     activeOpacity={0.9}
          //     className="ml-4"
          //   >
          //     <ChevronLeft stroke={"#616161"} width={24} height={24} />
          //   </TouchableOpacity>
          // ),
        }}
      />
      <View className="">
        <View className="mt-4">
          <Text className="font-bold text-lg">Uganda Grand Prix Events</Text>
        </View>
        <View>
          <FlatList
            data={cardData} // Use the imported data array
            renderItem={({ item }: { item: CardData }) => (
              <CardItem title={item.title} /> // Render each card title
            )}
            keyExtractor={(item) => item.id} // Unique key for each item
            horizontal // Enables horizontal scrolling
            showsHorizontalScrollIndicator={false} // Hides the scrollbar
            ItemSeparatorComponent={() => <View className="w-4" />} // Adds space between cards
            // Calculate the number of visible items in the viewport
            // The `CARD_SIZE` includes the margin
            // snapToInterval={CARD_SIZE + 16} // Adjust this based on your margin
            decelerationRate="fast" // Smooth scrolling effect
            snapToAlignment="start" // Aligns the cards to start of the viewport
          />
        </View>
      </View>
      <View className="mb-4">
        <AdaptiveButton
          title="Continue"
          variant="secondary"
          size="large"
          // onPress={()=>{router.push('/tasks/task-2')}}
          onPress={() => router.push("./testing")}
          className="mt-4 bg-[#d4af37]"
        />
      </View>
    </View>
  );
}
