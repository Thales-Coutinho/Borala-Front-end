import styled from "styled-components";
import { FaHandPeace } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";



const DivStyled = styled.div`
background: #e0f1da;
border: #51714B solid 1px;
border-radius: 14px;
margin:  0  auto;
padding: 20px;
margin-bottom: 10px;
text-align: center;

display: flex;
  align-items: center;
  flex-direction: column;

  p {
    max-width: 500px;
    word-wrap: break-word;
  }
`

function SucessBooked() {

    return (
        <DivStyled>
            <img src="/images/sucessBooked.png"></img>
            <div>
                <h1>Reserva feita com sucesso ! <FaHandPeace size={30} color="#e6e616" /></h1>
                
            </div>
            <IoIosCheckmarkCircle size={50} />
            <p>
                Agora fique atento as notificações no seu celular ou
                email para poder acompanhar sobre mais informações,
                enquanto isso relaxe e deixe tudo com a gente !
            </p>
        </DivStyled>
    )
}

export default SucessBooked