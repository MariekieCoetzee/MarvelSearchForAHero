import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  RefreshControl,
  StyleSheet,
} from "react-native";
import SearchBar from "../components/search/SearchBar";


const SearchScreen = () => {
  const [term, setTerm] = useState("thor");

  //get values from API


  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        // error={errorMessage}
        // onTermSubmit={() => {
        //   searchApi(term, searchLocation);
        // }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
