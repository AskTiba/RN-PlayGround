import React, { createContext, useState, useContext, useEffect } from 'react';
import { StatusBarStyle, setStatusBarStyle } from 'expo-status-bar';

interface ThemeColors {
  background: string;
  text: string;
  inputBackground: string;
  itemBackground: string;
  headerBackground: string;
}

interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  colors: ThemeColors;
  statusBarStyle: StatusBarStyle;
}

const lightColors: ThemeColors = {
  background: '#F3F4F6',
  text: '#1F2937',
  inputBackground: '#FFFFFF',
  itemBackground: '#FFFFFF',
  headerBackground: '#219C90',
};

const darkColors: ThemeColors = {
  background: '#697565',
  text: '#F9FAFB',
  inputBackground: '#374151',
  itemBackground: '#374151',
  headerBackground: '#111827',
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const colors = isDarkMode ? darkColors : lightColors;
  const statusBarStyle: StatusBarStyle = isDarkMode ? 'light' : 'dark';

  useEffect(() => {
    setStatusBarStyle(statusBarStyle);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, colors, statusBarStyle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
