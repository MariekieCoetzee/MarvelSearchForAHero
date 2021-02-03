import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
//import Feedback from "./common/Feedback";
import Icon from "react-native-vector-icons/Feather";
import useAPIResults from "../../hooks/useAPIResults";


const SearchBar = ({ term, onTermChange }) => {
  
const [
  searchMarvel,
  results,
  errorMessage,
] = useAPIResults();

console.log(results);
  return (
    <View>
      <View style={styles.backgroundStyle}>
        <Icon name="search" color="gray" style={styles.iconStyle} />
        <TextInput
          value={term}
          onChangeText={(newTerm) => {
            onTermChange(newTerm);
            searchMarvel(newTerm);
          }}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.inputStyle}
          placeholder="thor"
        />
      </View>
      {errorMessage &&  <Text>{errorMessage}</Text>} 
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#fff",
    height: 50,
    borderRadius: 5,
    flexDirection: "row",
    marginBottom: 1,
  },
  inputStyle: {
    flex: 1,
    fontSize: 16,
    color: "black",
  },
  iconStyle: {
    fontSize: 25,
    alignSelf: "center",
    marginHorizontal: 15,
  },
  errorStyle:{
    fontSize:25,
    alignSelf:"center"
  }
});

export default SearchBar;
