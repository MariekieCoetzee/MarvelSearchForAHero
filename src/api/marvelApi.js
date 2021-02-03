import { MD5 } from "react-native-crypto-js";
import { privateKey, publicKey } from "@env";

const generateHash = (timestamp, privateKey, publicKey) =>
  MD5(`${timestamp}${privateKey}${publicKey}`);

const marvelApi = async (term) => {
  const timestamp = +new Date();
  const hash = generateHash(timestamp, privateKey, publicKey);
  let param = "";
  term !== "" 
    ? (param = `apikey=${publicKey}&ts=${timestamp}&hash=${hash}&nameStartsWith=${term}&limit=25`)
    : (param = `apikey=${publicKey}&ts=${timestamp}&hash=${hash}&limit=25`);

  const url = `https://gateway.marvel.com/v1/public/characters?${param}`;
  return fetch(url, {
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
