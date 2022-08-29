import { gql, useQuery } from "@apollo/client";
import { IntroSection } from "./components/IntroSection";
import {
  CardContainer,
  CatalogContainer,
  HomeContainer,
  ProductsSection,
} from "./styles";

const GET_PRODUCTS_QUERY = gql`
  query {
    products {
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

interface Product {
  id: string;
  title: string;
  description: string;
  value: number;
  image: Image;
  categories: Category[];
}

export const Home = () => {
  const { data } = useQuery<{ products: Product[] }>(GET_PRODUCTS_QUERY);

  console.log(data);

  return (
    <HomeContainer>
      <IntroSection />
      <ProductsSection>
        <h2>Nossos cafés</h2>
        <CatalogContainer>
          {data?.products.map((product) => (
            <CardContainer key={product.id}>
              <>
                <img src={product.image.url} />
                {product.categories.map((category) => {
                  <span key={category.id}>{category.title}</span>;
                })}
                <strong>{product.title}</strong>
                <p>{product.description}</p>
                <span>{product.value}</span>
              </>
            </CardContainer>
          ))}
        </CatalogContainer>
      </ProductsSection>
    </HomeContainer>
  );
};
