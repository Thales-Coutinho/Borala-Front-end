import styled from "styled-components"

const DivStyled = styled.div`
background: #FFFFFF;
border: #51714B solid 1px;
border-radius: 14px;
margin: auto;
padding: 20px;
margin-bottom: 10px;
text-align: center;
width:400px;


display: flex;
  align-items: center;
  flex-direction: column;
`
function TripNotFounded() {

    return (
        <DivStyled>
            <h1>Desculpe, nenhuma viagem encontrada...</h1>
            <img src="/images/tripNotFounded.png"></img>
            <p>Não ha nenhuma viagem disponivel para o destino e dia especificado</p>
        </DivStyled>
    )
}

export default TripNotFounded