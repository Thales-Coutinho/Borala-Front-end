import { useContext } from "react"
import { Link } from 'react-router-dom'
import { GlobbalContext } from "../context/globalContext"
import styled from "styled-components";

import Button from "../components/button"
import TripCard from "../components/tripCard"
import TripNotFounded from "../components/tripNotFounded"

const NavStyled = styled.nav`

padding-bottom: 70px;
`

function Trips() {
    const { trips, filters } = useContext(GlobbalContext)
    return (
        <NavStyled>
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
            <Link to="/" style={{ textDecoration: 'none' }}>
                <Button text="Voltar" />
            </Link>
        </NavStyled>
    )
}

export default Trips