import { ProductOnCart } from "../../context/ProductsContext";
import { ActionTypes } from "./actions";

export const ProductReducer = (state: ProductOnCart[], action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_PRODUCT: {
      if (!state.find((product) => action.payload.product.id === product.id)) {
        return ([...state, action.payload.product])          
      
      }else {
        const newListToAdd = state.filter((item) => {
          return item.id !== action.payload.product.id
        })

        const productToChange = state.filter((item) => {
          return item.id === action.payload.product.id
        })

        const newQuantity = productToChange[0].quantity + action.payload.product.quantity

        const newProduct = {...productToChange[0], newQuantity}

        return([...state, newProduct ])        
      }
    }
    default:
      return state;
  }
};
