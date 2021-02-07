//https://api.jquery.com/map/  - create comma separated list for characterlist
import { MD5 } from "react-native-crypto-js";
//import { privateKey, publicKey } from "@env";


const privateKey ="<set the Private key here>"
const publicKey = "<set the Public key here>"
const generateHash = (timestamp, privateKey, publicKey) =>
  MD5(`${timestamp}${privateKey}${publicKey}`);

const marvelApi = async (term, searchType) => {
  const timestamp = +new Date();
  const hash = generateHash(timestamp, privateKey, publicKey);
  let param = "";
  let url = "";
  if (searchType === "comic") {
    param = `/${term}/comics?apikey=${publicKey}&ts=${timestamp}&hash=${hash}&limit=25`;
  } else if (searchType === "character") {
    if (term !== "") {
      param = `?apikey=${publicKey}&ts=${timestamp}&hash=${hash}&nameStartsWith=${term}&limit=25`;
    } else {
      param = `?apikey=${publicKey}&ts=${timestamp}&hash=${hash}&limit=25`;
    }
  } else {
    searchType === "stats";
    param = `?apikey=${publicKey}&ts=${timestamp}&hash=${hash}&name=${term}&limit=25`;
  }

  url = `https://gateway.marvel.com/v1/public/characters${param}`;

  return await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((resp) => resp.json())
    .catch((err) => err);
};
export default marvelApi;
