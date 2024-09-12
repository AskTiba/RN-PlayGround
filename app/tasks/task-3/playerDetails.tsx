import AdaptiveButton from "@/components/navigation/AdaptiveButton";
import { router, Stack } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

interface Props {}

const PlayerInfoScreen: React.FC<Props> = () => {
  const [name, setName] = useState("");
  const [fideId, setFideId] = useState("");
  const [isFideIdUnknown, setIsFideIdUnknown] = useState(false);

  const handleNameChange = (newText: string) => {
    setName(newText);
  };

  const handleFideIdChange = (newText: string) => {
    setFideId(newText);
  };

  const handleFideIdUnknownPress = () => {
    setIsFideIdUnknown(true);
  };

  const handleSubmit = () => {
    // Handle the submitted data here
    console.log({ name, fideId });
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: "What is your name",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 18,
            fontWeight: "bold",
          },
        }}
      />

      <View className="" style={styles.inputContainer}>
        <View className="mb-4">
          <Text className="">
            This is how you will appear publicly to other people on this app
          </Text>
        </View>
        <Text style={styles.label}>Username</Text>
        <TextInput
          className="border-b border-b-[#333533]"
          autoCapitalize="words"
          value={name}
          onChangeText={handleNameChange}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>FIDE ID</Text>
        <TextInput
          className="border-b border-b-[#333533]"
          keyboardType="numeric"
          value={fideId}
          onChangeText={handleFideIdChange}
        />
        {isFideIdUnknown ? (
          <Text className="text-[#333533] text-base">Unknown</Text>
        ) : (
          <TouchableOpacity onPress={handleFideIdUnknownPress}>
            <Text className="text-[#333533] text-base">Unknown?</Text>
          </TouchableOpacity>
        )}
      </View>

      <AdaptiveButton
        title="Continue"
        size="medium"
        variant="success"
        // icon={<CustomIcon />}
        onPress={() => router.push("../../(tabs)")}
        className="bg-[#333533]"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
  },
});

export default PlayerInfoScreen;
