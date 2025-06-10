import { StyleSheet, Text, useColorScheme, View } from "react-native";
import { Link } from "expo-router";
import { Colors } from "@/constants/Colors";

export default function About() {
  const colorScheme = useColorScheme();
  console.log(colorScheme);
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text className="font-bold text-[18px]">About Page</Text>
      <Link href="/" className="mx-2 border-b-[1px]">
        Back Home
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
