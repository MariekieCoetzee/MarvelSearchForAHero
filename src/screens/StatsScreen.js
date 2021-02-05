import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import StatsSearchResult from "../components/statsSearch/StatsSearchResult";
import useCharSearch from "../hooks/useCharSearch";
import SearchBar from "../components/common/SearchBar";
import ErrorComponent from "../components/common/ErrorMessage";

const StatsScreen = ({ navigation }) => {
  const [searchChar, setSearchChar] = useState("");
  //get values from API
  const [searchMarvel, results, errorMessage] = useCharSearch();

  return (
    <View>
      <SearchBar
        term={searchChar}
        placeHolder="Search character & select to view stats."
        onTermChange={(value) => {
          setSearchChar(value);
          searchMarvel(searchChar, "character");
        }}
      />
      {errorMessage && <ErrorComponent error={errorMessage}/>}
      <StatsSearchResult searchResults={results} />
    </View>
  );
};
const styles = StyleSheet.create({
});

export default StatsScreen;
