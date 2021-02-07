import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import { LineChart } from "react-native-chart-kit";
import chartHelper from "../helpers/chartHelper";
import Legend from "./Legend";

const { width, height } = Dimensions.get("screen");
const Chart = ({ items, searchAPI }) => {
  return (
    <View>
      <LineChart
        data={{
          labels: ["Comics", "Stories", "Series", "Events"],
          datasets: chartHelper.dataSet(items),
          legend: chartHelper.legendSet(items),
        }}
        width={width} // from react-native
        height={height * 0.5}
        fromZero={true}
        chartConfig={{
          backgroundColor: "#42f44b",
          backgroundGradientFrom: "#E62429",
          backgroundGradientTo: "#E68024",
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        bezier
        style={{
          margin: 5,
          borderRadius: 16,
        }}
      />
      <Legend items={items} searchAPI={searchAPI} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default Chart;
