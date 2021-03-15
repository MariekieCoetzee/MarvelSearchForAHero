import React from "react";
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Shine,
} from "rn-placeholder";

const PlaceholderComics = () => {
  return (
    <Placeholder
      style={{
        width: 300,
        height: 350,
        borderRadius: 10,
        backgroundColor: "lightgray",
        padding: 10,
        marginTop: 20,
        alignSelf: "center",
      }}
    >
      <Placeholder
        Animation={Shine}
        Right={(props) => (
          <PlaceholderMedia
            style={[
              props.style,
              {
                marginRight: "21%",
                borderRadius: 30,
                width: 250,
                height: 230,
                margin: 10,
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
};
export default PlaceholderComics;
