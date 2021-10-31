import axios from "axios";

const getToken = () => {
  return "Bearer " + localStorage.getItem("token");
};

const axiosInstance = axios.create({
  baseURL: "http://clinic.studio-mind.ru",
});

export const fetcher = async () => {
  const response = await axiosInstance.get("/profile", {
    headers: { authorization: getToken() },
  });
  if (response.statusText !== "OK") {
    const error = new Error();
    error.message = "An error occured while fetching the data...";
    throw error;
  }
  return response.data;
};


