import { useContext } from "react"
import { Link } from 'react-router-dom'
import { GlobbalContext } from "../context/globalContext"
import styled from "styled-components";

import Button from "../components/button"
import TripCard from "../components/tripCard"
import TripNotFounded from "../components/tripNotFounded"
import Filters from "../components/filters";

const NavStyled = styled.nav`

padding-bottom: 70px;
`

function Trips() {
    const { trips, filters } = useContext(GlobbalContext)
    return (
        <NavStyled>
            {filters.departureCity !== undefined &&
                <Filters/>
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