import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Contact() {
  return (
    <View style={styles.container}>
      <Text className="font-bold text-[18px]">Contact Page</Text>
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
