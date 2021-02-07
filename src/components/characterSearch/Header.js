import React from "react";
import { View, Text, Dimensions, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import NoImage from "react-native-vector-icons/FontAwesome5";
import MIcon from "react-native-vector-icons/MaterialIcons";

const { width, height } = Dimensions.get("screen");
const ITEM_SIZE = Platform.OS === "ios" ? width * 0.35 : width * 0.35;

const image = (item, size) => {
  let itemSplit = item.path.split("/");
  if (itemSplit[itemSplit.length - 1] !== "image_not_available") {
    let img = item.path + size + item.extension;
    return <Image source={{ uri: img }} style={styles.imgStyle} />;
  }
  return <NoImage style={styles.iconStyle} name="user-secret" />;
};

const Header = ({ character, navigation }) => {
  return (
    <View style={{ backgroundColor: "rgba(34,38,36,0.7)", padding: 10 }}>
      <View style={styles.headerStyle}>
        {image(character.thumbnail, "/standard_large.")}
        <View style={styles.nameBoxStyle}>
          <Text style={styles.nameStyle}>{character.name}</Text>
          <Text
            style={{
              color: "white",
              fontWeight:"500",
              marginTop: 10,
            }}
          >
            Appeared in
          </Text>
          <View style={styles.appearedInStyle}>
            <View style={styles.iconGroupStyle}>
              <Icon
                name="file-movie-o"
                color="black"
                style={[styles.statIconStyle, { backgroundColor: "#008000" }]}
              />
              <Text style={styles.statsTextStyle}>
                {character.stories.available} stories
              </Text>
            </View>
            <View style={styles.iconGroupStyle}>
              <MIcon
                name="emoji-events"
                color="black"
                style={[styles.statIconStyle, { backgroundColor: "white" }]}
              />
              <Text style={styles.statsTextStyle}>
                {character.events.available} events
              </Text>
            </View>
            <View style={styles.iconGroupStyle}>
              <MIcon
                name="local-movies"
                color="white"
                style={[styles.statIconStyle, { backgroundColor: "red" }]}
              />
              <Text style={styles.statsTextStyle}>
                {character.series.available} series
              </Text>
            </View>
          </View>
          <View style={{ marginTop: 5 }}>
            <View style={[styles.iconGroupStyle, { flexDirection: "row", justifyContent:"flex-start" }]}>
              <Icon
                name="book"
                color="black"
                style={[styles.statIconStyle, { backgroundColor: "yellow", width:50 }]}
              />
              <Text style={styles.statsTextStyle}>
                Featured in {character.comics.available} comics
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Text style={styles.descriptionStyle}>{character.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  appearedInStyle: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
  },
  headerStyle: {
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  statsTextStyle: {
    color: "white",
    marginTop: 8,
    fontSize: 12,
  },
  statIconStyle: {
    fontSize: 15,
    textAlign: "center",
    marginRight: 5,
    padding: 6,
    overflow: "hidden",
    borderRadius: 14,
  },
  iconGroupStyle: {
    marginTop: 10,
  },
  iconStyle: {
    width: ITEM_SIZE,
    height: 150,
    marginTop:15,
    borderRadius:10,
    overflow:"hidden",
    paddingTop:"10%",
    fontSize: 55,
    padding: 15,
    color: "grey",
    textAlign:"center",
    backgroundColor: "white",
  },
  imgStyle: {
    width: ITEM_SIZE,
    marginTop: 10,
    height: 150,
    borderRadius: 25,
    alignSelf: "center",
  },
  nameBoxStyle: {
    flex: 2,
    padding: 10,
    //width: ITEM_SIZE,
  },
  nameStyle: {
    fontSize: 23,
    color: "white",
    fontWeight: "600",
  },
  descriptionStyle: {
    paddingTop: 5,
    fontSize: 10,
    color: "white",
  },
});

export default Header;
