import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const Legend = ({ items, searchAPI }) => {
  return (
    <View style={styles.viewStyle}>
      {items.map((i, index) => {
        return (
          <View style={styles.headerBoxStyle} key={index}>
            <TouchableOpacity
              style={styles.deleteTouchStyle}
              onPress={() => {
                searchAPI(i.id, "remove");
              }}
            >
              <Text key={index} style={styles.textStyle}>
                {i.name} X
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  deleteTouchStyle: {
    //paddingTop: 6,
    marginLeft: 5,
  },
  itemStyles: {
    borderColor: "grey",
  },
  headerBoxStyle: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#e62429",
    margin: 10,
  },
  headerStyle: {
    fontSize: 15,
    fontWeight: "600",
    color: "white",
  },
  viewStyle: {
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    flexDirection: "row",
    //  marginTop: 10,
  },
  textStyle: {
    fontSize: 15,
    fontWeight: "600",
    color: "white",
  },
});

export default Legend;
