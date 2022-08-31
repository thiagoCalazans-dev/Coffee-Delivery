import styled from "styled-components";

export const CheckoutContainer = styled.main`
  padding: 0 10rem;
  margin-top: 2.5rem;
  display: flex;
  gap: 2rem;
`;



export const CartInformations = styled.section``;

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
  gap: 1rem;
  border-radius: 6px 44px;
`;

export const ProductCart = styled.div`
  display:flex;

  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${props => props.theme["base-400"]};


  img {
    width: 4rem;
    height: 4rem;
  }

   `

export const MiddleContent = styled.div`
 margin-left: 1.125rem;
 display: flex;
 flex-direction: column;
 gap: 0.5rem;

 strong { 
  font-style: normal;
font-weight: 400;
  line-height: 130%;
 }
`

export const ActionsBox = styled.div`
  gap :0.5rem;
display: flex;
`

export const Counter = styled.span`
width: 4.5rem;
height: 2rem;
  background-color: ${(props) => props.theme["base-400"]};
  border-radius: 6px;

  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  line-height: 1.3;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
  }
  `


  export const RemoveButton = styled.button`
  background-color: ${(props) => props.theme["base-400"]};
  border-radius: 6px;
  border: none;   
height: 2rem;

padding: 0.5rem;


  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  line-height: 0;

  span {
    text-transform: uppercase;
  font-size: 0.75rem;
line-height: 1.6;
  }

`;

export const Value = styled.span`
margin-left: 3.125rem
`