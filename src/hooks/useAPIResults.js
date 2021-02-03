import React, { useState } from "react";
import marvelApi from "../api/marvelApi";

export default () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [results, setResults] = useState([]);

  const searchMarvel = async (searchChar) => {
console.log(searchChar);
    setErrorMessage(null);
    try {
      const items = await marvelApi(searchChar);

      if (items.error) {
        setErrorMessage(error);
        setResults([]);
        return [searchMarvel, results, errorMessage];
      } else 
          if(items.code === 200 && items.data){
          setResults(items.data.results);
          return [searchMarvel, results, errorMessage]
      }else if (items.code === 409){
          console.log(items.code)
        setErrorMessage(items.status);
        setResults([]);
      }
    } catch (err) {
      console.log("major error useAPIResults" + err);
      setErrorMessage("Something went wrong, please search again ...");
      setResults([]);
    }
  };
  return [searchMarvel, results, errorMessage];
};
