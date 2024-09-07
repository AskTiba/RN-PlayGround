import React from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
  TextStyle,
} from "react-native";

interface AdaptiveButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  className?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const AdaptiveButton: React.FC<AdaptiveButtonProps> = ({
  title,
  variant = "primary",
  size = "medium",
  className = "",
  style,
  textStyle,
  ...props
}) => {
  const getButtonStyles = () => {
    const baseStyles = "rounded-md items-center justify-center";
    const variantStyles = {
      primary: "bg-blue-500 active:bg-blue-600",
      secondary: "bg-gray-200 active:bg-gray-300",
      outline: "border border-blue-500 active:bg-blue-50",
    };
    const sizeStyles = {
      small: "px-3 py-1",
      medium: "px-4 py-2",
      large: "px-6 py-3",
    };
    return `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  };

  const getTextStyles = () => {
    const baseStyles = "font-semibold text-center";
    const variantStyles = {
      primary: "text-white",
      secondary: "text-gray-800",
      outline: "text-blue-500",
    };
    const sizeStyles = {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    };
    return `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]}`;
  };

  return (
    <TouchableOpacity className={getButtonStyles()} style={style} {...props}>
      <Text className={getTextStyles()} style={textStyle}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default AdaptiveButton;
