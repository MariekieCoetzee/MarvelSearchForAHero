import React from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import StatsSelectedList from "./StatsSelectedList";
import useSearchResults from "../../hooks/useSearchResults";

const StatsSearchResults = ({ searchResults }) => {
  const [searchMarvel, results, errorMessage] = useSearchResults();

  return (
    <View>
      <SafeAreaView style={styles.backgroundStyle}>
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                key={item.id.toString()}
                onPress={() => {
                  //check existing selections
                  const existing = results.find((i) => i.name === item.name);
                  existing == null ? searchMarvel(item.name, "stats") : null;
                }}
              >
                <Text style={{ margin: 10 }}>{item.name}</Text>
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
      <StatsSelectedList items={results} />
    </View>
  );
};
const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#fff",
    height: 50,
    borderRadius: 5,
    flexDirection: "row",
    marginBottom: 1,
  },
});

export default StatsSearchResults;
