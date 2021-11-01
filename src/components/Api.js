import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://clinic.studio-mind.ru",
});
