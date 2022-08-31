import { Minus, Plus, Trash } from "phosphor-react";
import { UserInformations } from "./components/UserInformations";
import {
  ActionsBox,
  Card,
  CartInformations,
  CheckoutContainer,
  Counter,
  MiddleContent,
  ProductCart,
  RemoveButton,
  Title,
  Value,
} from "./styles";

export const Checkout = () => {
  return (
    <CheckoutContainer>
      <UserInformations />
      <CartInformations>
        <Title>Cafés selecionados</Title>
        <Card>
          <ProductCart>
            <img src="https://media.graphassets.com/ACiThggHQwWS4ACGtIi4" />
            <MiddleContent>
              <strong>Expresso Tradicional</strong>
              <ActionsBox>
                <Counter>
                  <button>
                    <Minus size={14} color="#8047f8" />
                  </button>
                  1
                  <button>
                    <Plus size={14} color="#8047f8" />
                  </button>
                </Counter>
                <RemoveButton>
                  <Trash size={16} color="#8047f8" />
                  <span>Remover</span>
                </RemoveButton>
              </ActionsBox>
            </MiddleContent>
            <Value>R$ 9,90</Value>
          </ProductCart>
        </Card>
      </CartInformations>
    </CheckoutContainer>
  );
};
