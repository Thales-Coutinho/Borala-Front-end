import { useContext, useState } from "react"
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"

import { GlobbalContext } from "../context/globalContext"
import apiRest from "../utils/apiRest"

import Button from "../components/button"
import InputDate from "../components/inputDate"
import Select from "../components/select"


const FormStyled = styled.form`
background: #FFFFFF;
border: #51714B solid 1px;
border-radius: 14px;
margin:  0  auto;
padding: 20px;

display: flex;
  align-items: center;
  flex-direction: column;


  div > * {
  margin: 0 0 10px;
}
`


function Search() {
    const navigate = useNavigate()
    const { cities, setTrips, filters, setfilters } = useContext(GlobbalContext)

    const [departureCity, setDepartureCity] = useState('')
    const [destinationCity, setDestinationCity] = useState('')
    const [day, setDay] = useState('')

    function search() {

        setfilters({
            departureCity: departureCity,
            destinationCity: destinationCity,
            day: day,
        })

        apiRest.get('viagens/', {
            params: filters,
        })
            .then(response => {
                setTrips(response.data)
            })

        navigate("/viagensDisponiveis")

    }

    return (
        <FormStyled onSubmit={search}>
            <h1>buscar por viagem</h1>
            <Select
                text="local de partida" placeholder="selecione uma cidade"
                itens={cities}
                value={departureCity} onChange={value => setDepartureCity(value)}
                required={true}
            />
            <Select
                text="para onde voce quer ir" placeholder="selecione uma cidade"
                itens={cities}
                value={destinationCity} onChange={value => setDestinationCity(value)}
                required={true}
            />
            <InputDate
                text="data da viagem"
                value={day} onChange={value => setDay(value)}
                required={true}
            />
            <Button text="pesquisar" />
        </FormStyled>
    )
}

export default Search