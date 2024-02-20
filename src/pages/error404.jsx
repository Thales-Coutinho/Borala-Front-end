import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Button from "../components/button"


const DivStyled = styled.div`
background: #FFFFFF;
border: #51714B solid 1px;
border-radius: 14px;
margin:  0  auto;
padding: 20px;
margin-bottom: 10px;

display: flex;
  align-items: center;
  flex-direction: column;
`


function Error404() {
    const navigate = useNavigate()

    return (
        <DivStyled>
            <h1>pagina não encontrada</h1>


            <img src="/images/error-404.jpeg" alt="Error 404" ></img>
            <Button
                text="voltar"
                click={() => navigate(-1)}
            />
        </DivStyled>
    )
}

export default Error404