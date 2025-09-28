import axios from "axios";
import { AxiosToken, BaseApi } from "../app/token";

export async function registerUser(userData) {
  try {
    const response = await axios.post(`${BaseApi}/Account/register`, userData);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

