import { StyleSheet } from "react-native";
import { Link } from "expo-router";

import ThemedCard from "@/components/ThemedCard";
import ThemedView from "@/components/ThemedView";
import ThemedLogo from "@/components/ThemedLogo";
import Spacer from "@/components/Spacer";
import ThemedText from "@/components/ThemedText";

export default function Home() {
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedLogo />
      <Spacer />
      <ThemedText className="font-bold text-[18px] ">The Number 1</ThemedText>
      <ThemedText>Reading List App</ThemedText>
      <Spacer />
      <ThemedCard className="mb-7 rounded-md ">
        <ThemedText>Hello, this is a card.</ThemedText>
        <ThemedText className="text-black">Testing nativewind.</ThemedText>
      </ThemedCard>
      <Link href="/about" className="mx-2 border-b-[1px]">
        <ThemedText>About Page</ThemedText>
      </Link>
      <Link href="/contact" className="mx-2 border-b-[1px]">
        <ThemedText>Contact Page</ThemedText>
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
