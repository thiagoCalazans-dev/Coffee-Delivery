import { Product, ShoppingCartProduct } from "../../context/ProductsContext";
import { ActionTypes } from "./actions";

type product = {
  product: ShoppingCartProduct;
};

interface Action {
  type: string;
  payload: product;
}

export const shoppingCartReducer = (
  state: ShoppingCartProduct[],
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT_CART: {
      if (
        state.find(
          (item) => item.productid === action.payload.product?.productid
        ) == null
      ) {
        return [...state, action.payload.product];
      } else {
        const newShoppingCart = state.map((item) => {
          if (item.productid === action.payload.product.productid) {
            return {
              ...item,
              quantity: item.quantity + action.payload.product.quantity,
            };
          } else {
            return item;
          }
        });
        return newShoppingCart;
      }
    }
    case ActionTypes.INCREASE_SHOPPING_CART_ITEM_QUANTITY: {
      const newShoppingCart = state.map((item) => {
        if (item.productid === action.payload.product.productid) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
      return newShoppingCart;
    }
    case ActionTypes.DECREASE_SHOPPING_CART_ITEM_QUANTITY: {
      const newShoppingCart = state.map((item) => {
        if (
          item.productid === action.payload.product.productid &&
          item.quantity > 1
        ) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
      return newShoppingCart;
    }
    case ActionTypes.REMOVE_SHOPPING_CART_ITEM: {
      const newShoppingCart = state.filter(
        (item) => item.productid !== action.payload.product.productid
      );
      return newShoppingCart;
    }
    case ActionTypes.RESET_SHOPPING_CART: {
      return [];
    }
    default:
      return state;
  }
};
