import { Minus, Plus, Trash } from "phosphor-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";
import { ProductCartCard } from "./components/ProductCartCard";
import { TotalContent } from "./components/TotalContent";
import { UserInformations } from "./components/UserInformations";
import { AcceptButton, Card, CheckoutContainer, Title } from "./styles";

export const Checkout = () => {
  const navigate = useNavigate();

  const { productsCartList } = useContext(ProductsContext);

  return (
    <CheckoutContainer>
      <UserInformations />
      <section>
        <Title>Cafés selecionados</Title>
        <Card>
          <>
            {productsCartList.map((product) => {
              <ProductCartCard product={product} />;
            })}
          </>
          <TotalContent />
          <AcceptButton onClick={() => navigate("/success")}>
            Confirmar Pedido
          </AcceptButton>
        </Card>
      </section>
    </CheckoutContainer>
  );
};
