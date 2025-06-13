import { Colors } from "@/constants/Colors";
import { useColorScheme, View } from "react-native";

export default function ThemedView({ style, ...props }) {
  const colorScheme = useColorScheme();
  const themes = Colors[colorScheme] || Colors.light;
  return (
    <View style={[{ backgroundColor: themes.background }, style]} {...props} />
  );
}
