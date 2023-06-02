import axios from "axios";
const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const getAllCallLogs = async (token) => {
  try {
    const urlRequest = `${baseUrl}/callLog/getCallLogs`;
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
