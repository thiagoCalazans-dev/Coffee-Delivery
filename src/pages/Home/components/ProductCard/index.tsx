import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Product, ProductsContext } from "../../../../context/ProductsContext";
import {
  Actions,
  BuyOptions,
  Card,
  Categories,
  Counter,
  Value,
} from "./styles";

const FormatedValue = (value: number) => {
  return value.toFixed(2);
};

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);

  const { addProductCart } = useContext(ProductsContext);

  const handleMinusClick = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handlePlusClick = () => {
    setQuantity(quantity + 1);
  };

  const handleCartClick = () => {
    const newProduct = { ...product, quantity: quantity };
    addProductCart(newProduct);
  };

  return (
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
            <button onClick={handleMinusClick}>
              <Minus size={14} color="#8047f8" />
            </button>
            {quantity}
            <button onClick={handlePlusClick}>
              <Plus size={14} color="#8047f8" />
            </button>
          </Counter>
          <button onClick={handleCartClick}>
            <ShoppingCartSimple weight="fill" color="#FFFFFF" />
          </button>
        </Actions>
      </BuyOptions>
    </Card>
  );
};
