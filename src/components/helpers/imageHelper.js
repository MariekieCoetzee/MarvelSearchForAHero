import React from "react";
import { Image, StyleSheet } from "react-native";
import NoImage from "react-native-vector-icons/FontAwesome5";

const image = (item, size, screen, ITEM_SIZE) => {
  let itemSplit = item.path.split("/");
  if (itemSplit[itemSplit.length - 1] !== "image_not_available") {
    let img = item.path + size + item.extension;
    return (
      <Image
        source={{ uri: img }}
        style={[styles.imgStyle, { width: ITEM_SIZE }]}
      />
    );
  }
  return (
    <NoImage
      style={[styles.iconStyle, { width: ITEM_SIZE }]}
      name="user-secret"
    />
  );
};

const styles = StyleSheet.create({
  iconStyle: {
    height: 150,
    left: "35%",
    fontSize: 55,
    color: "grey",
    alignSelf: "center",
  },
  imgStyle: {
    marginTop: 10,
    height: 180,
    borderRadius: 25,
    margin: 10,
    alignSelf: "center",
  },
});
export default image;
