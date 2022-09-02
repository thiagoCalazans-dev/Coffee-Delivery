import styled from "styled-components";

export const CheckoutContainer = styled.main`
  padding: 0 10rem;
  margin-top: 2.5rem;
  display: flex;
  gap: 2rem;
`;

export const Title = styled.h2`
  font-family: "Baloo 2";
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.3;
  margin-bottom: 1rem;
`;

export const Card = styled.div`
  width: 28rem;
  background-color: ${(props) => props.theme["base-200"]};
  padding: 2.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  border-radius: 6px 44px;
`;

export const AcceptButton = styled.button`
  margin-top: 1.5rem;
  background-color: ${(props) => props.theme["brand-yellow"]};
  padding: 0.75rem;
  text-align: center;
  color: ${(props) => props.theme.white};
  font-weight: 700;
  line-height: 1.6;
  font-size: 0.875rem;
  text-transform: uppercase;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme["brand-yellow-dark"]};
  }
`;
