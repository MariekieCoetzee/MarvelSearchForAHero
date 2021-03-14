import React from "react";
import { FlatList } from "react-native";
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Shine,
} from "rn-placeholder";

const PlaceholderCharacters = ({ size }) => {
  const dummyData = new Array(10).fill({ dummy: "" });
  return (
    <FlatList
      data={dummyData}
      keyExtractor={(item, index) => index}
      numColumns={2}
      renderItem={({ item, index }) => {
        return (
          <Placeholder
            style={{
              width: size,
              borderRadius: 4,
              backgroundColor: "lightgray",
              padding: 10,
              margin: 10,
            }}
          >
            <Placeholder
              key={index}
              Animation={Shine}
              Right={(props) => (
                <PlaceholderMedia
                  style={[
                    props.style,
                    {
                      marginRight: "31%",
                      borderRadius: 30,
                      width: 55,
                      height: 56,
                      marginBottom: 10,
                    },
                  ]}
                />
              )}
            ></Placeholder>
            <PlaceholderLine
              style={{ marginTop: 1, alignSelf: "center" }}
              width={70}
            />
            <PlaceholderLine
              style={{ marginTop: 1.5, alignSelf: "center" }}
              width={50}
            />
          </Placeholder>
        );
      }}
    ></FlatList>
  );
};
export default PlaceholderCharacters;
