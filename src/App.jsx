import { styled } from "styled-components"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import GlobalStyle from "./components/globalStyle"
import Search from "./pages/search";
import Trips from "./pages/trips";

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
        <Routes>
          <Route path="/" element={<Search/>} />
          <Route path="/viagensDisponiveis" element={<Trips/>} />
        </Routes>
      </BrowserRouter>


    </Background>
  )
}

export default App
