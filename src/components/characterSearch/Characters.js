import React from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Platform,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import PlaceholderCharacters from "./PlaceholderCharacters";
import imageHelper from "../helpers/imageHelper";

const { width, height } = Dimensions.get("screen");
const ITEM_SIZE = Platform.OS === "ios" ? width * 0.45 : width * 0.43;

const Characters = ({ items, navigation }) => {
  return (
    <View style={styles.viewStyle}>
      {typeof items == "undefined" || items.length == 0 ? (
        <PlaceholderCharacters size={ITEM_SIZE} />
      ) : (
        <FlatList
          data={items}
          contentContainerStyle={{ paddingBottom: 100 }}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          bounces={true}
          renderItem={({ item }) => {
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
                  {imageHelper(
                    item.thumbnail,
                    "/standard_large.",
                    "characters",
                    ITEM_SIZE
                  )}
                </View>
                <View style={styles.nameBoxStyle}>
                  <Text style={styles.nameStyle}>{item.name}</Text>
                  <Text style={styles.profileStyle}>View Profile</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    flexGrow: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
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
    color: "black",
    padding: 10,
    backgroundColor: "rgba(255,255,255,0.7)",
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
    flex: 1,
    margin: 10,
    borderRadius: 25,
    backgroundColor: "rgb(255,255,255)",
  },
});

export default Characters;
