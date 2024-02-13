function Select(props) {

    return (
        <>
            <label>{props.text}</label>
            <br />
            <select>
                <option value="">Selecione uma cidade</option>
                {props.itens.map(item =>
                    <option
                        key={item.id}
                        value={item.id}>
                        {item.nome}
                    </option>
                )}
            </select>
        </>
    )
}

export default Select