import axios from "axios";

// API Base URL
const BASE_URL = process.env.REACT_APP_API_URL;

const AUTHENTICATE_USER = async (payload) => {
  try {
    // Make Http Request
    let response = await axios.post(`${BASE_URL}/auth`, {
      username: payload.username,
    });

    // Return Result
    return response.data;
  } catch (error) {
    console.log("AuthenticateUser", error);
  }
};

const CREATE_USER = async (payload) => {
  // Make Http Request
  let response = await axios.post(`${BASE_URL}/users`, {
    name: payload.name,
    email: payload.email,
    phone: payload.phone,
    username: payload.username,
  });

  // Return Result
  return response.data;
};

export { AUTHENTICATE_USER, CREATE_USER };
