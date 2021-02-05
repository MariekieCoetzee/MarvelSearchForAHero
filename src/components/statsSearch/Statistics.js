//https://www.npmjs.com/package/react-native-chart-kit - copied  chart info from here
//https://stackoverflow.com/questions/43255548/reactnative-scrollview-will-not-scroll-to-the-bottom
import React from "react";
import {
  ScrollView,
  View,
  Text,
  FlatList,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { LineChart } from "react-native-chart-kit";

const StatsSelectedList = ({ items }) => {
return (
  <View style={{marginBottom: 100}}>
    <FlatList
      data={items}
      scrollEnabled={true}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item, index }) => {
        return (
          <ScrollView style={{flex:1, backgroundColor:"white"}}>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "600",
                }}
              >
                {item.name}
              </Text>
              <TouchableOpacity style={{ paddingTop: 6, marginLeft: 20 }}
              onPress={()=>{
                items.filter(x => x.id !== items.id);
              }}
              >
                <Icon name="trash-2" color="red" style={{ fontSize: 20 }} />
              </TouchableOpacity>
            </View>
            <LineChart style={{flex:1}}
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
                margin: 10,
                marginVertical: 8,
                borderRadius: 16,
              }}
            />
          </ScrollView>
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
