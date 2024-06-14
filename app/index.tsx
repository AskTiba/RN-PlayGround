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
        numColumns={2}
        columnWrapperStyle={{
          paddingHorizontal: 4,
          paddingVertical: 5,
          // marginTop: 2,
        }}
        className="bg-blue-700 pb-2"
      />
      <StatusBar style="auto" />
    </>
  );
};

export default RootIndex;
