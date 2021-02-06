import React from "react";
import { View, Dimensions, StyleSheet, Image } from "react-native";

const { width, height } = Dimensions.get("screen");
//check if there is image and handle it
const backDropImage = (item, size) => {
  let itemSplit = item.path.split("/");
  if (itemSplit[itemSplit.length - 1] !== "image_not_available") {
    let img = item.path + size + item.extension;
    return <Image source={{ uri: img }} style={styles.imgStyle} />;
  }
};


const BackDrop = ({ image }) => {
  return <View>{backDropImage(image, "/portrait_xlarge.")}</View>;
};
const styles = StyleSheet.create({
  imgStyle: {
    position: "absolute",
    width,
    height,
  }
});

export default BackDrop;
