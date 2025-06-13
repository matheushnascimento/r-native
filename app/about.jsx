import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { Link } from "expo-router";
import { Colors } from "@/constants/Colors";

import ThemedView from "@/components/ThemedView";
import ThemedText from "@/components/ThemedText";

export default function About() {
  const colorScheme = useColorScheme();
  console.log(colorScheme);
  const theme = Colors[colorScheme] ?? Colors.light;
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
