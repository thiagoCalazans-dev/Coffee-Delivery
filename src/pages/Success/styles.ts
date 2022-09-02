import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 5rem 10rem;
`;

export const DetailsContainer = styled.main`
  display: flex;
  flex-direction: column;

  > strong {
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;
    color: ${(color) => color.theme["brand-yellow-dark"]};
  }

  > span {
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme["base-800"]};
  }
`;

export const Card = styled.div`
  margin-top: 2.5rem;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  border: 1px solid transparent;
  background: linear-gradient(${(props) => props.theme.white} 0 0) padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme["brand-yellow"]},
        ${(props) => props.theme["brand-purple"]}
      )
      border-box;
  border-radius: 6px 36px;
`;

export const DetailsCard = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

interface IconContainerProps {
  backgroundIconColor: keyof typeof ICON_CONTAINER_COLOR;
}

const ICON_CONTAINER_COLOR = {
  yellow: "brand-yellow",
  darkYellow: "brand-yellow-dark",
  purple: "brand-purple",
  grey: "base-700",
} as const;

export const IconContainer = styled.span<IconContainerProps>`
  color: ${(props) => props.theme.white};
  background-color: ${(props) =>
    props.theme[ICON_CONTAINER_COLOR[props.backgroundIconColor]]};
  border-radius: 999px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
`;

export const DetailsTextContainer = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    line-height: 1.3;
    color: ${(props) => props.theme["base-700"]};
  }
`;
