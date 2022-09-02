import { ProductOnCart } from "../../context/ProductsContext";
import { ActionTypes } from "./actions";

export const ProductReducer = (state: ProductOnCart[], action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT: {
      if (!state.find((product) => action.payload.product.id === product.id)) {
        return [...state, action.payload.product];
      }
    }
    default:
      return state;
  }
};
