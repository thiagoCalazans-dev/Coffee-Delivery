import { Product, ShoppingCartProduct } from "../../context/ProductsContext";

export enum ActionTypes {
  ADD_PRODUCT_CART = "ADD_PRODUCT_CART",
  REMOVE_SHOPPING_CART_ITEM = "REMOVE_SHOPPING_CART_ITEM",
  INCREASE_SHOPPING_CART_ITEM_QUANTITY = "INCREASE_SHOPPING_CART_ITEM_QUANTITY",
  DECREASE_SHOPPING_CART_ITEM_QUANTITY = " DECREASE_SHOPPING_CART_ITEM_QUANTITY",
  RESET_SHOPPING_CART = "RESET_SHOPPING_CART",
}

export const resetShoppingCartAction = (product: ShoppingCartProduct) => {
  return {
    type: ActionTypes.RESET_SHOPPING_CART,
    payload: {
      product,
    },
  };
};
export const addProductAction = (product: ShoppingCartProduct) => {
  return {
    type: ActionTypes.ADD_PRODUCT_CART,
    payload: {
      product,
    },
  };
};

export const removeShoppingCartItemAction = (product: ShoppingCartProduct) => {
  return {
    type: ActionTypes.REMOVE_SHOPPING_CART_ITEM,
    payload: {
      product,
    },
  };
};
export const decreaseShoppingCartItemQuantityAction = (
  product: ShoppingCartProduct
) => {
  return {
    type: ActionTypes.DECREASE_SHOPPING_CART_ITEM_QUANTITY,
    payload: {
      product,
    },
  };
};

export const increaseShoppingCartItemQuantityAction = (
  product: ShoppingCartProduct
) => {
  return {
    type: ActionTypes.INCREASE_SHOPPING_CART_ITEM_QUANTITY,
    payload: {
      product,
    },
  };
};
