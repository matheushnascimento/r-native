import "@/global.css";
import { Text, View, Image } from "react-native";
import { Link } from "expo-router";

import Logo from "../assets/favicon.png";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center">
      <Image source={Logo} className="mx-5" />
      <Text className="font-bold text-[18px] text-[#800080]">The Number 1</Text>
      <Text className="mt-[10px] mb-[30px]">Reading List App</Text>
      <View className="bg-[#eee] p-5 rounded-md shadow-[4px_4px_rgba(0,0,0,0.1)]">
        <Text>Hello, this is a card.</Text>
        <Text className="text-red-500">Testing nativewind.</Text>
      </View>
      <Link href="/about">About Page</Link>
    </View>
  );
}
