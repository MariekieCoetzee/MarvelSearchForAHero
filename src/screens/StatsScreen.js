import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import StatsSearchResult from "../components/statsSearch/StatsSearchResult";
import useStatsSearch from "../hooks/useAPISearch";
import SearchBar from "../components/common/SearchBar";
import ErrorComponent from "../components/common/ErrorMessage";

const StatsScreen = ({ navigation }) => {
  const [searchChar, setSearchChar] = useState("");
  //get values from API
  const [searchAPI, searchResults, errorMessage] = useStatsSearch();

  return (
    <View>
      <SearchBar
        term={searchChar}
        placeHolder="Search character & select to view stats."
        onTermChange={(value) => {
          setSearchChar(value);
          searchAPI(searchChar, "character");
        }}
      />
      {errorMessage && <ErrorComponent error={errorMessage}/>}
      <StatsSearchResult results={searchResults}/>
    </View>
  );
};
const styles = StyleSheet.create({
});

export default StatsScreen;
