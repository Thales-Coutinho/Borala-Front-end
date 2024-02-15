import { useContext, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { GlobbalContext } from "../context/globalContext"

import Button from "../components/button"
import InputDate from "../components/inputDate"
import Select from "../components/select"
import apiRest from "../utils/apiRest"

function Search() {
    const navigate = useNavigate()
    const { cities, setTrips, setfilters } = useContext(GlobbalContext)

    const [departureCity, setDepartureCity] = useState('')
    const [destinationCity, setDestinationCity] = useState('')
    const [day, setDay] = useState('')

    function search() {
        apiRest.get('viagens/')
            .then(response => {
                setTrips(response.data)
            })

            setfilters({
                departureCity: departureCity,
                destinationCity: destinationCity,
                day: day,
            })

            navigate("/viagensDisponiveis")

    }

    return (
        <form onSubmit={search}>
            <br />
            <br />
            <h1>buscar por viagem</h1>
            <br />
            <br />
            <Select
                text="local de partida" placeholder="selecione uma cidade"
                itens={cities}
                value={departureCity} onChange={value => setDepartureCity(value)}
                required={true}
            />
            <br />
            <br />
            <Select
                text="para onde voce quer ir" placeholder="selecione uma cidade"
                itens={cities}
                value={destinationCity} onChange={value => setDestinationCity(value)}
                required={true}
            />
            <br />
            <br />
            <InputDate
                text="data da viagem"
                value={day} onChange={value => setDay(value)}
                required={true}
            />
            <br />
            <date-input></date-input>
            <br />
            <Button text="pesquisar" />
        </form>
    )
}

export default Search