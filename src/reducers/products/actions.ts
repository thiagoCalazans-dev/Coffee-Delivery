import { ProductOnCart } from "../../context/ProductsContext";

export enum ActionTypes {
  ADD_PRODUCT = "ADD_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
  INCREASE_PRODUCT_AMOUNT = "INCREASE_PRODUCT_AMOUNT",
  DECREASE_PRODUCT_AMOUNT = " DECREASE_PRODUCT_AMOUNT",
}

export const addProductAction = (product: ProductOnCart) => {
  return {
    type: ActionTypes.ADD_PRODUCT,
    payload: {
      product,
    },
  };
};

export const removeProductAction = () => {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
  };
};
export const increaseAmountAction = () => {
  return {
    type: ActionTypes.INCREASE_PRODUCT_AMOUNT,
  };
};
export const decreaseAmountAction = () => {
  return {
    type: ActionTypes.DECREASE_PRODUCT_AMOUNT,
  };
};
