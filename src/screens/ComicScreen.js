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
import useAPISearch from "../hooks/useAPISearch";
import ErrorComponent from "../components/common/ErrorMessage";
import { useEffect } from "react/cjs/react.development";
import BackDrop from "../components/comics/BackDrop";

const { width, height } = Dimensions.get("screen");
//create card layout
const ITEM_SIZE = Platform.OS === "ios" ? width * 0.72 : width * 0.74;
const CharacterScreen = ({ route, navigation }) => {
  const { character, image } = navigation.state.params;

  const [searchAPI, searchResults, errorMessage] = useAPISearch();

  //check if there is image and handle it
  const comicImage = (item, size) => {
    let itemSplit = item.path.split("/");
    if (itemSplit[itemSplit.length - 1] !== "image_not_available") {
      let img = item.path + "/" + size + "." + item.extension;
      return <Image source={{ uri: img }} style={styles.cardImageStyle} />;
    }
    return <NoImage style={styles.iconStyle} name="image" />;
  };
  useEffect(() => {
    searchAPI(character.id, "comic");
  }, []);

  return (
    <View>
      <BackDrop image={character.thumbnail} />
      <Header character={character} navigation={navigation} />

      <Text style={styles.tabStyle}>Comics</Text>
      <LinearGradient
        colors={["transparent", "#FFFFFF"]}
        style={styles.linearStyle}
      />
      {/* my way of getting scroll to go all the way to the end... */}
      <View
        style={{
          marginBottom: 300,
          marginLeft: 20,
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        {errorMessage && <ErrorComponent error={errorMessage} />}
        <FlatList
          data={searchResults}
          horizontal
          keyExtractor={(item) => item.resourceURI}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  width: ITEM_SIZE,
                  margin: 10,
                  // backgroundColor: "white",
                  // borderRadius: 34,
                }}
              >
                {item.images[0]
                  ? comicImage(item.images[0], "standard_fantastic")
                  : null}
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
          }}
        />
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
  tabStyle: {
    width,
    //marginTop: 2,
    fontSize: 25,
    color: "black",
    backgroundColor: "rgba(255,255,255,.8)",
    textAlign: "center",
  },
  linearStyle: {
    width,
    height,
    position: "absolute",
  },
});

export default CharacterScreen;
