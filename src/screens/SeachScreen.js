import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  RefreshControl,
  StyleSheet,
} from "react-native";
import SearchBar from "../components/search/SearchBar";
import Characters from "../components/search/Characters";
import useAPIResults from "../hooks/useAPIResults";

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState("");
console.log(navigation);
  //get values from API
  const [searchMarvel, results, errorMessage] = useAPIResults();

  // Avoid Blank screen on start
  useEffect(() => {
    searchMarvel("A");
  }, []);
  
  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={(value) => {
          console.log(value);
          setTerm(value);
          searchMarvel(term);
        }}
      />
      {errorMessage && <Text>{errorMessage}</Text>}
      <Characters items={results} navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
