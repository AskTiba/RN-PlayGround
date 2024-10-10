import Cancel from '@/assets/svgs/cancel';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch } from 'react-native';
import Animated, { FadeInDown, Layout, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../ThemeContext';

interface TodoItem {
  text: string;
  completed: boolean;
  isEditing: boolean;
}

const TodoApp = () => {
  const [task, setTask] = useState<string>('');
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const { isDarkMode, toggleDarkMode, colors } = useTheme();

  // Function to add the task to the list
  const addTask = () => {
    if (task.trim()) {
      const newTask: TodoItem = { text: task.trim(), completed: false, isEditing: false };
      setTodoList([...todoList, newTask]);
      setTask('');
    }
  };

  // Function to toggle task completion
  const toggleComplete = (index: number) => {
    const updatedList = [...todoList];
    updatedList[index].completed = !updatedList[index].completed;
    setTodoList(updatedList);
  };

  // Function to remove a task by index
  const removeTask = (index: number) => {
    const updatedList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedList);
  };

  // Function to toggle edit mode for a task
  const toggleEditMode = (index: number) => {
    const updatedList = [...todoList];
    updatedList[index].isEditing = !updatedList[index].isEditing;
    setTodoList(updatedList);
  };

  // Function to save the edited task
  const saveEditedTask = (index: number, updatedText: string) => {
    const updatedList = [...todoList];
    updatedList[index].text = updatedText.trim() || updatedList[index].text; // Prevent empty text
    updatedList[index].isEditing = false;
    setTodoList(updatedList);
  };

  // Define theme colors
  const theme = {
    background: isDarkMode ? '#1F2937' : '#F3F4F6',
    text: isDarkMode ? '#F9FAFB' : '#1F2937',
    inputBackground: isDarkMode ? '#374151' : '#FFFFFF',
    itemBackground: isDarkMode ? '#374151' : '#FFFFFF',
    headerBackground: isDarkMode ? '#111827' : '#219C90',
  };

  const iconRotation = useAnimatedStyle(() => {
    return {
      transform: [{ rotate: withTiming(isDarkMode ? '40deg' : '0deg') }],
    };
  });

  return (
    <View className={`flex-1 p-4`} style={{ backgroundColor: colors.background }}>
      {/* <StatusBar style={isDarkMode ? 'light' : 'dark'} /> */}
      <Stack.Screen options={{
        headerTitle: 'To-Do List',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontFamily: 'Inter_900Black',
        },
        headerRight: () => (
          <TouchableOpacity onPress={toggleDarkMode} className="mr-1">
            <Animated.View style={iconRotation}>
              <Ionicons 
                name={isDarkMode ? "moon" : "sunny"} 
                size={24} 
                color={isDarkMode ? "#f5dd4b" : "#fff"}
              />
            </Animated.View>
          </TouchableOpacity>
        ),
      }} />

      {/* Input field for new task */}
      <View className={`flex-row mb-4`}>
        <TextInput
          className={`flex-1 border border-gray-300 rounded px-3 py-2`}
          style={{ backgroundColor: colors.inputBackground, color: colors.text }}
          placeholder="Add a new task"
          placeholderTextColor={isDarkMode ? '#9CA3AF' : '#6B7280'}
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity className={`ml-2 flex items-center justify-center bg-blue-500 px-4 py-2 rounded`} onPress={addTask}>
          <Text className={`text-white font-[Inter_900Black]`}>Add</Text>
        </TouchableOpacity>
      </View>

      <Animated.FlatList
        data={todoList}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => (
          <Animated.View layout={Layout}>
            <View className={`flex-row justify-between items-center mb-2 p-3 rounded shadow`} style={{ backgroundColor: colors.itemBackground }}>
              {/* Toggle between display mode and edit mode */}
              {item.isEditing ? (
                <TextInput
                  className={`flex-1 border-b border-gray-300`}
                  style={{ color: colors.text }}
                  value={item.text}
                  onChangeText={(newText) => saveEditedTask(index, newText)}
                  onSubmitEditing={() => saveEditedTask(index, item.text)}
                />
              ) : (
                <TouchableOpacity className={`flex-1`} onPress={() => toggleComplete(index)}>
                  <Text
                    style={{ color: item.completed ? (isDarkMode ? '#9CA3AF' : '#6B7280') : colors.text }}
                    className={`${item.completed ? 'line-through' : ''}`}>
                    {item.text}
                  </Text>
                </TouchableOpacity>
              )}

              {/* Edit button */}
              <TouchableOpacity
                className={`mx-2 bg-yellow-500 px-3 py-1 rounded`}
                onPress={() => toggleEditMode(index)}
              >
                <Text className={`text-white`}>{item.isEditing ? 'Save' : 'Edit'}</Text>
              </TouchableOpacity>

              {/* Remove button */}
              <TouchableOpacity
                className={``}
                onPress={() => removeTask(index)}
              >
                <Cancel color={`#800000`} />
              </TouchableOpacity>
            </View>
          </Animated.View>
        )}
        keyboardDismissMode='on-drag'
        itemLayoutAnimation={FadeInDown}
      />
    </View>
  );
};

export default TodoApp;
