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

export const Success = () => {
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
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span> Farrapos - Porto Alegre, RS</span>
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
              <strong>Cartão de Crédito</strong>
            </DetailsTextContainer>
          </DetailsCard>
        </Card>
      </DetailsContainer>
      <img src={moto} />
    </SuccessContainer>
  );
};
