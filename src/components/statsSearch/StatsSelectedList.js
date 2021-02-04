//https://www.npmjs.com/package/react-native-chart-kit - copied  chart info from here
import React from "react";
import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const StatsSelectedList = ({ items }) => {
  console.log(items.length);
  return (
    <View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) => {
          return (
            <View>
              <Text>{item.name}</Text>
              <LineChart
                data={{
                  labels: ["Comics", "Events", "Stories", "Series"],
                  datasets: [
                    {
                      data: [
                        item.comics.available,
                        item.events.available,
                        item.stories.available,
                        item.series.available,
                      ],
                    },
                  ],
                }}
                width={Dimensions.get("window").width} // from react-native
                height={220}
                chartConfig={{
                  backgroundColor: "#e26a00",
                  backgroundGradientFrom: "#fb8c00",
                  backgroundGradientTo: "#ffa726",
                  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                  labelColor: (opacity = 1) =>
                    `rgba(255, 255, 255, ${opacity})`,
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
                  marginVertical: 8,
                  borderRadius: 16,
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemStyles: {
    borderColor: "grey",
  },
});

export default StatsSelectedList;
