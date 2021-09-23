import fakeStoreApi from "../../apis/fakeStoreApi";
import { ActionTypes } from "../constants/action-types";

export const fetchProducts = () => async (dispatch) => {
  const response = await fakeStoreApi.get("/products");
  dispatch({
    type: ActionTypes.FETCH_PRODUCTS,
    payload: response.data,
  });
};

export const fetchProduct = (id) => async (dispatch) => {
  const response = await fakeStoreApi.get(`/products/${id}`);
  dispatch({
    type: ActionTypes.SELECTED_PRODUCT,
    payload: response.data,
  });
};

export const removeSelectedProduct = (product) => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    payload: product,
  };
}
