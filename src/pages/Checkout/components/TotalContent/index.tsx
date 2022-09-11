import { useContext } from "react";
import { ProductsContext } from "../../../../context/ProductsContext";
import {
  SubTotalContainer,
  SubTotalDescription,
  SubTotalValue,
  TotalContainer,
} from "./styles";

export const TotalContent = () => {
  const { TotalShoppingCartValue } = useContext(ProductsContext);
  const shipping = 4;
  const totalShoppingPlusShippingValue = (
    Number(TotalShoppingCartValue) + shipping
  ).toFixed(2);

  return (
    <TotalContainer>
      <SubTotalContainer>
        <SubTotalDescription>Total de itens</SubTotalDescription>
        <SubTotalValue>{`R$ ${TotalShoppingCartValue}`}</SubTotalValue>
      </SubTotalContainer>
      <SubTotalContainer>
        <SubTotalDescription>Entrega</SubTotalDescription>
        <SubTotalValue>{`R$ ${shipping}`}</SubTotalValue>
      </SubTotalContainer>
      <SubTotalContainer>
        <SubTotalDescription big>Total</SubTotalDescription>
        <SubTotalValue
          big
        >{`R$ ${totalShoppingPlusShippingValue}`}</SubTotalValue>
      </SubTotalContainer>
    </TotalContainer>
  );
};
