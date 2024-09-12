import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Cancel from "@/assets/svgs/cancel";
import AdaptiveButton from "@/components/navigation/AdaptiveButton";
import { router, Stack } from "expo-router";

export default function password() {
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
    <View className="px-4">
      <Stack.Screen options={{ headerTitle: "" }} />
      <View className="">
        <Text className="text-3xl font-bold my-4">Create password</Text>
      </View>
      <View className="">
        <Text className="text-base text-[#8b8c89]">
          Make sure your password is 8 or more characters and has atleast 3 of
          the following:
        </Text>
      </View>
      <View>
        <FlatList
          data={[
            { text: "An uppercase letter" },

            { text: "An lowercase letter" },

            { text: "A number" },

            { text: "A symbol" },
          ]}
          renderItem={({ item }) => (
            <Text className="text-base text-[#8b8c89]">• {item.text}</Text>
          )}
        />
      </View>
      <View className="flex-row items-center justify-between my-4 border-b border-b-[#333533] rounded-md">
        <TextInput
          className="flex-1 h-[40px] pl-2"
          onChangeText={onChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Password"
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
      <View className="mt-8">
        <AdaptiveButton
          title="Continue"
          size="medium"
          variant="primary"
          // icon={<CustomIcon />}
          onPress={() => router.push("./playerDetails")}
          className="bg-[#333533]"
        />
      </View>
    </View>
  );
}
