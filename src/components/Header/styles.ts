import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 6.5rem;
  padding: 2rem 10rem;

  nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav img {
    width: 5.3rem;
    height: 2.5rem;
  }
`;

export const RightNavOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const AdressContainer = styled.div`
  background-color: ${(props) => props.theme["brand-purple-light"]};
  color: ${(props) => props.theme["brand-purple-dark"]};
  border-radius: 6px;
  height: 2.375rem;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  span {
    font-size: 0.875rem;
    line-height: 1.3;
  }
`;

export const CartButton = styled.div`
  position: relative;
  padding: 0.5rem;
  background-color: ${(props) => props.theme["brand-yellow-light"]};
  border-radius: 6px;
  height: 2.375rem;
  width: 2.375rem;

  display: flex;
  justify-content: center;
  align-items: center;

  > span {
    position: absolute;
    left: calc(100% - 0.625rem);
    bottom: calc(100% - 0.625rem);

    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.25rem;
    height: 1.25rem;
    background: ${(props) => props.theme["brand-yellow-dark"]};
    border-radius: 1000px;
    color: ${(props) => props.theme.white};
    font-size: 0.75rem;
    line-height: 1.3;
  }
`;
