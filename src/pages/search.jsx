import { useContext } from "react"
import { Link } from 'react-router-dom'
import { GlobbalContext } from "../context/globalContext"

import Button from "../components/button"
import InputDate from "../components/inputDate"
import Select from "../components/select"
import apiRest from "../utils/apiRest"

function Search() {
    const { cities, setTrips } = useContext(GlobbalContext)

    function pesquisar(){
        apiRest.get('viagens/')
            .then(response => {
                setTrips(response.data)
            })

    }

    return (
        <div>
            <br />
            <br />
            <h1>buscar por viagem</h1>
            <br />
            <br />
            <Select
                text="local de partida"
                itens={cities}
            />
            <br />
            <br />
            <Select
                text="para onde voce quer ir"
                itens={cities}
            />
            <br />
            <br />
            <InputDate text="data da viagem" />
            <br />
            <br />
            <Link to="/viagensDisponiveis">
                <Button text="pesquisar" click={pesquisar}/>
            </Link>
        </div>
    )
}

export default Search