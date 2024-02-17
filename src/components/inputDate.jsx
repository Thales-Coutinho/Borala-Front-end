function InputDate(props) {
    const currentDate = new Date().toISOString().split('T')[0];

    return (
        <div>
            <label>{props.text}</label>
            <br />
            <input type="date" placeholder="dd-mm-yyyy" min={currentDate}
                value={props.value} onChange={event => props.onChange(event.target.value)}
                required={props.required}
            />
        </div>
    )
}

export default InputDate