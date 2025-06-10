import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";

import Logo from "../assets/favicon.png";

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={Logo} className="mx-5" />
      <Text className="font-bold text-[18px]">The Number 1</Text>
      <Text className="mt-[10px] mb-[30px]">Reading List App</Text>
      <View className="bg-[#eee] p-5  mb-7 rounded-md shadow-[4px_4px_rgba(0,0,0,0.1)]">
        <Text>Hello, this is a card.</Text>
        <Text className="text-red-500">Testing nativewind.</Text>
      </View>
      <Link href="/about" className="mx-2 border-b-[1px]">
        About Page
      </Link>
      <Link href="/contact" className="mx-2 border-b-[1px]">
        Contact Page
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
