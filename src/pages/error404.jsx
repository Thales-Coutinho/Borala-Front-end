import { useNavigate } from "react-router-dom";
import { TbError404 } from "react-icons/tb";

import Button from "../components/button"

function Error404() {
    const navigate = useNavigate()

    return (
        <>
            <h1>pagina não encontrada</h1>
            <TbError404 size={100} />
            <br/>
            <Button
                text="voltar"
                click={() => navigate(-1)}
            />
        </>
    )
}

export default Error404