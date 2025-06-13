import { StyleSheet, useColorScheme } from "react-native";
import { Link } from "expo-router";
import ThemedView from "@/components/ThemedView";
import ThemedText from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";

export default function Contact() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] || Colors.light;
  return (
    <ThemedView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <ThemedText className="font-bold text-[18px]">About Page</ThemedText>
      <Link href="/" className="mx-2 border-b-[1px]">
        <ThemedText>Back Home</ThemedText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
