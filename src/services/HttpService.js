import axios from "axios";

// API Base URL
const BASE_URL = process.env.REACT_APP_API_URL;

const AUTHENTICATE_USER = async (payload) => {
  // Make Http POST Request
  let response = await axios.post(`${BASE_URL}/auth`, {
    username: payload.username,
  });

  // Return Result
  return response.data;
};

const CREATE_USER = async (payload) => {
  // Make Http POST Request
  let response = await axios.post(`${BASE_URL}/users`, {
    name: payload.name,
    email: payload.email,
    phone: payload.phone,
    username: payload.username,
  });

  // Return Result
  return response.data;
};

const FETCH_USERS = async (payload) => {
  // Make Http POST Request
  let response = await axios.post(`${BASE_URL}/conversations/users`, {
    senderId: payload.id,
  });

  // Return Result
  return response.data;
};

const FETCH_CONVERSATIONS = async (payload) => {
  // Make Http POST Request
  let response = await axios.post(`${BASE_URL}/conversations`, {
    senderId: payload.senderId,
    receiverId: payload.receiverId,
  });

  // Return Result
  return response.data;
};

export { AUTHENTICATE_USER, CREATE_USER, FETCH_USERS, FETCH_CONVERSATIONS };
