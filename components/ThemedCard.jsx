import { StyleSheet, useColorScheme, View } from "react-native";
import { Colors } from "@/constants/Colors";

export default function ThemedCard({ className, style, ...props }) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <View
      className={className}
      style={[{ backgroundColor: theme.uiBackground }, styles.card, style]}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    padding: 20,
    boxShadow: "4px 4px rgba(0,0,0,0.1)",
  },
});
