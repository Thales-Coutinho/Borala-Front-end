import { useContext } from "react";
import { styled } from "styled-components";
import { GlobbalContext } from "../context/globalContext";


const DivStyled = styled.div`
background: #51714b;
color: #FFFFFF;
margin-bottom: 10px;
display: flex;
  align-items: center;
  flex-direction: column;

width:450px;
p{
    margin: 5px;
}
`

function Filters() {
    const { filters } = useContext(GlobbalContext)

  return (
    <DivStyled>
        <p>viagens de: {filters.departureCity}</p>
        <p>Para: {filters.destinationCity}</p>
        <p>no dia:{filters.day}</p>
    </DivStyled>
  )
}

export default Filters