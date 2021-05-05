import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getManagerBoard = () => {
  return axios.get(API_URL + "man", { headers: authHeader() });
};

const getAdminBoard = (toStart,from) => {
  if(toStart && from){
  return axios.post("http://localhost:8080/api/security/getpressure",{toStart:toStart,from:from} , { headers: authHeader() });

  }
  return axios.post("http://localhost:8080/api/security/getpressure" ,{toStart:1,from:1}, { headers: authHeader() });
};

export default {
  getPublicContent,
  getUserBoard,
  getManagerBoard,
  getAdminBoard,
};