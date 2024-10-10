import { View, Text, FlatList } from "react-native";
import TaskListItem from "@/components/core/TaskListItem";
import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";

const RootIndex = () => {
  const tasks = [...Array(50)].map((val, index) => index + 1);

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Tasks",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontSize: 17, // Adjust the font size
            fontWeight: "bold", // Adjust the font weight
          },
          headerStyle: {
            // height: 100, // Set the desired height for the header
            backgroundColor: "#fdd700", // Optional: set the background color
          },
          // headerLeft: () => (
          //   <TouchableOpacity
          //     onPress={() => router.back()}
          //     activeOpacity={0.9}
          //     className="ml-4"
          //   >
          //     <ChevronLeft stroke={"#616161"} width={24} height={24} />
          //   </TouchableOpacity>
          // ),
        }}
      />
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

      
    </>
  );
};

export default RootIndex;
