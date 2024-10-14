import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { router, Stack } from "expo-router";
import Cancel from "@/assets/svgs/cancel";
import AdaptiveButton from "@/components/navigation/AdaptiveButton";
import Checkbox from "expo-checkbox";
import { Ionicons } from '@expo/vector-icons'; // Make sure to install this package if not already present


export default function Password() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isConfirmFocused, setIsConfirmFocused] = useState(false);
  const [conditions, setConditions] = useState({
    uppercase: false,
    lowercase: false,
    number: false,
    symbol: false,
    minLength: false,
    passwordsMatch: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const passwordConditions = [
    { key: 'minLength', text: "At least 8 characters" },
    { key: 'uppercase', text: "An uppercase letter" },
    { key: 'lowercase', text: "A lowercase letter" },
    { key: 'number', text: "A number" },
    { key: 'symbol', text: "A symbol" },
  ];

  useEffect(() => {
    setConditions({
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      symbol: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      minLength: password.length >= 8,
      passwordsMatch: password === confirmPassword && password.length > 0,
    });
  }, [password, confirmPassword]);

  const allConditionsMet = Object.values(conditions).every(Boolean);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View className="px-4">
      <Stack.Screen options={{ headerTitle: "" }} />
      <View className="">
        <Text className="text-3xl font-bold my-4">Create password</Text>
      </View>
      <View className="">
        <Text className="text-base text-[#8b8c89]">
          Make sure your password is at least 8 characters long and meets at least 3 of the following conditions:
        </Text>
      </View>
      <View className="mt-4">
        {passwordConditions.map((condition) => (
          <View key={condition.key} className="flex-row items-center mb-2">
            <Checkbox
            className="rounded-full h-4 w-4"
              value={conditions[condition.key as keyof typeof conditions]}
              color={conditions[condition.key as keyof typeof conditions] ? '#333533' : undefined}
            />
            <Text className="ml-2 text-base text-[#8b8c89]">{condition.text}</Text>
          </View>
        ))}
      </View>
      <View className="flex-row items-center justify-between my-4 border-b border-b-[#333533] rounded-md">
        <TextInput
          className="flex-1 h-[40px] pl-2"
          onChangeText={setPassword}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={!showPassword}
          value={password}
        />
        <TouchableOpacity className="px-2" onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="#8b8c89" />
        </TouchableOpacity>
        {password.length > 0 && isFocused && (
          <TouchableOpacity className="px-2" onPress={() => setPassword("")}>
            <Cancel color={"#8b8c89"} />
          </TouchableOpacity>
        )}
      </View>
      <View className="flex-row items-center justify-between my-4 border-b border-b-[#333533] rounded-md">
        <TextInput
          className="flex-1 h-[40px] pl-2"
          onChangeText={setConfirmPassword}
          onFocus={() => setIsConfirmFocused(true)}
          onBlur={() => setIsConfirmFocused(false)}
          placeholder="Confirm Password"
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={!showConfirmPassword}
          value={confirmPassword}
        />
        <TouchableOpacity className="px-2" onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
          <Ionicons name={showConfirmPassword ? "eye-off" : "eye"} size={24} color="#8b8c89" />
        </TouchableOpacity>
        {confirmPassword.length > 0 && isConfirmFocused && (
          <TouchableOpacity className="px-2" onPress={() => setConfirmPassword("")}>
            <Cancel color={"#8b8c89"} />
          </TouchableOpacity>
        )}
      </View>
      <View className="mt-8">
        <AdaptiveButton
          title="Continue"
          size="medium"
          variant="primary"
          onPress={() => router.push("./playerDetails")}
          className={`${allConditionsMet ? 'bg-[#333533]' : 'bg-[#333533] opacity-60'}`}
          disabled={!allConditionsMet}
        />
      </View>
    </View>
  );
}
