import { useContext } from "react"
import { GlobbalContext } from "../context/globalContext"

import Button from "../components/button"
import InputDate from "../components/inputDate"
import Select from "../components/select"

function Search() {
    const { cities } = useContext(GlobbalContext)

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
            <Button text="pesquisar" />
        </div>
    )
}

export default Search