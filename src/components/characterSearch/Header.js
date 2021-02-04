import React from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const { width, height } = Dimensions.get("screen");
const ITEM_SIZE = Platform.OS === "ios" ? width * 0.72 : width * 0.74;

const Header = ({ character, image, navigation }) => {
  return (
    <View style={styles.headerStyle}>
      {image(character.thumbnail)}
      <View style={styles.nameBoxStyle}>
        <Text style={styles.nameStyle}>{character.name}</Text>
        <Text style={styles.descriptionStyle}>{character.description}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("stats")}>
          <Text>View Stats</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: "row",
    alignContent: "center",
    backgroundColor: "rgba(255,255,255,0.9)",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 5,
    padding: 10,
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
});

export default Header;
