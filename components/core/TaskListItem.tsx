import { View, Text, Pressable } from "react-native";
import React from "react";
import { Link } from "expo-router";

type TaskListItem = {
  task: number;
};

const TaskListItem = ({ task }: TaskListItem) => {
  return (
    <Link href={`/task${task}`} asChild>
      <Pressable>
        <Text>{task}</Text>
      </Pressable>
    </Link>
  );
};

export default TaskListItem;
