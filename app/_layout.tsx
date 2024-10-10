import { ThemeProvider, useTheme } from './ThemeContext';
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { View } from 'react-native';
import { StatusBar, StatusBarStyle } from 'expo-status-bar';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function AppLayout() {
  const { colors, statusBarStyle } = useTheme();

  const [loaded] = useFonts({
    Inter_900Black,
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    RubikGlitchPro: require("../assets/fonts/RubikGlitchPop-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar style={statusBarStyle} />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.headerBackground,
          },
          headerTintColor: colors.text,
          contentStyle: {
            backgroundColor: colors.background,
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{ title: "Tasks", headerTitleAlign: "center" }}
        />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </View>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <AppLayout />
    </ThemeProvider>
  );
}
