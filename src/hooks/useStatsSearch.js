import React, { useState } from "react";
import marvelApi from "../api/marvelApi";

export default () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [statsResult, setStatsResult] = useState([]);

  const searchStats = async (searchChar, searchType) => {

    if(searchType ==="remove"){
      console.log(statsResult);
      // var newList = [...statsResult].filter(x => x.id !== searchChar);
      // setStatsResult(newList);
    }
    setErrorMessage(null);
    try {
      const items = await marvelApi(searchChar, searchType);

      if (items.error) {
        setErrorMessage("Blue elves are attacking your search!  Thor to the resque... please try again");
        statsResult([]);
        return [searchStats, statsResult, errorMessage];
      } else 
          if(items.code === 200 && items.data){
            if(items.data.results.length == 0){
              setErrorMessage("O no!  Galactus must've ate your search!  Try again, maybe you are lucky...");
              statsResult([]);
              return [searchStats, statsResult, errorMessage]
            }else {
              setErrorMessage(null);
              setStatsResult([...statsResult, items.data.results[0]]);
                return [searchStats, statsResult, errorMessage]
              } 
          
      }else if (items.code === 409){
        setErrorMessage("O dear.. Hulk got angry and destroyed your search. Please try again");
        setStatsResult([]);
      }
    } catch (err) {
      console.log("major error useSearchResults" + err);
      setErrorMessage("Distruction!  Thanos must have snapped his fingers!  Try searcing again");
      setStatsResult([]);
    }
  };
  return [searchStats, statsResult, errorMessage];
};
