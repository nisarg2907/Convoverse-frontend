import axios from "axios";
import { BASE_URL } from "../config";

const axiosInstance = axios.create({
  baseURL: BASE_URL, // Correct the property name to baseURL
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error.response && error.response.data) || "Something went wrong"
);

export default axiosInstance;
