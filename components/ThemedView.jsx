import { Colors } from "@/constants/Colors";
import { useColorScheme, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ThemedView({ style, safe = true, ...props }) {
  const colorScheme = useColorScheme();
  const themes = Colors[colorScheme] || Colors.light;
  if (!safe)
    return (
      <View
        style={[{ backgroundColor: themes.background }, style]}
        {...props}
      />
    );

  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          backgroundColor: themes.background,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        style,
      ]}
      {...props}
    />
  );
}
