import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { OrderFormData } from "../..";
import { Title } from "../../styles";
import {
  Adress,
  Card,
  ErrorMessage,
  FormContainer,
  FormControl,
  FormControlNeighborhood,
  InformationCard,
  InputWrapper,
  RadioGroupControl,
  UserInformationsContainer,
} from "./styles";

export const UserInformations = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<OrderFormData>();

  // type errorMessageNames = keyof OrderFormData;

  // const showErrorMessage = (formName: errorMessageNames) => {
  //   if (errors[formName]) {
  //     return <ErrorMessage>{errors[formName]?.message}</ErrorMessage>;
  //   }
  // };

  return (
    <UserInformationsContainer>
      <Title>Complete seu pedido</Title>
      <FormContainer>
        <Card>
          <InformationCard>
            <MapPinLine size={22} color="#C47F17" />
            <span>
              <strong>Endereço de Entrega</strong>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </span>
          </InformationCard>
          <Adress>
            <input placeholder="CEP" {...register("zip-code")} />
            <input placeholder="Rua" {...register("street")} />{" "}
            <FormControl>
              <input
                placeholder="Número"
                {...register("number", { valueAsNumber: true })}
              />
              <InputWrapper>
                <input placeholder="Complemento" {...register("complement")} />
              </InputWrapper>
            </FormControl>
            <FormControlNeighborhood>
              <input placeholder="Bairro" {...register("neighborhood")} />
              <input placeholder="Cidade" {...register("city")} />
              <input placeholder="UF" {...register("state")} />
            </FormControlNeighborhood>
          </Adress>
        </Card>
        <Card>
          <InformationCard>
            <CurrencyDollar size={22} color="#8047F8" />
            <span>
              <strong>Pagamento</strong>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </span>
          </InformationCard>
          <RadioGroupControl>
            <input
              type="radio"
              id="credit-card"
              value="credit-card"
              {...register("payment-options")}
            />
            <label htmlFor="credit-card" tabIndex={0}>
              <CreditCard size={16} color="#8047F8" />
              cartão de crédito
            </label>
            <input
              type="radio"
              id="debit-card"
              value="debit-card"
              {...register("payment-options")}
            />
            <label htmlFor="debit-card" tabIndex={0}>
              <Bank size={16} color="#8047F8" />
              cartão de débito
            </label>
            <input
              type="radio"
              id="money"
              value="money"
              {...register("payment-options")}
            />
            <label htmlFor="money" tabIndex={0}>
              <Money size={16} color="#8047F8" />
              dinheiro
            </label>
          </RadioGroupControl>
        </Card>
      </FormContainer>
    </UserInformationsContainer>
  );
};
