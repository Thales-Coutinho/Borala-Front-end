import { useContext } from "react"
import { Link } from 'react-router-dom'
import { GlobbalContext } from "../context/globalContext"

import Button from "../components/button"
import TripCard from "../components/tripCard";
import TripNotFounded from "../components/tripNotFounded";

function Trips() {
    const { trips, filters } = useContext(GlobbalContext)
    return (
        <>
            {filters.departureCity !== undefined &&
                <h1>viagens de: {filters.departureCity} Para: {filters.destinationCity} no dia:{filters.day}</h1>
            }

            {trips.length > 0 ?
                <div>
                    {trips.map(trip =>
                        <TripCard key={trip.id} trip={trip} />
                    )}
                </div>
                :
                <TripNotFounded/>
            }
            
            <br />
            <Link to="/">
                <Button text="Voltar" />
            </Link>
        </>
    )
}

export default Trips