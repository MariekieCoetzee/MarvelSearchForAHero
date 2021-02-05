import React, { useState } from "react";
import marvelApi from "../api/marvelApi";

export default () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [charResults, setCharResults] = useState([]);

  const searchCharacter = async (searchChar, searchType) => {

    setErrorMessage(null);
    try {
      const items = await marvelApi(searchChar, searchType);

      if (items.error) {
        setErrorMessage("Watch out, Search base is under attack!! Try again hopefully Avengers saved the day!");
        setCharResults([]);
        return [searchCharacter, charResults, errorMessage];
      } else 
          if(items.code === 200 && items.data){
            if(items.data.results.length == 0){
              setErrorMessage("O no!  Galactus must've ate your search!  Try again, maybe you are lucky...");
              setCharResults([]);
              return [searchCharacter, charResults, errorMessage]
            }else {
              setErrorMessage(null);
              setCharResults(items.data.results)
          return [searchCharacter, charResults, errorMessage]}
      }else {
        setErrorMessage("O dear.. Hulk got angry and destroyed your search. " + items.message);
        setCharResults([]);
      }
    } catch (err) {
      console.log("major error useSearchResults" + err);
      setErrorMessage("Distruction!  Thanos is trying to destroy your search!  Captain Marvel is risking everything to defend.");
      setCharResults([]);
    }
  };
  return [searchCharacter, charResults, errorMessage];
};
