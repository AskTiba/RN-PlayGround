import { View, Text, Pressable } from "react-native";
import { Link } from "expo-router";

type TaskListItem = {
  task: number;
};

const TaskListItem = ({ task }: TaskListItem) => {
  return (
    <Link href={`/tasks/task-${task}`} asChild>
      <Pressable className="aspect-square flex-1 bg-[#32cd32] mx-1 border-2 border-white justify-center items-center rounded-2xl">
        <Text className="text-[#ffd700] text-8xl font-[RubikGlitchPro]">
          {task}
        </Text>
      </Pressable>
    </Link>
  );
};

export default TaskListItem;
