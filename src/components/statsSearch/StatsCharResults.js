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
               console.log("add "+ item);
              }}
            >
              <View style={styles.nameBoxStyle}>
                <Text style={styles.nameStyle}>{item.name}</Text>
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
    backgroundColor: "rgba(255,255,255,0.9)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 5,
  },
});

export default Characters;
