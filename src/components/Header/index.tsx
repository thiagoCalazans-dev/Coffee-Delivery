import { HeaderContainer, RightNavOptionsContainer } from "./styles";
import Logo from "../../assets/Logo.svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <img src={Logo} />
        <RightNavOptionsContainer>
          <div>locale</div>
          <div>cart</div>
        </RightNavOptionsContainer>
      </nav>
    </HeaderContainer>
  );
};
