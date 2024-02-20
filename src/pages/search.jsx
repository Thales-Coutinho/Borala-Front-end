import { useContext, useState } from "react"
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"
import { SlLocationPin, SlCalender, SlMagnifier } from "react-icons/sl";

import { GlobbalContext } from "../context/globalContext"
import apiRest from "../utils/apiRest"

import Button from "../components/button"
import InputDate from "../components/inputDate"
import Select from "../components/select"


const FormStyled = styled.form`
background: #FFFFFF;
border: #51714B solid 1px;
border-radius: 14px;
margin:  auto;
padding: 20px;

display: flex;
  align-items: center;
  justify-content: center;
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
            <h1>Buscar Carona</h1>
            <Select
                text="Local de partida" icon={<SlLocationPin />} placeholder="selecione uma cidade"
                itens={cities}
                value={departureCity} onChange={value => setDepartureCity(value)}
                required={true}
            />
            <Select
                text="Para onde você vai" icon={<SlLocationPin />} placeholder="selecione uma cidade"
                itens={cities}
                value={destinationCity} onChange={value => setDestinationCity(value)}
                required={true}
            />
            <InputDate
                text="Data da viagem" icon={<SlCalender />} 
                value={day} onChange={value => setDay(value)}
                required={true}
            />
            <Button text="Pesquisar" icon={<SlMagnifier />} />
        </FormStyled>
    )
}

export default Search