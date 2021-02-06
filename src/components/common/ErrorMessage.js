// my own generic message component
import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const { width, height } = Dimensions.get("screen");
const ErrorMessage = ({ error }) => {
  const { message, info, icon } = error;
  return (
    <View style={styles.messageBoxStyle}>
      <Icon name={icon} color="red" style={styles.icon} />
      <Text style={styles.error}>{message}</Text>
      <Text style={styles.info}>{info}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  messageBoxStyle: {
    backgroundColor: "rgb(255,255,255)",
    width,
    height,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  error: {
    textAlign: "center",
    color: "red",
    fontWeight: "600",
    margin: 10,
    fontSize: 30,
  },
  info: {
    color: "red",
    textAlign: "center",
    fontWeight: "400",
    margin: 10,
    fontSize: 20,
  },
  icon: {
    fontSize: 80,
    textAlign: "center",
    margin: 40,
  },
});

export default ErrorMessage;
