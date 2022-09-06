import { ShoppingCartProduct } from "../../context/ProductsContext";
import { ActionTypes } from "./actions";

export const ProductReducer = (state: ShoppingCartProduct[], action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT: {
      if (
        !state.find(
          (product) => action.payload.product.id === product.product.id
        )
      ) {
        return [...state, action.payload.product];
      } else {
        state.map((item) => {
          if (item.product.id === action.payload.product.id) {
            return {
              ...item,
              quantity: item.quantity + action.payload.product.quantity,
            };
          } else {
            return item;
          }
        });
        // const newListToAdd = state.filter((item) => {
        //   return item.id !== action.payload.product.id;
        // });
        // const productToChange = state.filter((item) => {
        //   return item.id === action.payload.product.id;
        // });
        // const newQuantity =
        //   productToChange[0].quantity + action.payload.product.quantity;
        // console.log(newQuantity);
        // const newProduct = { ...productToChange[0], newQuantity };
        // return [...newListToAdd, newProduct];
      }
    }
    default:
      return state;
  }
};
