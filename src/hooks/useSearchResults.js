import React, { useState } from "react";
import marvelApi from "../api/marvelApi";

export default () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [results, setResults] = useState([]);

  const searchMarvel = async (searchChar, searchType) => {

    setErrorMessage(null);
    try {
      const items = await marvelApi(searchChar, searchType);

      if (items.error) {
        setErrorMessage(error);
        setResults([]);
        return [searchMarvel, results, errorMessage];
      } else 
          if(items.code === 200 && items.data){
            if(items.data.results.length == 0){
              setErrorMessage("o no!  Thanos must have snapped because nothing was found!");
              setResults([]);
              return [searchMarvel, results, errorMessage]
            }else {
              setErrorMessage(null);
              if(searchType==="stats"){
                // stats we are adding to the existing collection
                setResults([...results, items.data.results[0]]);
              } else {
                //main screen search always returns new set of data.
            setResults(items.data.results)}
          return [searchMarvel, results, errorMessage]}
      }else if (items.code === 409){
        //ToDo Andre help!!
        setErrorMessage(items.status);
        setResults([]);
      }
    } catch (err) {
      console.log("major error useSearchResults" + err);
      setErrorMessage("o dear.. Hulk got angry and destroyed your search. Please try again");
      setResults([]);
    }
  };
  return [searchMarvel, results, errorMessage];
};
