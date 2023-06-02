import axios from "axios";
const baseUrl = import.meta.env.VITE_BACKEND_URL;

export const getAllAdmin = async () => {
  try {
    const urlRequest = `${baseUrl}/admin/getAdmin`;
    const { data } = await axios.get(urlRequest);
    return data;
  } catch (error) {
    throw error;
  }
};

export const registerNewAdmin = async ({
  email,
  verification,
  name,
  nickname,
  picture,
  sub,
}) => {
  try {
    const urlRequest = `${baseUrl}/admin/registerAdmin`;
    const { data } = await axios.post(
      urlRequest,
      {
        email,
        verification,
        name,
        nickname,
        picture,
        sub,
      },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateCheckEmailAdmin = async ({ email, verification }) => {
  try {
    const urlRequest = `${baseUrl}/admin/updateAdmin`;
    const { data } = await axios.put(
      urlRequest,
      { email, verification },
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    return data;
  } catch (error) {
    throw error;
  }
};
