import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Avatar from "@/components/core/Avatar";
import Checkmark from "@/assets/svgs/checkmark";

export default function notifications() {
  return (
    <View className="flex-1 px-4 bg-white">
      <Text>notifications</Text>
      <View className="space-y-4">
        <View className="flex-row">
          <Avatar
            size="lg"
            source={require("@assets/images/mackline.png")}
            badge={{
              content: 1,
              bgColor: "bg-[#00bbf9]",
              // textColor: "text-[#f4e9cd]",
            }}
            activityRing={{
              progress: 0.7,
              color: "border-green-500",
            }}
          />
          <Avatar
            size="lg"
            source={require("@assets/images/druci.png")}
            badge={{
              content: 1,
              bgColor: "bg-[#00bbf9]",
              // textColor: "text-[#f4e9cd]",
            }}
            activityRing={{
              progress: 0.7,
              color: "border-green-500",
            }}
          />
          <Avatar
            size="lg"
            source={require("@assets/images/nerima.png")}
            badge={{
              content: 1,
              bgColor: "bg-[#00bbf9]",
              // textColor: "text-[#f4e9cd]",
            }}
            activityRing={{
              progress: 0.7,
              color: "border-green-500",
            }}
          />
          <Avatar
            size="lg"
            source={require("@assets/images/kharolyne.png")}
            badge={{
              content: 1,
              bgColor: "bg-[#00bbf9]",
              // textColor: "text-[#f4e9cd]",
            }}
            activityRing={{
              progress: 0.7,
              color: "border-green-500",
            }}
          />
        </View>
        <View className="">
          <Avatar
            size="md"
            source={require("@assets/images/nerima.png")}
            badge={{
              icon: <Checkmark height={10} width={10} strokeWidth={3} />,
              bgColor: "bg-green-500",
            }}
          />
        </View>
      </View>
    </View>
  );
}
