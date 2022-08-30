import styled from "styled-components";

export const CatalogContainer = styled.div`
  margin-top: 3.375rem;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background-color: ${(props) => props.theme["base-200"]};
  border-radius: 6px 36px;

  width: 16rem;
  height: 19.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: -1.25rem;
  }

  > strong {
    margin-top: 1rem;
    font-family: "Baloo 2";
    font-weight: 700;
    line-height: 1.3;
    font-size: 1.25rem;
    padding: 0 1.25rem;
  }

  > p {
    text-align: center;
    margin-top: 0.5rem;
    color: ${(props) => props.theme["base-600"]};
    font-size: 0.875rem;
    line-height: 1.3;
    padding: 0 1.25rem;
  }
`;

export const Categories = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 0.75rem;
  gap: 0.25rem;

  > span {
    background-color: ${(props) => props.theme["brand-yellow-light"]};
    color: ${(props) => props.theme["brand-yellow-dark"]};
    font-weight: 700;
    line-height: 1.3;
    font-size: 0.625rem;
    padding: 0.25rem 0.5rem;
    text-transform: uppercase;
  }
`;

export const BuyOptions = styled.div`
  width: 100%;
  height: 2.375rem;
  padding: 0 1.5rem 1.25rem 1.5rem;
  margin-top: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Value = styled.div`
  line-height: 1.3;
  color: ${(props) => props.theme["base-700"]};

  > span {
    font-size: 0.875rem;
  }

  > strong {
    font-size: 1.5rem;
    font-family: "Baloo 2";
    font-weight: 800;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 0.5rem;

  > button {
    background-color: ${(props) => props.theme["brand-purple-dark"]};
    padding: 0.5rem;
    border-radius: 6px;

    display: flex;
    align-items: center;
    justify-content: center;
    border: none;

    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme["brand-purple"]};
    }
  }
`;

export const Counter = styled.span`
  background-color: ${(props) => props.theme["base-400"]};
  border-radius: 6px;

  padding: 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  line-height: 1.3;

  button {
    display: flex;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
  }
`;
