// tasks/index.tsx
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function TasksHome() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-xl font-bold">Tasks Overview</Text>
      <Link href="/tasks/task-1">
        <Text className="mt-4 text-blue-500">Go to Task 1</Text>
      </Link>
    </View>
  );
}
