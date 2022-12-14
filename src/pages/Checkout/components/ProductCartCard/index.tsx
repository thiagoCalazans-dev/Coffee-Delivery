import { Minus, Plus, Trash } from "phosphor-react";
import { useContext } from "react";
import {
  ProductsContext,
  ShoppingCartProduct,
} from "../../../../context/ProductsContext";
import {
  ActionsBox,
  Counter,
  MiddleContent,
  ProductCartContainer,
  RemoveButton,
  Value,
} from "./styles";

interface ProductCartCardProps {
  product: ShoppingCartProduct;
}

export const ProductCartCard = ({ product }: ProductCartCardProps) => {
  const {
    productList,
    decreaseShoppingCartItemQuantity,
    increaseShoppingCartItemQuantity,
    removeShoppingCartItem,
  } = useContext(ProductsContext);

  const cartProduct = productList?.products.filter(
    (item) => item.id === product.productid
  )[0];

  if (cartProduct === undefined) {
    return <span>loading...</span>;
  }

  return (
    <ProductCartContainer>
      <img src={cartProduct.image.url} />
      <MiddleContent>
        <strong>{cartProduct.title}</strong>
        <ActionsBox>
          <Counter>
            <button onClick={() => decreaseShoppingCartItemQuantity(product)}>
              <Minus size={14} />
            </button>
            {product.quantity}
            <button onClick={() => increaseShoppingCartItemQuantity(product)}>
              <Plus size={14} />
            </button>
          </Counter>
          <RemoveButton onClick={() => removeShoppingCartItem(product)}>
            <Trash size={16} />
            <span>Remover</span>
          </RemoveButton>
        </ActionsBox>
      </MiddleContent>
      <Value>{`R$ ${cartProduct.value}`}</Value>
    </ProductCartContainer>
  );
};
