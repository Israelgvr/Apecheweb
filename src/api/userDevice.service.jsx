import axios from "axios";
const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const getAllUserDevice = async () => {
  try {
    const urlRequest = `${baseUrl}/userDevice/getUserDevice`;
    const { data } = await axios.get(urlRequest);
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateUserDevice = async (id, newName, token) => {
  try {
    const urlRequest = `${baseUrl}/userDevice/${id}/updateUserDevice`;
    const { data } = await axios.put(
      urlRequest, // URL base
      { nameUser: newName },  // Body con datos
      {
        headers: {  // Headers
          Accept: "application/json",
          "Content-Type": "application/json",
          "x-token": token,
        },
      }
    );

    return data;
  } catch (error) {
    throw error;
  }
};

export const getUserDeviceById = async (id) => {
  try {
    const urlRequest = `${baseUrl}/userDevice/${id}/getUserDeviceById`;
    const { data } = await axios.get(urlRequest);
    return data;
  } catch (error) {
    throw error;
  }
};