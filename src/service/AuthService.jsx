import axios from "axios";

const API_URL = "http://localhost:92";

export const registerUser = async (email, password) => 
{

  try {
    const response = await axios.post(`${API_URL}/register`, { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "An error occurred");
  }

};

export const loginUser = async (email, password) => 
{

  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || "An error occurred");
  }
  
};