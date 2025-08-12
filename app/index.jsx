import { StyleSheet } from "react-native";
import { Link } from "expo-router";

import ThemedCard from "@/components/ThemedCard";
import ThemedView from "@/components/ThemedView";
import ThemedLogo from "@/components/ThemedLogo";
import Spacer from "@/components/Spacer";
import ThemedText from "@/components/ThemedText";

const Home = () => {
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
      <Link href="/login" className="mx-2 border-b-[1px]">
        <ThemedText>Login Page</ThemedText>
      </Link>
      <Link href="/register" className="mx-2 border-b-[1px]">
        <ThemedText>Register Page</ThemedText>
      </Link>
      <Link href="/profile" className="mx-2 border-b-[1px]">
        <ThemedText>Profile Page</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    marginVertical: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
  },
});
