import Button from "../components/button"
import InputDate from "../components/inputDate"
import Select from "../components/select"

function Search() {

    return (
        <div>
            <br />
            <br />
            <h1>buscar por viagem</h1>
            <br />
            <br />
            <Select text="local de partida"/>
            <br />
            <br />
            <Select text="para onde voce quer ir"/>
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