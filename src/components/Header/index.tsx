import {
  AdressContainer,
  CartButton,
  HeaderContainer,
  RightNavOptionsContainer,
} from "./styles";
import Logo from "../../assets/Logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { ProductsContext } from "../../context/ProductsContext";
import { useContext } from "react";

const shoppingCartCollor = "#C47F17";
const MapPinCollor = "#8047F8";

const city = "São Paulo";
const state = "SP";

export const Header = () => {
  const { shoppingCart, cartQuantity } = useContext(ProductsContext);

  return (
    <HeaderContainer>
      <nav>
        <NavLink to="/">
          <img src={Logo} />
        </NavLink>
        <RightNavOptionsContainer>
          <AdressContainer>
            <MapPin color={MapPinCollor} size={16} weight="fill" />
            <span> {`${city}, ${state}`}</span>
          </AdressContainer>
          <NavLink to="/checkout">
            <CartButton>
              <span>{cartQuantity}</span>
              <ShoppingCart color={shoppingCartCollor} weight="fill" />
            </CartButton>
          </NavLink>
        </RightNavOptionsContainer>
      </nav>
    </HeaderContainer>
  );
};
