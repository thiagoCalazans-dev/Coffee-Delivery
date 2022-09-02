import { gql, useQuery } from "@apollo/client";
import { createContext, ReactNode, useReducer, useState } from "react";
import { addProductAction } from "../reducers/products/actions";
import { ProductReducer } from "../reducers/products/reducer";

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

export interface ProductOnCart {
  id: string;
  title: string;
  description: string;
  value: number;
  image: Image;
  categories: Category[];
  quantity: number;
}

interface ProductsContextType {
  productList: { products: Product[] } | undefined;
  productsCartList: ProductOnCart[];
  addProductCart: (product: ProductOnCart) => void;
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

  const [productsCartList, setProductsCartList] = useState<ProductOnCart[]>([]);

  const [productsCartState, dispatch] = useReducer(ProductReducer, []);

  const addProductCart = (product: ProductOnCart) => {
    dispatch(addProductAction(product));
  };

  return (
    <ProductsContext.Provider
      value={{ productList, productsCartList, addProductCart }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
