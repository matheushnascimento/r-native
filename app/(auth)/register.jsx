import { StyleSheet, Text } from "react-native";
import React from "react";

// themed Components
import ThemedButton from "@/components/ThemedButton";
import ThemedText from "@/components/ThemedText";
import ThemedView from "@/components/ThemedView";
import Spacer from "@/components/Spacer";
import { Link } from "expo-router";

const Register = () => {
  const handleSubmit = () => {
    console.log("É isso aí");
  };
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title={true} style={styles.title}>
        Register to Your Account
      </ThemedText>

      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: "#f2f2f2" }}>Register</Text>
      </ThemedButton>

      <Spacer height={100} />
      <Link href="/login" style={styles.link}>
        <ThemedText style={{ textAlign: "center" }}>login instead</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
});
