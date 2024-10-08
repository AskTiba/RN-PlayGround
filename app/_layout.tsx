import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useContext, useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
// import UserContextProvider from "@/context/UserContextProvider";
// import UserContext from "@/context/UserContext";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    RubikGlitchPro: require("../assets/fonts/RubikGlitchPop-Regular.ttf"),
  });

  // const {user, setUser} = useContext(UserContext);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      {/* <UserContextProvider value={{ user, setUser }}> */}
        <Stack>
          <Stack.Screen
            name="index"
            options={{ title: "Tasks", headerTitleAlign: "center" }}
          />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="tasks" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      {/* </UserContextProvider> */}
    </ThemeProvider>
  );
}
