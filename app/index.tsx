import { View, Text, FlatList } from "react-native";
import TaskListItem from "@/components/core/TaskListItem";
import { StatusBar } from "expo-status-bar";

const RootIndex = () => {
  const tasks = [...Array(50)].map((val, index) => index + 1);

  return (
    <>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskListItem task={item} />}
      />
      <StatusBar style="dark" />
    </>
  );
};

export default RootIndex;
