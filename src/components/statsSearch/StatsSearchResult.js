//https://reactjs.org/docs/hooks-effect.html -'Tip: Optimizing Performance by Skipping Effects section
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Statistics from "./Statistics";
import useAPISearch from "../../hooks/useAPISearch";
import { useEffect } from "react";
import ErrorComponent from "../common/ErrorMessage";

const { width, height } = Dimensions.get("screen");
const StatsSearchResults = ({ results }) => {
  const [showHideFlat, setShowHideFlat] = useState("none");
  const [searchAPI, searchResults, errorMessage] = useAPISearch();

  useEffect(() => {
    //show list when results change
 
    results.length == 0 ? setShowHideFlat("none") : setShowHideFlat("flex");
  }, [results]);

  return (
    <View style={styles.containerStyle}>
      {errorMessage && <ErrorComponent error={errorMessage} />}
      <SafeAreaView style={styles.backgroundStyle}>
        <FlatList
          style={[styles.flatlistStyle],{display: showHideFlat}}
          data={results}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                key={item.id.toString()}
                onPress={() => {
                  //check existing selections
                  const existing = searchResults.find(
                    (i) => i.name === item.name
                  );
                  existing == null ? searchAPI(item.name, "stats") : null;
                  setShowHideFlat("none");
                }}
              >
                <View style={[styles.viewResultStyle]}>
                  <Text style={styles.charResultStyle}>{item.name}</Text>
                  <Text style={styles.charTipStyle}>Tap to view chart</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
      {showHideFlat == "none" ? (
        <Statistics items={searchResults} searchAPI={searchAPI} />
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  flatlistStyle:{
    
    height: height * 0.4,
    position: "relative",
  },
  containerStyle: {
    backgroundColor: "#222624",
    height,
  },
  backgroundStyle: {
    backgroundColor: "#fff",
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
    flexDirection: "row",
    marginLeft: 50,
    marginRight: 50,
  },
  viewResultStyle: {
    margin: 10,
    borderBottomWidth: 0.5,
    borderColor: "#e62429",
  },
  charResultStyle: {
    fontSize: 15,
  },
  charTipStyle: {
    padding: 2,
    color: "blue",
    fontStyle: "italic",
  },
});

export default StatsSearchResults;
