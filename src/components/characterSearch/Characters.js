//styling insperation : https://www.youtube.com/watch?v=F8x-dyIsrJ8&t=51s
//https://reactnative.dev/docs/flatlist

import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import NoImage from "react-native-vector-icons/Feather";

const { width, height } = Dimensions.get("screen");
const ITEM_SIZE = Platform.OS === "ios" ? width * 0.72 : width * 0.74;

//check if there is image and handle it
const image = (item, size) => {
  let itemSplit = item.path.split("/");
  if (itemSplit[itemSplit.length - 1] !== "image_not_available") {
    let img = item.path + size + item.extension;
    return <Image source={{ uri: img }} style={styles.imgStyle} />;
  }
  return <NoImage style={styles.iconStyle} name="image" />;
};

const Characters = ({ items, navigation }) => {
  return (
    <SafeAreaView style={styles.viewStyle}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        bounces={false}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={styles.touchableStyle}
              key={item.id.toString()}
              onPress={() => {                
                navigation.navigate("character", {
                  character: item,
                  image: image,
                });
              }}
            >
              {image(item.thumbnail, "/standard_medium.")}
              <View style={styles.nameBoxStyle}>
                <Text style={styles.nameStyle}>{item.name}</Text>
                <Text style={styles.descriptionStyle}>{item.description}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  viewStyle: {
    backgroundColor: "white",
  },
  iconStyle: {
    width: 70,
    height: 70,
    borderRadius: 25,
    fontSize: 55,
    color: "grey",
  },
  imgStyle: {
    width: 70,
    height: 70,
    borderRadius: 25,
    alignSelf: "center",
    borderColor: "grey",
    borderWidth: 1,
  },
  nameBoxStyle: {
    padding: 5,
    width: ITEM_SIZE,
  },
  nameStyle: {
    fontSize: 23,
    marginBottom: 5,
    fontWeight: "600",
  },
  descriptionStyle: {
    fontSize: 10,
  },
  touchableStyle: {
    flexDirection: "row",
    alignContent: "center",
    margin: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: "rgb(255,255,255)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    elevation:2,
    shadowOpacity: 0.9,
    shadowRadius: 5,
  },
});

export default Characters;
