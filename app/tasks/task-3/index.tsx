import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { router, Stack } from "expo-router";
import AdaptiveButton from "@/components/navigation/AdaptiveButton";
import Cancel from "@/assets/svgs/cancel";

const index = () => {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const onChangeText = (newText: React.SetStateAction<string>) => {
    setText(newText);
  };
  return (
    <ThemedView className="flex-1 px-4">
      <Stack.Screen options={{ headerShown: false }} />
      <ThemedText className="mt-40 mb-4 text-3xl font-bold text-center">
        Log in or sign up
      </ThemedText>
      <View className="flex-row items-center justify-between my-4 bg-[#d6d6d6] rounded-md">
        <TextInput
          className="flex-1 h-[40px] pl-2"
          onChangeText={onChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect
          value={text}
        />

        {text.length > 0 && isFocused && (
          <TouchableOpacity className="px-2" onPress={() => onChangeText("")}>
            <Cancel color={"#8b8c89"} />
          </TouchableOpacity>
        )}
      </View>
      <AdaptiveButton
        title="Continue"
        size="medium"
        variant="success"
        // icon={<CustomIcon />}
        onPress={() => router.push("./password")}
        className="bg-[#333533]"
      />
      <ThemedText className="py-4 text-[#8b8c89] text-center">or</ThemedText>
      <View className="space-y-4">
        <AdaptiveButton
          title="Continue with Google"
          size="medium"
          variant="outline"
          // icon={<CustomIcon />}
          // onPress={() => router.push("./onBoarding")}
          className="border-[#8b8c89]"
        />
        <AdaptiveButton
          title="Continue with Apple"
          size="medium"
          variant="outline"
          // icon={<CustomIcon />}
          // onPress={() => router.push("./onBoarding")}
          className="border-[#8b8c89]"
        />
        <AdaptiveButton
          title="Continue with Facebook"
          size="medium"
          variant="outline"
          // icon={<CustomIcon />}
          // onPress={() => router.push("./onBoarding")}
          className="border-[#8b8c89]"
        />
      </View>
    </ThemedView>
  );
};

export default index;
