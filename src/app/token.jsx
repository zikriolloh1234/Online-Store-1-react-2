// app/token.js
import { darken } from "@mui/material/styles";
import axios from "axios";
// import { Button, message } from 'antd';


export function SaveToken(token) {
  localStorage.setItem("accessToken", token);
}

export function GetToken() {
  // console.log("TOKEN:", localStorage.getItem("accessToken"));
  return localStorage.getItem("accessToken");
}

export const BaseApi = import.meta.env.VITE_API_URL;
// console.log("error", BaseApi);//


export const AxiosToken = axios.create({
  baseURL: BaseApi,
});

AxiosToken.interceptors.request.use(
  (config) => {
    const token = GetToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    config.headers["Cache-Control"] = "no-cache";
    return config;
  },
  (error) => Promise.reject(error)
);

export async function getProducts(pageNumber = 1, pageSize = 10) {
  try {
    const { data } = await AxiosToken.get("/Product/get-products", {
      params: { pageNumber, pageSize },
    });

    if (data && data.data) {
      return {
        products: data.data.products || [],
        totalPage: data.data.totalPage || data.totalPage || 0,
        totalRecord: data.data.totalRecord || data.totalRecord || 0,
      };
    } else {
      console.error("error:", data);
      return { products: [], totalPage: 0, totalRecord: 0 };
    }
  } catch (error) {
    console.error("error:", error);
    return { products: [], totalPage: 0, totalRecord: 0 };
  }
}

export async function getById(id) {
  try {
    let response = await AxiosToken.get(`/Product/get-product-by-id?id=${id}`);
    return response.data.data;
  } catch (error) {
    console.log(error);
  }
};

export const addToCart = async (id) => {
  try {
    const token = localStorage.getItem("accessToken");
    const res = await axios.post(
      `http://37.27.29.18:8002/Cart/add-product-to-cart?id=${id}`,
      {},
      {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Accept": "*/*",
        },
      }
    );

  } catch (err) {
    console.error("Ошибка при добавлении товара:", err);
  }
};

export const getCart = async () => {
  try {
    let res = await AxiosToken.get(`/Cart/get-products-from-cart`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
console.log("TOKEN:", localStorage.getItem("accessToken"));


export const deleteProductCard = async (id) => {
  try {
    let res = await AxiosToken.delete(`/Cart/delete-product-from-cart?id=${id}`);
    return res.data
  } catch (error) {
    console.log(error);
  }
}
export const clearCart = async () => {
  try {
    let res = await AxiosToken.delete(`/Cart/clear-cart`);
    return res.data
  } catch (error) {
    console.log(error);
  }
}
export const decQunCart = async (id) => {
  try {
    let res = await AxiosToken.put(`/Cart/increase-product-in-cart?id=${id}`);
    return res.data
  } catch (error) {
    console.log(error);
  }
}
export const incQunCart = async (id) => {
  try {
    let res = await AxiosToken.put(`/Cart/reduce-product-in-cart?id=${id}`);
    return res.data
  } catch (error) {
    console.log(error);
  }
}
export const getUserProfil = async (id) => {
  try {
    let res = await AxiosToken.get(`/UserProfile/get-user-profile-by-id?id=${id}`);
    return res.data
  } catch (error) {
    console.log(error);
  }
}



