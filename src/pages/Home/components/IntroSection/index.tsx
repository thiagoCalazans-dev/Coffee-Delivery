import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import {
  HighlightsContainer,
  IconContainer,
  IntroSectionContainer,
} from "./styles";
import Hero from "../../../../assets/HeroImage.svg";

const iconColor = "#FFFFFF";

export const IntroSection = () => {
  return (
    <IntroSectionContainer>
      <aside>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <footer>
          <HighlightsContainer>
            <IconContainer backgroundIconColor="darkYellow">
              <ShoppingCart weight="fill" color={iconColor} />
            </IconContainer>
            Compra simples e segura
          </HighlightsContainer>
          <HighlightsContainer>
            <IconContainer backgroundIconColor="grey">
              <Package weight="fill" color={iconColor} />
            </IconContainer>
            Embalagem mantém o café intacto
          </HighlightsContainer>
          <HighlightsContainer>
            <IconContainer backgroundIconColor="yellow">
              <Timer weight="fill" color={iconColor} />
            </IconContainer>
            Entrega rápida e rastreada
          </HighlightsContainer>
          <HighlightsContainer>
            <IconContainer backgroundIconColor="purple">
              <Coffee weight="fill" color={iconColor} />
            </IconContainer>
            O café chega fresquinho até você
          </HighlightsContainer>
        </footer>
      </aside>
      <img
        src={Hero}
        alt="a cup of coffee, starbucks style, with coffe beans and powder around it."
      />
    </IntroSectionContainer>
  );
};
