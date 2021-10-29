import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    config.baseURL = "http://clinic.studio-mind.ru";
    config.headers.authorization = "Bearer " + localStorage.getItem("token");
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const fetcher = async () => {
  const response = await axios.get("/profile");
  if (response.statusText !== "OK") {
    const error = new Error();
    error.message = "An error occured while fetching the data...";
    throw error;
  }
  return response.data;
};
