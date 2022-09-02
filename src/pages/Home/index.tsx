import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { ProductCard } from "./components/ProductCard";
import { IntroSection } from "./components/IntroSection";
import { CatalogContainer, HomeContainer, ProductsSection } from "./styles";

export const Home = () => {
  const { productList } = useContext(ProductsContext);

  return (
    <HomeContainer>
      <IntroSection />
      <ProductsSection>
        <h2>Nossos cafés</h2>
        <CatalogContainer>
          {productList?.products.map((product) => (
            <ProductCard product={product} />
          ))}
        </CatalogContainer>
      </ProductsSection>
    </HomeContainer>
  );
};
