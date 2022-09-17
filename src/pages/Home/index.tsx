import { useContext } from "react";
import { ProductsContext } from "../../context/ProductsContext";
import { ProductCard } from "./components/ProductCard";
import { IntroSection } from "./components/IntroSection";
import { CatalogContainer, ProductsSection } from "./styles";

export const Home = () => {
  const { productList } = useContext(ProductsContext);

  return (
    <main>
      <IntroSection />
      <ProductsSection>
        <h2>Nossos cafés</h2>
        <CatalogContainer>
          {productList?.products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </CatalogContainer>
      </ProductsSection>
    </main>
  );
};
