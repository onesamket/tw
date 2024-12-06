import { useColorScheme as useNativeColorScheme } from 'react-native';
import { useColorScheme } from 'nativewind';
import { useEffect } from 'react';

export default function useTheme() {
  const systemColorScheme = useNativeColorScheme();
  const { colorScheme, setColorScheme, toggleColorScheme } = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  // Listen to system theme changes
  useEffect(() => {
    if (systemColorScheme) {
      setColorScheme(systemColorScheme);
    }
  }, [systemColorScheme, setColorScheme]);

  return {
    isDarkMode,
    colorScheme,
    setColorScheme,
    toggleColorScheme,
    systemColorScheme,
  };
}
