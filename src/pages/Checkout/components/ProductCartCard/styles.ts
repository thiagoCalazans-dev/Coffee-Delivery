import styled from "styled-components";

export const ProductCartContainer = styled.div`
  display: flex;

  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme["base-400"]};
  margin-bottom: 1.5rem;

  img {
    width: 4rem;
    height: 4rem;
  }
`;

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
`;

export const ActionsBox = styled.div`
  gap: 0.5rem;
  display: flex;
`;

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
    cursor: pointer;
    color: ${(props) => props.theme["brand-purple"]};

    &:hover {
      color: ${(props) => props.theme["brand-purple-dark"]};
    }
  }
`;

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

  color: ${(props) => props.theme["brand-purple"]};

  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme["brand-purple-dark"]};
    background-color: ${(props) => props.theme["base-500"]};
  }

  span {
    text-transform: uppercase;
    font-size: 0.75rem;
    line-height: 1.6;
  }
`;

export const Value = styled.span`
  margin-left: 3.125rem;
`;
