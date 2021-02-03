import { MD5 } from "react-native-crypto-js";

const privateKey = "2b88127b053b872fa464c4950fb544eb1a699615";
const publicKey = "59e622d84ffc7367a30898054acd593e";
const marvel = [];
const generateHash = (timestamp, privateKey, publicKey) =>
  MD5(`${timestamp}${privateKey}${publicKey}`);

const marvelApi = async (term) => {
  const timestamp = +new Date();
  const hash = generateHash(timestamp, privateKey, publicKey);
  let param= "";
  //check if there is something to search for
  term
    ? param = `apikey=${publicKey}&ts=${timestamp}&hash=${hash}&nameStartsWith=${term}&limit=25`
    : param = `apikey=${publicKey}&ts=${timestamp}&hash=${hash}&limit=25`
    const  url = `https://gateway.marvel.com/v1/public/characters?${param}`;
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
