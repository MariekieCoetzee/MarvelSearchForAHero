//https://reactnavigation.org/docs/params/
import React from "react";
import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import Header from "../components/characterSearch/Header";

const CharacterScreen = ({ route, navigation }) => {
  const { character, image } = navigation.state.params;
  const comics = character.comics.items;  
  return (
    <View>
      <Header character={character} image={image} navigation={navigation} />
      <Image />
      <Text style={styles.tabStyle}>Comics</Text>
       <FlatList
        data={comics}
        keyExtractor={(item) => item.resourceURI}
        renderItem={({ item, index}) => {
          return (
            <View>
              <Text>{item.name}</Text>
            </View>
          );
        }}
      /> 
    </View>
  );
};
const styles = StyleSheet.create({
  tabStyle: {
    fontSize: 25,
    margin: 15,
    textAlign: "center",
  },
});

export default CharacterScreen;
