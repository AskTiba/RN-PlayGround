import { Tabs } from "expo-router";
import React from "react";

import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import Notification from "@/assets/svgs/notification";
import Pawn from "@/assets/svgs/pawn";
import Star from "@/assets/svgs/star";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        headerShown: true,
        headerTitle: "",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Pawn stroke={color} height={28} width={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="star"
        options={{
          title: "Star",
          tabBarIcon: ({ color, focused }) => (
            <Star
              className={``}
              focused={focused}
              stroke={color}
              height={32}
              width={32}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ color, focused }) => (
            <Notification
              className={``}
              focused={focused}
              stroke={color}
              height={28}
              width={28}
            />
          ),
        }}
      />
    </Tabs>
  );
}
