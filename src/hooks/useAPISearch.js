import { useState } from "react";
import marvelApi from "../api/marvelApi";

export default () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const searchAPI = async (searchChar, searchType) => {
    setErrorMessage(null);
    //removing selection from stats list
    if (searchType === "remove") {
      setSearchResults(searchResults.filter((x) => x.id !== searchChar));
      return;
    }

    try {
      const items = await marvelApi(searchChar, searchType);
      if (items.error) {
        setErrorMessage({
          message:
            "Blue elves are attacking your search!  Thor to the resque... please try again ",
          info: items.error,
          icon: "bahai",
        });
        setSearchResults([]);
        return [searchAPI, searchResults, errorMessage];
      } else if (items.code === 200 && items.data) {
        if (items.data.results.length == 0) {
          setErrorMessage({
            message:
              "Oh no!  Galactus must've ate your search!  Try again, maybe you are lucky...",
            info: "Nothing was found",
            icon: "book-dead",
          });
          setSearchResults([]);
          return [searchAPI, searchResults, errorMessage];
        } else {
          setErrorMessage(null);
          if (searchType === "stats") {
            setSearchResults([...searchResults, items.data.results[0]]);
            return [searchAPI, searchResults, errorMessage];
          } else {
            setSearchResults(items.data.results);
            return [searchAPI, searchResults, errorMessage];
          }
        }
      } else {
        setErrorMessage({
          message:
            "Oh dear.. Hulk got angry and destroyed your search. Please try again",
          info: "",
          icon: "angry",
        });
        setSearchResults([]);
      }
    } catch (err) {
      console.log("major error useSearchResults" + err);
      setErrorMessage({
        message:
          "Distruction!  Thanos must have snapped his fingers!  Try searcing again",
        info: err,
        icon: "biohazard",
      });
      setSearchResults([]);
      return [searchAPI, searchResults, errorMessage];
    }
  };
  return [searchAPI, searchResults, errorMessage];
};
