import React from "react";
import { View, Image, Text } from "react-native";
import { SvgUri } from "react-native-svg";

interface AvatarProps {
  size?: "sm" | "md" | "lg";
  source: { uri: string } | number;
  badge?:
    | {
        content: string | number;
        bgColor?: string;
        textColor?: string;
      }
    | {
        icon: React.ReactNode;
        bgColor?: string;
      };
  activityRing?: {
    progress: number;
    color?: string;
  };
}

const Avatar: React.FC<AvatarProps> = ({
  size = "md",
  source,
  badge,
  activityRing,
}) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const badgeSizeClasses = {
    sm: "w-3 h-3 text-[8px]",
    md: "w-4 h-4 text-[10px]",
    lg: "w-5 h-5 text-xs",
  };

  const renderBadge = () => {
    if (!badge) return null;

    const badgeClass = `absolute bottom-1 right-1 ${
      badgeSizeClasses[size]
    } rounded-full flex justify-center items-center ${
      badge.bgColor || "bg-red-500"
    } border border-white`;

    if ("icon" in badge) {
      return <View className={badgeClass}>{badge.icon}</View>;
    }

    return (
      <View className={badgeClass}>
        <Text
          className={`font-bold text-center text-[12px] ${
            badge.textColor || "text-white"
          }`}
          style={{
            textAlign: "center",
            alignSelf: "center",
            justifyContent: "center",
          }}
        >
          {badge.content}
        </Text>
      </View>
    );
  };

  const renderActivityRing = () => {
    if (!activityRing) return null;

    const ringSize = {
      sm: "w-9 h-9",
      md: "w-[52px] h-[52px]",
      lg: "w-[68px] h-[68px]",
    }[size];

    const rotation = `${activityRing.progress * 360}deg`;

    return (
      <View
        className={`absolute inset-[-1px] ${ringSize} rounded-full border-2 ${
          activityRing.color || "border-green-500"
        }`}
        style={{
          borderRightColor: "transparent",
          borderBottomColor: "transparent",
          transform: [{ rotate: rotation }],
        }}
      />
    );
  };

  return (
    <View className="relative inline-flex">
      <View
        className={`relative ${sizeClasses[size]} rounded-full overflow-visible p-1`}
      >
        {typeof source === "number" ? (
          <Image source={source} className={`w-full h-full rounded-full`} />
        ) : (
          <SvgUri width="100%" height="100%" uri={source.uri} />
        )}
        {renderBadge()}
        {renderActivityRing()}
      </View>
    </View>
  );
};

export default Avatar;
