import { Minus, Plus, Trash } from "phosphor-react";
import { ProductOnCart } from "../../../../context/ProductsContext";
import {
  ActionsBox,
  Counter,
  MiddleContent,
  ProductCartContainer,
  RemoveButton,
  Value,
} from "./styles";

interface ProductCartCardProps {
  product: ProductOnCart;
}

export const ProductCartCard = ({ product }: ProductCartCardProps) => {
  return (
    <ProductCartContainer>
      <img src={product.image.url} />
      <MiddleContent>
        <strong>{product.title}</strong>
        <ActionsBox>
          <Counter>
            <button>
              <Minus size={14} />
            </button>
            {product.quantity}
            <button>
              <Plus size={14} />
            </button>
          </Counter>
          <RemoveButton>
            <Trash size={16} />
            <span>Remover</span>
          </RemoveButton>
        </ActionsBox>
      </MiddleContent>
      <Value>{`R$ ${product.value}`}</Value>
    </ProductCartContainer>
  );
};
