import { createGlobalStyle } from "styled-components";
import GlobalState from "./context/GlobalState";
import AppRouter from "./Routes/Router";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";



const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }
`;

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalState>
          <GlobalStyled />
          <ChakraProvider>
            <AppRouter />
          </ChakraProvider>
        </GlobalState>
      </BrowserRouter>
    </>
  );
}

export default App;
