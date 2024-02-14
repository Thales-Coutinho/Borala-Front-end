import Button from "../components/button"

function TripCard(props) {
    function confirmReservation() {
        if (confirm("confirmar reserva?") == true) {
            alert("viagem reservada!")
        }
    }

    return (
        <div>
            <h1>{props.trip.nome}</h1>
            <p>nota do motorista: {props.trip.nota}</p>
            <p>horario de partida: {props.trip.hora}</p>
            <p>local de partida: {props.trip.local}</p>
            <p>valor: {props.trip.valor}</p>
            <Button text="reservar viagem" click={confirmReservation} />
        </div>
    )
}

export default TripCard