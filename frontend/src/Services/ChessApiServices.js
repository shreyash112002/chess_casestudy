import axios from "axios";
const URL = `http://localhost:5047/api/Chess/players/performances`;
const URL_Winners = `http://localhost:5047/api/Chess/players/mostwins`;
const URL_post = `http://localhost:5047/api/Chess/match`;

async function getPlayers() {
  let data = null;

  try {
    let response = await axios.get(URL);
    if (response.status == 200 && response.data !== null) {
      data = await response.data;
    }
  } catch (error) {
    return JSON.stringify(error);
  }
  return data;
}
export const getWinners = async () => {
  let data1 = null;

  try {
    let response = await axios.get(URL_Winners);
    if (response.status == 200 && response.data !== null) {
      data1 = await response.data;
    }
  } catch (error) {
    return JSON.stringify(error);
  }
  return data1;
};
export const addMatch = async (match) => {
  let data = null;
  try {
    let response = await axios.post(URL_post, match);
    console.log(response.data);
    if (response.status === 200 && response.data !== null) {
      data = await response.data;
      console.log("Data from api" + JSON.stringify(data));
    }
  } catch (error) {
    return JSON.stringify(error);
  }
  return data;
};
export const getCountry = async (country) => {
  let data2 = null;

  try {
    let response = await axios.get(
      `http://localhost:5047/api/Chess/players/by-country?country=${country}&isDesc=true`
    );
    if (response.status == 200 && response.data !== null) {
      data2 = await response.data;
    }
  } catch (error) {
    return JSON.stringify(error);
  }
  return data2;
};

export default getPlayers;