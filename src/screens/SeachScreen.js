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
import useCharSearch from "../hooks/useCharSearch";
import ErrorComponent from "../components/common/ErrorMessage";

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  //get values from API
  const [searchCharacter, charResults, errorMessage] = useCharSearch();

  // Avoid Blank screen on start
  useEffect(() => {
    searchCharacter("A", "character");
  }, [term]);

  return (
    <View>
      <SearchBar
        term={term}
        placeHolder="Search for your favourite character!"
        onTermChange={(value) => {
          setTerm(value);
          searchCharacter(term, "character");
        }}
      />
      {errorMessage && <ErrorComponent error={errorMessage}/>}
      <Characters items={charResults} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
});

export default SearchScreen;
