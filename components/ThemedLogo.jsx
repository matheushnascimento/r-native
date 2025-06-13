import { Image, useColorScheme } from "react-native";
import DarkLogo from "@images/logo_dark.png";
import LightLogo from "@images/logo_light.png";
export default function ThemedCard({ ...props }) {
  const colorScheme = useColorScheme();

  const logo = colorScheme === "dark" ? DarkLogo : LightLogo;

  return <Image source={logo} {...props} />;
}
