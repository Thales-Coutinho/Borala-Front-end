function InputDate(props) {

    return (
        <div>
            <label>{props.text}</label>
            <br />
            <input type="date" placeholder="dd-mm-yyyy"
                value={props.value} onChange={event => props.onChange(event.target.value)}
                required={props.required}
            />
        </div>
    )
}

export default InputDate