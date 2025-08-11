import { StyleSheet } from "react-native";
import React from "react";

// themed Components
import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";
import Spacer from "@/components/Spacer";
import { Link } from "expo-router";

const Register = () => {
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Register to Your Account
      </ThemedText>

      <Spacer height={100} />

      <Link href="/login" style={styles.link}>
        <ThemedText style={{ textAlign: "center" }}>Login instead</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
});
