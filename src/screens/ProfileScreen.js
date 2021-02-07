//https://reactnavigation.org/docs/params/
import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
} from "react-native";
import Header from "../components/characterSearch/Header";
 import { LinearGradient } from "expo-linear-gradient";
import useAPISearch from "../hooks/useAPISearch";
import ErrorComponent from "../components/common/ErrorMessage";
import BackDrop from "../components/profile/BackDrop";
import Comics from "../components/profile/Comics";

const { width, height } = Dimensions.get("screen");

const ProfileScreen = ({ route, navigation }) => {
  const { character } = navigation.state.params;

  const [searchAPI, searchResults, errorMessage] = useAPISearch();

  useEffect(() => {
    searchAPI(character.id, "comic");
  }, [character]);

  return (
    <View style={{backgroundColor:"#222624", height}}>
      <BackDrop image={character.thumbnail} />
      <Header character={character} navigation={navigation} />

      <LinearGradient
        colors={["transparent", "#FFFFFF"]}
        style={styles.linearStyle}
      />
      <Text style={styles.tabStyle}>Comics</Text>
      <View
        style={{
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
            return <Comics item={item} />;
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({

  tabStyle: {
    width,
    //marginTop: 2,
    fontSize: 25,
    fontWeight: "600",
    color: "white",
    backgroundColor: "#e62429",
    textAlign: "center",
  },
  linearStyle: {
    width,
    height,
    position: "absolute",
  },
});

export default ProfileScreen;
