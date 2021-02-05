import React, { useState } from "react";
import marvelApi from "../api/marvelApi";

export default () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [comicResult, setComicResult] = useState([]);

  const searchComic = async (searchComic, searchType) => {

    setErrorMessage(null);
    try {
      const items = await marvelApi(searchComic, searchType);

      if (items.error) {
        setErrorMessage("Blue elves are attacking your search!  Thor to the resque... please try again");
        setComicResult([]);
        return [searchComic, comicResult, errorMessage];
      } else 
          if(items.code === 200 && items.data){
            if(items.data.results.length == 0){
              setErrorMessage("O no!  Galactus must've ate your search!  Try again, maybe you are lucky...");
              setComicResult([]);
              return [searchComic, comicResult, errorMessage]
            }else {
              setErrorMessage(null);
              setComicResult(items.data.results);
                return [searchComic, comicResult, errorMessage]
              } 
          
      }else if (items.code === 409){
        setErrorMessage("O dear.. Hulk got angry and destroyed your search. Please try again");
        setComicResult([]);
      }
    } catch (err) {
      console.log("major error useSearchResults" + err);
      setErrorMessage("Distruction!  Thanos must have snapped his fingers!  Try searcing again");
      setComicResult([]);
    }
  };
  return [searchComic, comicResult, errorMessage];
};
