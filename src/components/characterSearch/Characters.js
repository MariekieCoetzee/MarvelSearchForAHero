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
import NoImage from "react-native-vector-icons/FontAwesome5";

const { width, height } = Dimensions.get("screen");
const ITEM_SIZE = Platform.OS === "ios" ? width * 0.45 : width * 0.43;

//check if there is image and handle it
const image = (item, size) => {
  let itemSplit = item.path.split("/");
  if (itemSplit[itemSplit.length - 1] !== "image_not_available") {
    let img = item.path + size + item.extension;
    return <Image source={{ uri: img }} style={styles.imgStyle} />;
  }
  return <NoImage style={styles.iconStyle} name="user-secret" />;
};
const Characters = ({ items, navigation }) => {
  return (
    <SafeAreaView style={styles.viewStyle}>
      <FlatList
        data={items}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        bounces={true}
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
              <View style={{ justifyContent: "center" }}>
                {image(item.thumbnail, "/standard_large.")}
              </View>
              <View style={styles.nameBoxStyle}>
                <Text style={styles.nameStyle}>{item.name}</Text>
                <Text style={styles.profileStyle}>View Profile</Text>
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
    backgroundColor: "#222624",
    height,
  },
  iconStyle: {
    width: ITEM_SIZE,
    height: 150,
    left: "35%",
    fontSize: 55,
    color: "grey",
    alignSelf: "center",
  },
  imgStyle: {
    width: ITEM_SIZE,
    marginTop: 10,
    height: 180,
    borderRadius: 25,
    margin: 10,
    alignSelf: "center",
  },
  nameBoxStyle: {
    position: "absolute",
    width: ITEM_SIZE,
    bottom: 0,
    overflow: "hidden",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  profileStyle: {
    backgroundColor: "#e62429",
    color: "white",
    fontSize: 15,
    padding: 8,
    fontWeight: "600",
    textAlign: "center",
  },
  nameStyle: {
    color: "white",
    padding: 10,
    backgroundColor: "rgba(34,38,36,0.7)",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
  },
  touchableStyle: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    width: ITEM_SIZE,
    height: 180,
    margin: 10,
    borderRadius: 25,
    backgroundColor: "rgb(255,255,255)",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 10,
    // },
    // elevation:2,
    // shadowOpacity: 0.9,
    // shadowRadius: 5,
  },
});

export default Characters;
