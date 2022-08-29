import styled from "styled-components";

export const IntroSectionContainer = styled.section`
  height: 34rem;
  width: 100%;
  padding: 0 10rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  h1 {
    font-family: "Baloo 2";
    font-size: 3rem;
    line-height: 1.3;
    font-weight: 800;
  }

  p {
    color: ${(props) => props.theme["base-800"]};
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.3;
    margin-top: 1rem;
    font-stretch: 100;
  }

  footer {
    display: grid;
    grid-template-columns: auto auto;
    margin-top: 4.125rem;
    grid-column-gap: 2.5rem;
    grid-row-gap: 1.25rem;
  }
`;

export const HighlightsContainer = styled.div`
  color: ${(props) => props.theme["base-700"]};
  line-height: 1.3;

  display: flex;
  justify-content: start;
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
  background-color: ${(props) =>
    props.theme[ICON_CONTAINER_COLOR[props.backgroundIconColor]]};
  border-radius: 999px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
