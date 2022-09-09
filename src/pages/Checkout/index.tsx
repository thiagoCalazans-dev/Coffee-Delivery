import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";
import { ProductCartCard } from "./components/ProductCartCard";
import { TotalContent } from "./components/TotalContent";
import { UserInformations } from "./components/UserInformations";
import { AcceptButton, Card, CheckoutContainer, Title } from "./styles";

export const Checkout = () => {
  const navigate = useNavigate();

  const { shoppingCart } = useContext(ProductsContext);

  return (
    <CheckoutContainer>
      <UserInformations />
      <section>
        <Title>Cafés selecionados</Title>
        <Card>
          {shoppingCart.length === 0
            ? "Adcione algo ao seu carrinho"
            : shoppingCart.map((cartItens) => {
                return (
                  <ProductCartCard
                    key={cartItens.productid}
                    product={cartItens}
                  />
                );
              })}

          <TotalContent />
          <AcceptButton onClick={() => console.log(shoppingCart)}>
            Confirmar Pedido
          </AcceptButton>
        </Card>
      </section>
    </CheckoutContainer>
  );
};
