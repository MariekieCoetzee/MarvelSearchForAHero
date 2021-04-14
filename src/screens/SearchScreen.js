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
import useStatsSearch from "../hooks/useAPISearch";
import ErrorComponent from "../components/common/ErrorMessage";

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  //get values from API
  const [searchAPI, searchResults, errorMessage] = useStatsSearch();

  // Avoid Blank screen on start
  useEffect(() => {
    searchAPI(term, "character");
  }, [term]);

  return (
    <View>
      <SearchBar
        term={term}
        placeHolder="Search for your favourite character!"
        onTermChange={(value) => {
          setTerm(value);
          searchAPI(term, "character");
        }}
      />
      {errorMessage && <ErrorComponent error={errorMessage} />}
      <Characters items={searchResults} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
