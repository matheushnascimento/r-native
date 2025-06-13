import { Colors } from "@/constants/Colors";
import { Text, useColorScheme } from "react-native";

export default function ThemedText({ style, title = false, ...props }) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  const textColor = title ? theme.title : theme.text;
  return <Text {...props} style={[{ color: textColor }, style]} />;
}
