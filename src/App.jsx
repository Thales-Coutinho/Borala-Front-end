import { styled } from "styled-components"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./globalSyle/globalStyle"
import Search from "./pages/search";
import Error404 from "./pages/error404";
import Trips from "./pages/trips";
import { GlobbalProvider } from "./context/globalContext";

const Background = styled.div`
background-color: #D8D7D7;
min-height: 100vh;

display: flex;
  align-items: center;
  flex-direction: column;
`

function App() {

  return (
    <Background>
      <GlobalStyle />
      <BrowserRouter>
        <GlobbalProvider>
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/viagensDisponiveis" element={<Trips />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </GlobbalProvider>
      </BrowserRouter>
    </Background>
  )
}

export default App