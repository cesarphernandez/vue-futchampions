import axios from "axios";
// Para utilizar el os const os = require("os")
export default () => {
  // PRUEBAS
  // const host = "localhost:8000";
  // const host = "apilaravelsilvernest.cafam.com.co";
  // DESARROLLO

  // PRODUCCION

  return axios.create({
    baseURL: `http://localhost:3000/api/v1//`,
    // baseURL: `https://${host}/api`,
  });
};
