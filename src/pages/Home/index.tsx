import { gql, useQuery } from "@apollo/client";
import { Catalog } from "./components/Catalog";
import { IntroSection } from "./components/IntroSection";
import { HomeContainer, ProductsSection } from "./styles";

const GET_PRODUCTS_QUERY = gql`
  query {
    products(first: 20) {
      id
      title
      description
      value
      image {
        url
      }
      categories {
        id
        title
      }
    }
  }
`;

interface Image {
  url: string;
}

interface Category {
  id: string;
  title: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  value: number;
  image: Image;
  categories: Category[];
}

export const Home = () => {
  const { data } = useQuery<{ products: Product[] }>(GET_PRODUCTS_QUERY);

  return (
    <HomeContainer>
      <IntroSection />
      <ProductsSection>
        <h2>Nossos cafés</h2>
        <Catalog data={data!} />
      </ProductsSection>
    </HomeContainer>
  );
};
