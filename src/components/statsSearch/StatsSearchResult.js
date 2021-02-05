//https://reactjs.org/docs/hooks-effect.html -'Tip: Optimizing Performance by Skipping Effects section
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Statistics from "./Statistics";
import useStatsSearch from "../../hooks/useStatsSearch";
import { useEffect } from "react";
import ErrorComponent from "../common/ErrorMessage";
const StatsSearchResults = ({ searchResults }) => {
  const [showHideFlat, setShowHideFlat] = useState("flex");
  const [searchStats, statsResult, errorMessage] = useStatsSearch();

  useEffect(() => {
    //show list when results change
    setShowHideFlat("flex");
  }, [searchResults]);
  return (
    <View>
      {errorMessage && <ErrorComponent error={errorMessage}/>}
      <SafeAreaView style={styles.backgroundStyle}>
        <FlatList
          style={{ display: showHideFlat }}
          data={searchResults}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                key={item.id.toString()}
                onPress={() => {
                  //check existing selections
                  const existing = statsResult.find(
                    (i) => i.name === item.name
                  );
                  existing == null ? searchStats(item.name, "stats") : null;
                  setShowHideFlat("none");
                }}
              >
                <View style={styles.viewResultStyle}>
                  <Text style={styles.charResultStyle}>{item.name}</Text>
                  <Text style={styles.charTipStyle}>Tap to select</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
      <Statistics items={statsResult} />
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#fff",
    borderRadius: 5,
    flexDirection: "row",
    marginBottom: 1,
  },
  viewResultStyle: {
    margin: 15,
    flexDirection: "row",
  },
  charResultStyle: {
    fontSize: 20,
  },
  charTipStyle: {
    padding: 5,
    color: "blue",
    fontStyle: "italic",
  },
});

export default StatsSearchResults;
