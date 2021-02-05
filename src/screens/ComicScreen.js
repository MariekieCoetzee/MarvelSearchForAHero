//https://reactnavigation.org/docs/params/
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import Header from "../components/characterSearch/Header";
import { LinearGradient } from "expo-linear-gradient";
import NoImage from "react-native-vector-icons/Feather";
import useComicSearch from "../hooks/useComicSearch";
import ErrorComponent from "../components/common/ErrorMessage";
import { useEffect } from "react/cjs/react.development";

const { width, height } = Dimensions.get("screen");
//create card layout
const ITEM_SIZE = Platform.OS === "ios" ? width * 0.72 : width * 0.74;

const CharacterScreen = ({ route, navigation }) => {
  const { character, image } = navigation.state.params;

  const [searchComic, comicResult, errorMessage] = useComicSearch();

  useEffect(() => {
    searchComic(character.id, "comic");
  }, [comicResult]);
  //check if there is image and handle it
  const backDropImage = (item, size) => {
    let itemSplit = item.path.split("/");
    if (itemSplit[itemSplit.length - 1] !== "image_not_available") {
      let img = item.path + size + item.extension;
      return <Image source={{ uri: img }} style={styles.imgStyle} />;
    }
    return <NoImage style={styles.iconStyle} name="image" />;
  };
  //check if there is image and handle it
  const comicImage = (item, size) => {
    let itemSplit = item.path.split("/");
    if (itemSplit[itemSplit.length - 1] !== "image_not_available") {
      let img = item.path + "/" + size + "." + item.extension;
      return <Image source={{ uri: img }} style={styles.cardImageStyle} />;
    }
    return <NoImage style={styles.iconStyle} name="image" />;
  };

  return (
    <View>
      {backDropImage(character.thumbnail, "/portrait_xlarge.")}
      <Header character={character} image={image} navigation={navigation} />

      <Text style={styles.tabStyle}>Comics</Text>
      <LinearGradient
        colors={["transparent", "#FFFFFF"]}
        style={styles.linearStyle}
      />
      {/* my way of getting scroll to go all the way to the end... */}
      <View style={{ marginBottom: 300 }}>
        {errorMessage && <ErrorComponent error={errorMessage} />}
        <FlatList
          data={comicResult}
          bounces={false}
          keyExtractor={(item) => item.resourceURI}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  padding: 10,
                  margin: 10,
                  backgroundColor: "white",
                  borderRadius: 34,
                }}
              >
                {item.images[0]
                  ? comicImage(item.images[0], "standard_fantastic")
                  : null}
                <Text style={{ fontWeight: "900", textAlign: "center" }}>
                  {item.title}
                </Text>
                <Text>{item.description}</Text>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  cardImageStyle: {
    height: ITEM_SIZE * 0.9,
    width: ITEM_SIZE,
    // resizeMode: "cover",
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
  tabStyle: {
    width,
    marginTop: 2,
    fontSize: 25,
    color: "black",
    backgroundColor: "rgba(255,255,255,.8)",
    textAlign: "center",
  },
  imgStyle: {
    position: "absolute",
    width,
    height,
  },
  iconStyle: {
    position: "absolute",
    width,
    height,
    borderRadius: 25,
    fontSize: 55,
    alignSelf: "center",
    color: "grey",
  },
  linearStyle: {
    width,
    height,
    position: "absolute",
  },
});

export default CharacterScreen;
