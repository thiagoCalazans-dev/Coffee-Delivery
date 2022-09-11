import {
  Card,
  DetailsCard,
  DetailsContainer,
  DetailsTextContainer,
  IconContainer,
  SuccessContainer,
} from "./styles";
import moto from "../../assets/moto.svg";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";

export const Success = () => {
  const { order } = useContext(ProductsContext);

  const getPaymentMethod = () => {
    if (order.orderOptions["payment-options"] === "money") return "Dinheiro";
    else if (order.orderOptions["payment-options"] === "credit-card")
      return "Cartão de crédito";
    else if (order.orderOptions["payment-options"] === "debit-card")
      return "Cartão de débito";
  };

  return (
    <SuccessContainer>
      <DetailsContainer>
        <strong>Uhu! Pedido confirmado</strong>
        <span>Agora é só aguardar que logo o café chegará até você</span>
        <Card>
          <DetailsCard>
            <IconContainer backgroundIconColor="purple">
              <MapPin weight="fill" />
            </IconContainer>
            <DetailsTextContainer>
              <span>
                Entrega em{" "}
                <strong>{`${order.orderOptions.street}, ${order.orderOptions.number}`}</strong>
              </span>
              <span>{`${order.orderOptions.neighborhood} - ${order.orderOptions.city}, ${order.orderOptions.state}`}</span>
            </DetailsTextContainer>
          </DetailsCard>
          <DetailsCard>
            <IconContainer backgroundIconColor="yellow">
              <Timer weight="fill" />
            </IconContainer>
            <DetailsTextContainer>
              <span>Previsão de entrega </span>
              <strong> 20min - 30min</strong>
            </DetailsTextContainer>
          </DetailsCard>
          <DetailsCard>
            <IconContainer backgroundIconColor="darkYellow">
              <CurrencyDollar weight="regular" />
            </IconContainer>
            <DetailsTextContainer>
              <span>Pagamento na entrega</span>
              <strong>{getPaymentMethod()}</strong>
            </DetailsTextContainer>
          </DetailsCard>
        </Card>
      </DetailsContainer>
      <img src={moto} />
    </SuccessContainer>
  );
};
