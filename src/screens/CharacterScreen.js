//https://reactnavigation.org/docs/params/
import React from "react";
import {View, Text, StyleSheet} from "react-native";

const CharacterScreen =({route, navigation})=> {

const {character} =navigation.state.params;
    return (
        <View><Text>{character.name}</Text></View>
    )

}
const styles=StyleSheet.create({

});

export default CharacterScreen;