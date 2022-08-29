import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./components/Router";
import { client } from "./lib/apollo";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <ApolloProvider client={client}>
          <Router />
        </ApolloProvider>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}
