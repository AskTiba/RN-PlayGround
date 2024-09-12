// ChessPlayersTable.tsx
import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import ugChessPlayers from "@/data/ugChessPlayers";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";

interface ChessPlayer {
  id: number;
  name: string;
  age: number;
  chessRating: number;
}

const ChessPlayersTable = () => {
  const renderItem = ({ item }: { item: ChessPlayer }) => (
    <TouchableOpacity className="items-center" style={styles.row}>
      <Text className="w-1/12 text-left">{item.id}.</Text>
      <Text className="w-3/5">{item.name}</Text>
      <Text className="flex w-1/6  text-center">{item.age}</Text>
      <Text className="w-1/6 text-center">{item.chessRating}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="" style={styles.container}>
      <LinearGradient
        colors={["#06e1e1", "#bbfaff", "#06e1e1"]}
        className="absolute left-0 right-0 top-0 h-full py-4"
      >
        <Stack.Screen options={{ headerShown: false }} />
        <View className="py-4">
          <Text className="text-base font-extrabold text-center">
            {" "}
            Top 100 Players September 2024{" "}
          </Text>
        </View>
        <View className="mx-1" style={styles.headerRow}>
          <Text className="w-1/12" style={styles.headerColumn}>
            ID
          </Text>
          <Text className="w-3/5" style={styles.headerColumn}>
            Name
          </Text>
          <Text className="w-1/6 text-center" style={styles.headerColumn}>
            Age
          </Text>
          <Text className="w-1/6 text-center" style={styles.headerColumn}>
            Rating
          </Text>
        </View>
        <FlatList
          data={ugChessPlayers}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerRow: {
    flexDirection: "row",
    backgroundColor: "#06e1e1",
    padding: 10,
  },
  headerColumn: {
    fontWeight: "bold",
  },
  row: {
    flex: 1,
    flexDirection: "row",
    padding: 13,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default ChessPlayersTable;
