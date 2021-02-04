import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import StatsSearchResults from "../components/statsSearch/StatsSearchResults";
import useSearchResults from "../hooks/useSearchResults";
import SearchBar from "../components/common/SearchBar";

const StatsScreen = ({ navigation }) => {
  const [searchChar, setSearchChar] = useState("");
  const [selections, setSelections] = useState([]);
  //get values from API
  const [searchMarvel, results, errorMessage] = useSearchResults();

  return (
    <View>
      <SearchBar
        term={searchChar}
        placeHolder="Search and select characters to view stats"
        onTermChange={(value) => {
          setSearchChar(value);
          searchMarvel(searchChar, "character");
        }}
      />
      {errorMessage && <Text>{errorMessage}</Text>}
      <StatsSearchResults
        searchResults={results}
      />
    </View>
  );
};
const styles = StyleSheet.create({});

export default StatsScreen;
