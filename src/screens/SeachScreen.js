import React, { useState, useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  RefreshControl,
  StyleSheet,
} from "react-native";
import SearchBar from "../components/common/SearchBar";
import Characters from "../components/characterSearch/Characters";
import useSearchResults from "../hooks/useSearchResults";

const SearchScreen = ({navigation}) => {
  const [term, setTerm] = useState("");
  //get values from API
  const [searchMarvel, results, errorMessage] = useSearchResults();

  // Avoid Blank screen on start
  useEffect(() => {
    searchMarvel("A", "character");
  }, []);
  
  return (
    <View>
      <SearchBar
        term={term}
        placeHolder="Search for your favourite character!"
        onTermChange={(value) => {
          setTerm(value);
          searchMarvel(term,"character");
        }}
      />
      {errorMessage && <Text>{errorMessage}</Text>}
      <Characters items={results} navigation={navigation}/>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
