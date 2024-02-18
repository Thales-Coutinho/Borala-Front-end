import { styled } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobbalProvider } from "./context/globalContext";
import GlobalStyle from "./globalSyle/globalStyle";

import Search from "./pages/search";
import SucessBooked from "./pages/successBooked";
import Trips from "./pages/trips";
import Error404 from "./pages/error404";
import BottonMenu from "./components/bottomMenu";

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
            <Route path="/ReservadoComSucesso" element={<SucessBooked />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </GlobbalProvider>
        <BottonMenu/>
      </BrowserRouter>
    </Background>
  )
}

export default App