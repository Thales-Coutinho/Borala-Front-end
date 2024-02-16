function Select(props) {

    return (
        <div>
            <label>{props.text}</label>
            <br />
            <select
                value={props.value} onChange={event => props.onChange(event.target.value)}
                required={props.required}
            >
                <option value="">{props.placeholder}</option>
                {props.itens.map(item =>
                    <option
                        key={item.id}
                        value={item.id}
                        name={item.nome}>
                        {item.nome}
                    </option>
                )}
            </select>
        </div>
    )
}

export default Select