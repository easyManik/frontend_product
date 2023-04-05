import axios from "axios";
import swal from "sweetalert";
import * as string from "../string";

export const getProduct =
  ({ page, limit, totalData, totalPage }) =>
  async (dispacth) => {
    try {
      dispacth({ type: string.GET_PRODUCT_PENDING });
      const { data } = await axios.get(
        `https://backendproduct-production.up.railway.app/?page=${page}&limit=${limit}&totalData=${totalData}&totalPage=${totalPage}`
      );
      dispacth({
        type: string.GET_PRODUCT_SUCCESS,
        payload: { data: data.data, pagination: data.pagination },
      });
    } catch (error) {
      dispacth({ type: string.GET_PRODUCT_ERROR, payload: error.response });
    }
  };

export const getDetailProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: string.GET_PRODUCT_DETAIL_PENDING });
    const { data: resData } = await axios.get(
      `https://backendproduct-production.up.railway.app/${id}`
    );
    dispatch({
      type: string.GET_PRODUCT_DETAIL_SUCCESS,
      payload: resData.data,
    });
    return resData.data;
  } catch (error) {
    dispatch({
      type: string.GET_PRODUCT_DETAIL_ERROR,
      payload: error.response.data,
    });
  }
};

export const insertProduct = (data, token, navigate) => async (dispatch) => {
  try {
    const result = await axios.post(
      `https://backendproduct-production.up.railway.app/`,
      data
    );
    const insert = result.data;
    dispatch({ type: "ADD_TICKET", payload: insert });
    swal({
      title: "Insert Ticket Success",
      text: `${result.data.message}`,
      icon: "success",
    });
    navigate("/product");
  } catch (error) {
    console.log(error);
    swal({
      title: "Insert Ticket Fail",
      text: `${error.response.data.message}`,
      icon: "error",
    });
  }
};

export const updateProduct = (id, data, navigate) => async (dispatch) => {
  try {
    const result = await axios.put(
      `https://backendproduct-production.up.railway.app/${id}`,
      data
    );
    const updateprod = result.data;
    dispatch({ type: "ADD_TICKET", payload: updateprod });
    swal({
      title: "Insert product Success",
      text: `${result.data.message}`,
      icon: "success",
    });
    navigate("/product");
  } catch (error) {
    console.log(error);
    swal({
      title: "Insert Product Fail",
      text: `${error.message}`,
      icon: "error",
    });
  }
};
