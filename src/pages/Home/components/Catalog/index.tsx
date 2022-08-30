import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { useNavigate } from "react-router-dom";
import { Product } from "../..";
import {
  Actions,
  BuyOptions,
  Card,
  CatalogContainer,
  Categories,
  Counter,
  Value,
} from "./styles";

interface Products {
  products: Product[];
}

interface CatalogProps {
  data: Products;
}

const FormatedValue = (value: number) => {
  return value.toFixed(2);
};

export const Catalog = ({ data }: CatalogProps) => {
  const navigate = useNavigate();

  const handleCartNavigation = () => {
    navigate("/checkout");
  };

  return (
    <CatalogContainer>
      {data?.products.map((product) => (
        <Card key={product.id}>
          <img src={product.image.url} />
          <Categories>
            {product.categories.map((category) => {
              return <span key={category.id}>{category.title}</span>;
            })}
          </Categories>
          <strong>{product.title}</strong>
          <p>{product.description}</p>
          <BuyOptions>
            <Value>
              <span>R$</span>
              <strong>{FormatedValue(product.value)}</strong>
            </Value>
            <Actions>
              <Counter>
                <button>
                  <Minus size={14} color="#8047f8" />
                </button>
                1
                <button>
                  <Plus size={14} color="#8047f8" />
                </button>
              </Counter>
              <button onClick={handleCartNavigation}>
                <ShoppingCartSimple weight="fill" color="#FFFFFF" />
              </button>
            </Actions>
          </BuyOptions>
        </Card>
      ))}
    </CatalogContainer>
  );
};
