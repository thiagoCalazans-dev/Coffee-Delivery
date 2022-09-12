import { gql, useQuery } from "@apollo/client";
import { createContext, ReactNode, useReducer, useState } from "react";
import { OrderFormData } from "../pages/Checkout";
import {
  addProductAction,
  decreaseShoppingCartItemQuantityAction,
  increaseShoppingCartItemQuantityAction,
  removeShoppingCartItemAction,
} from "../reducers/shoppingCart/actions";
import { shoppingCartReducer } from "../reducers/shoppingCart/reducer";

export const ProductsContext = createContext({} as ProductsContextType);

interface ProductsContextProviderProps {
  children: ReactNode;
}

interface Image {
  url: string;
}

interface Category {
  id: string;
  title: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  value: number;
  image: Image;
  categories: Category[];
}

export interface OrderOptions {
  "zip-code": string;
  street: string;
  number: number;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
  "payment-options": "credit-card" | "debit-card" | "money";
}

export interface Order {
  orderProduct: ShoppingCartProduct[];
  orderOptions: OrderOptions;
}

export interface ShoppingCartProduct {
  productid: string;
  quantity: number;
}

interface ProductsContextType {
  productList: { products: Product[] } | undefined;
  shoppingCart: ShoppingCartProduct[];
  addProductCart: (product: ShoppingCartProduct) => void;
  cartQuantity: number;
  increaseShoppingCartItemQuantity: (product: ShoppingCartProduct) => void;
  decreaseShoppingCartItemQuantity: (product: ShoppingCartProduct) => void;
  removeShoppingCartItem: (product: ShoppingCartProduct) => void;
  TotalShoppingCartValue: string;
  handleOrder: (data: OrderFormData) => void;
  order: Order;
}

export const ProductsContextProvider = ({
  children,
}: ProductsContextProviderProps) => {
  const GET_PRODUCTS_QUERY = gql`
    query {
      products(first: 20) {
        id
        title
        description
        value
        image {
          url
        }
        categories {
          id
          title
        }
      }
    }
  `;

  const { data: productList } = useQuery<{ products: Product[] }>(
    GET_PRODUCTS_QUERY
  );
  // const [shoppingCart, setShoppingCart] = useState<ShoppingCartProduct[]>([]);
  const [order, setOrder] = useState({} as Order);
  const [shoppingCart, dispatch] = useReducer(shoppingCartReducer, []);

  const handleOrder = (data: OrderFormData) => {
    const newOrder: Order = {
      orderProduct: shoppingCart,
      orderOptions: data,
    };
    setOrder(newOrder);
  };

  const cartQuantity = shoppingCart.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const getProductValue = (id: string) => {
    return productList!.products.filter((item) => item.id === id)[0].value;
  };

  const TotalShoppingItemValue = shoppingCart.map(
    (item) => item.quantity * getProductValue(item.productid)
  );

  const TotalShoppingCartValue = TotalShoppingItemValue.reduce(
    (value, item) => item + value,
    0
  ).toFixed(2);

  // STATE FUNCTIONS

  // const addProductCart = (product: ShoppingCartProduct) => {
  //   if (
  //     shoppingCart.find((item) => item.productid === product.productid) == null
  //   ) {
  //     setShoppingCart([...shoppingCart, product]);
  //   } else {
  //     const newShoppingCart = shoppingCart.map((item) => {
  //       if (item.productid === product.productid) {
  //         return { ...item, quantity: item.quantity + product.quantity };
  //       } else {
  //         return item;
  //       }
  //     });
  //     setShoppingCart(newShoppingCart);
  //   }
  // };

  // const increaseShoppingCartItemQuantity = (product: ShoppingCartProduct) => {
  //   const newShoppingCart = shoppingCart.map((item) => {
  //     if (item.productid === product.productid) {
  //       return { ...item, quantity: item.quantity + 1 };
  //     } else {
  //       return item;
  //     }
  //   });
  //   setShoppingCart(newShoppingCart);
  // };

  // const decreaseShoppingCartItemQuantity = (product: ShoppingCartProduct) => {
  //   const newShoppingCart = shoppingCart.map((item) => {
  //     if (item.productid === product.productid && item.quantity > 1) {
  //       return { ...item, quantity: item.quantity - 1 };
  //     } else {
  //       return item;
  //     }
  //   });
  //   setShoppingCart(newShoppingCart);
  // };

  // const removeShoppingCartItem = (product: ShoppingCartProduct) => {
  //   const newShoppingCart = shoppingCart.filter(
  //     (item) => item.productid !== product.productid
  //   );
  //   setShoppingCart(newShoppingCart);
  // };

  const addProductCart = (product: ShoppingCartProduct) => {
    dispatch(addProductAction(product));
  };

  const increaseShoppingCartItemQuantity = (product: ShoppingCartProduct) => {
    dispatch(increaseShoppingCartItemQuantityAction(product));
  };

  const decreaseShoppingCartItemQuantity = (product: ShoppingCartProduct) => {
    dispatch(decreaseShoppingCartItemQuantityAction(product));
  };

  const removeShoppingCartItem = (product: ShoppingCartProduct) => {
    dispatch(removeShoppingCartItemAction(product));
  };

  return (
    <ProductsContext.Provider
      value={{
        order,
        productList,
        shoppingCart,
        addProductCart,
        cartQuantity,
        increaseShoppingCartItemQuantity,
        decreaseShoppingCartItemQuantity,
        removeShoppingCartItem,
        TotalShoppingCartValue,
        handleOrder,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
