import axios from "axios";
const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const getAllLocations = async (token) => {
  try {
    const urlRequest = `${baseUrl}/location/getLocations`;
    const { data } = await axios.get(urlRequest, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-token": token,
      },
    });
    return data;
  } catch (error) {
    throw error;
  }
};