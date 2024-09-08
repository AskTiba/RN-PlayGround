import React from "react";
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
  View,
} from "react-native";

interface AdaptiveButtonProps extends TouchableOpacityProps {
  title: string;
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "danger"
    | "success"
    | "warning"
    | "info";
  size?: "small" | "medium" | "large";
  className?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: React.ReactNode; // updated to accept a React component
  loading?: boolean;
  disabled?: boolean;
  theme?: {
    primary: string;
    secondary: string;
    outline: string;
    danger: string;
    success: string;
    warning: string;
    info: string;
  };
  accessibilityLabel?: string;
  accessibilityHint?: string;
  paddingHorizontal?: number;
  paddingVertical?: number;
}

const AdaptiveButton: React.FC<AdaptiveButtonProps> = ({
  title,
  variant = "primary",
  size = "medium",
  className = "",
  style,
  textStyle,
  icon,
  loading,
  disabled,
  theme,
  accessibilityLabel,
  accessibilityHint,
  paddingHorizontal,
  paddingVertical,
  ...props
}) => {
  const getButtonStyles = () => {
    const baseStyles = "rounded-md items-center justify-center";

    const variantStyles = {
      primary: theme?.primary || "bg-blue-500 active:bg-blue-600",
      secondary: theme?.secondary || "bg-gray-200 active:bg-gray-300",
      outline: theme?.outline || "border border-blue-500 active:bg-blue-50",
      danger: theme?.danger || "bg-red-500 active:bg-red-600",
      success: theme?.success || "bg-green-500 active:bg-green-600",
      warning: theme?.warning || "bg-yellow-500 active:bg-yellow-600",
      info: theme?.info || "bg-blue-500 active:bg-blue-600",
    };

    const disabledStyles = {
      primary: "bg-blue-300",
      secondary: "bg-gray-100",
      outline: "border border-blue-200 bg-transparent",
      danger: "bg-red-300",
      success: "bg-green-300",
      warning: "bg-yellow-300",
      info: "bg-blue-300",
    };

    const sizeStyles = {
      small: "px-3 py-1",
      medium: "px-4 py-2",
      large: "px-6 py-3",
    };

    // Apply disabled styles if the button is disabled
    const currentVariantStyles = disabled
      ? disabledStyles[variant]
      : variantStyles[variant];

    return `${baseStyles} ${currentVariantStyles} ${sizeStyles[size]} ${className}`;
  };

  const getTextStyles = () => {
    const baseStyles = "font-semibold text-center";

    const variantStyles = {
      primary: theme?.primary || "text-white",
      secondary: theme?.secondary || "text-gray-800",
      outline: theme?.outline || "text-blue-500",
      danger: theme?.danger || "text-red-500",
      success: theme?.success || "text-white",
      warning: theme?.warning || "text-yellow-500",
      info: theme?.info || "text-blue-500",
    };

    const disabledTextStyles = {
      primary: "text-blue-100",
      secondary: "text-gray-400",
      outline: "text-blue-200",
      danger: "text-red-100",
      success: "text-green-100",
      warning: "text-yellow-200",
      info: "text-blue-100",
    };

    const sizeStyles = {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    };

    // Apply disabled text styles if the button is disabled
    const currentTextStyles = disabled
      ? disabledTextStyles[variant]
      : variantStyles[variant];

    return `${baseStyles} ${currentTextStyles} ${sizeStyles[size]}`;
  };

  return (
    <TouchableOpacity
      className={getButtonStyles()}
      style={[
        style,
        {
          paddingHorizontal: paddingHorizontal,
          paddingVertical: paddingVertical,
        },
      ]}
      disabled={disabled}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      {...props}
    >
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <View className="flex flex-row items-center">
          {icon && <View className="mr-2">{icon}</View>}
          <Text className={getTextStyles()} style={textStyle}>
            {title}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default AdaptiveButton;
