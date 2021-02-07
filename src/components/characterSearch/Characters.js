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
import imageHelper from "../helpers/imageHelper";
const { width, height } = Dimensions.get("screen");
const ITEM_SIZE = Platform.OS === "ios" ? width * 0.45 : width * 0.43;

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
                navigation.navigate("profile", {
                  character: item,
                });
              }}
            >
              <View style={{ justifyContent: "center" }}>
                {imageHelper(item.thumbnail, "/standard_large.", "characters", ITEM_SIZE)}
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
  },
});

export default Characters;
