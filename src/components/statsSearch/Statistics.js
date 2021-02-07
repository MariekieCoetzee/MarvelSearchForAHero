import React from "react";
import {
  View,
  StyleSheet,
} from "react-native";
import Chart from "./Chart";

const StatsSelectedList = ({ items, searchAPI }) => {
  return (
   <View>
      {items && items.length > 0 && <Chart items={items} searchAPI={searchAPI} />}
   </View>
  );
};

const styles = StyleSheet.create({
});

export default StatsSelectedList;
