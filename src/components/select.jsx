function Select(props) {

    return (
        <>
            <label>{props.text}</label>
            <br/>
            <select>
            <option value="">Selecione uma cidade</option>
            </select>
        </>
    )
}

export default Select