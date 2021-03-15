import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Platform,
} from "react-native";
import NoImage from "../helpers/imageHelper";

const { width } = Dimensions.get("screen");
//create card layout
const ITEM_SIZE = Platform.OS === "ios" ? width * 0.72 : width * 0.74;
const Comics = ({ item }) => {
  //check if there is image and handle it
  //TODO move this into imageHelper.
  const comicImage = (item, size) => {
    let itemSplit = item.path.split("/");
    if (itemSplit[itemSplit.length - 1] !== "image_not_available") {
      let img = item.path + "/" + size + "." + item.extension;
      return <Image source={{ uri: img }} style={styles.cardImageStyle} />;
    }
    return <NoImage style={styles.iconStyle} name="image" />;
  };
  return (
    <View
      style={{
        width: ITEM_SIZE,
        margin: 10,
        //   backgroundColor: "white",
        //   borderRadius: 34,
      }}
    >
      {item.images[0] ? comicImage(item.images[0], "standard_fantastic") : null}
      <View style={styles.nameBoxStyle}>
        <Text
          style={{
            fontWeight: "900",
            fontSize: 25,
            textAlign: "center",
            color: "white",
          }}
        >
          {item.title}
        </Text>
        {/* <Text>{item.description}</Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nameBoxStyle: {
    backgroundColor: "rgba(34,38,36,0.7)",
    position: "absolute",
    width: ITEM_SIZE,
    bottom: 0,
    padding: 10,
    overflow: "hidden",
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  cardImageStyle: {
    height: ITEM_SIZE, //,
    width: ITEM_SIZE,
    // resizeMode: "cover",
    borderColor: "white",
    borderWidth: 1,
    alignSelf: "center",
    borderRadius: 24,
    margin: 0,
    marginBottom: 5,
  },
  cardContainer: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 34,
  },
});

export default Comics;
