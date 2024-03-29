import { useNavigate } from "react-router-dom";
import styled from "styled-components"
import { FaRegUserCircle, FaStar } from "react-icons/fa";

import Button from "../components/button"


const DivStyled = styled.div`
background: #FFFFFF;
border: #51714B solid 1px;
border-radius: 14px;
margin:  0  auto;
padding: 20px;
margin-bottom: 10px;
max-width: 350px;

div{
    display: flex;
  align-items: center;
  padding: 0;
}
h1{
    margin-left:10px;
    font-size: 20px;
}
p{
    font-size: 15px;
}
span{
    margin-left: 20px;
}

`

function TripCard(props) {
    const navigate = useNavigate()
    const formatMoney = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' })
    const [hour, minute] = props.trip.hour.split(':');

    function confirmReservation() {
        if (confirm("confirmar reserva?") == true) {
            navigate("/ReservadoComSucesso")
        }
    }

    return (
        <DivStyled>
            <div>
                <FaRegUserCircle size={25} />
                <h1>{props.trip.name}</h1>
                <span>
                    {props.trip.score}
                    <FaStar color="#ffc700" />
                </span>
            </div>
            <p>valor: <span><b>{formatMoney.format(props.trip.price)}</b></span></p>
            <p>horario de partida: <b>{hour}:{minute}</b></p>
            <p>local de partida: <b>{props.trip.local}</b></p>
            <Button text="reservar viagem" click={confirmReservation} />
        </DivStyled>
    )
}

export default TripCard