import { useContext } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";
import { ProductCartCard } from "./components/ProductCartCard";
import { TotalContent } from "./components/TotalContent";
import { UserInformations } from "./components/UserInformations";
import {
  AcceptButton,
  Card,
  CheckoutFormContainer,
  EmptyCartMessage,
  Title,
} from "./styles";
import * as zod from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const orderFormValidationSchema = zod.object({
  "zip-code": zod.string().min(1, "Campo obrigatório"),
  street: zod.string().min(1, "Campo obrigatório"),
  number: zod.number().min(1, "Campo obrigatório"),
  complement: zod.string(),
  neighborhood: zod.string().min(1, "Campo obrigatório"),
  city: zod.string().min(1, "Campo obrigatório"),
  state: zod.string().min(1, "Campo obrigatório"),
  "payment-options": zod.enum(["credit-card", "debit-card", "money"]),
});

export type OrderFormData = zod.infer<typeof orderFormValidationSchema>;

export const Checkout = () => {
  const navigate = useNavigate();

  const { shoppingCart, handleOrder } = useContext(ProductsContext);

  const orderForm = useForm<OrderFormData>({
    resolver: zodResolver(orderFormValidationSchema),
    defaultValues: {} as OrderFormData,
  });

  const { handleSubmit } = orderForm;

  const handleSendOrder = (data: OrderFormData) => {
    handleOrder(data);
    navigate("/success");
  };

  return (
    <CheckoutFormContainer onSubmit={handleSubmit(handleSendOrder)}>
      <FormProvider {...orderForm}>
        <UserInformations />
      </FormProvider>
      <section>
        <Title>Cafés selecionados</Title>
        <Card>
          {shoppingCart.length === 0 ? (
            <EmptyCartMessage>Adcione algo ao seu carrinho</EmptyCartMessage>
          ) : (
            shoppingCart.map((cartItens) => {
              return (
                <ProductCartCard
                  key={cartItens.productid}
                  product={cartItens}
                />
              );
            })
          )}

          <TotalContent />
          <AcceptButton>Confirmar Pedido</AcceptButton>
        </Card>
      </section>
    </CheckoutFormContainer>
  );
};
