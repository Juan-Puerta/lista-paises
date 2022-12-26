import axios from "axios";

let instance = axios.create({
  baseURL: "https://restcountries.com/v3.1/region",
  responseType: "json",
  headers: { "X-Requested-With": "XMLHttpRequest" },
});

export default instance;
