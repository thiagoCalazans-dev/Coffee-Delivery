import {
  AdressContainer,
  CartButton,
  HeaderContainer,
  RightNavOptionsContainer,
} from "./styles";
import Logo from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

const shoppingCartCollor = "#C47F17";
const MapPinCollor = "#8047F8";

const city = "São Paulo";
const state = "SP";

export const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <img src={Logo} />
        <RightNavOptionsContainer>
          <AdressContainer>
            <MapPin color={MapPinCollor} size={16} weight="fill" />
            <span> {`${city}, ${state}`}</span>
          </AdressContainer>
          <NavLink to="/checkout">
            <CartButton>
              <ShoppingCart color={shoppingCartCollor} weight="fill" />
            </CartButton>
          </NavLink>
        </RightNavOptionsContainer>
      </nav>
    </HeaderContainer>
  );
};
