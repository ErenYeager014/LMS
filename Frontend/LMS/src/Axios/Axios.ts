import axios from "axios";

export const Axios = axios.create({
  baseURL: "http://localhost:8080/api/",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "Bearer" + " " + localStorage.getItem("token") || "",
  },
});
