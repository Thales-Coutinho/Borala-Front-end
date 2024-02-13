import { styled } from "styled-components"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./components/globalStyle"
import Search from "./pages/search";
import Trips from "./pages/trips";
import { GlobbalProvider } from "./context/globalContext";

const Background = styled.div`
background-color: #D8D7D7;
width: 100%;
min-height: 100vh;
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
          </Routes>
        </GlobbalProvider>
      </BrowserRouter>
    </Background>
  )
}

export default App