// my own generic message component
import React from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
} from "react-native";

const {width, height} = Dimensions.get("screen");
const ErrorMessage = ({ error}) => {
  console.log(error);
  return (
    <View>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  messageBoxStyle: {
    backgroundColor: "rgb(255,255,255)",
    width,
    height
  },
  error:{
    color: "red",
    textAlign:"center",
    fontWeight:"600",margin: 10,
    fontSize: 30,
  },
  
});

export default ErrorMessage;
