import { useContext } from "react"
import { Link } from 'react-router-dom'
import { PiSmileySad } from "react-icons/pi";
import { GlobbalContext } from "../context/globalContext"
import Button from "../components/button"
import TripCard from "../components/tripCard";

function Trips() {
    const { trips } = useContext(GlobbalContext)
    return (
        <>
            {trips.length > 0 ?
                <div>
                    {trips.map(trip =>
                        <TripCard key={trip.id} trip={trip}/>
                    )}
                </div>
                :
                <div>
                    <h1>Desculpe, nenhuma viagem encontrada</h1>
                    <PiSmileySad size={100} />
                    <p> não há nenhuma viagem disponivel para o destino e dia especificado</p>
                </div>
            }
            <br/>
            <Link to="/">
                <Button text="Voltar" />
            </Link>
        </>
    )
}

export default Trips