import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://clinic.studio-mind.ru",
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"),
  },
});

export const fetcher = async (url) => {
  const response = await axiosInstance.get(url);
  if (response.statusText !== "OK") {
    const error = new Error();
    error.message = "An error occured while fetching the data...";
    throw error;
  }
  return response.data;
};
