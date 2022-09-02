import {
  SubTotalContainer,
  SubTotalDescription,
  SubTotalValue,
  TotalContainer,
} from "./styles";

export const TotalContent = () => {
  return (
    <TotalContainer>
      <SubTotalContainer>
        <SubTotalDescription>Total de itens</SubTotalDescription>
        <SubTotalValue>R$ 29,70</SubTotalValue>
      </SubTotalContainer>
      <SubTotalContainer>
        <SubTotalDescription>Entrega</SubTotalDescription>
        <SubTotalValue>R$ 3,50</SubTotalValue>
      </SubTotalContainer>
      <SubTotalContainer>
        <SubTotalDescription big>Total</SubTotalDescription>
        <SubTotalValue big>R$ 33,20</SubTotalValue>
      </SubTotalContainer>
    </TotalContainer>
  );
};
