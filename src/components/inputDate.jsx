function InputDate(props) {

    return (
        <>
            <label>{props.text}</label>
            <br />
            <input type="date" placeholder="dd-mm-yyyy"
                value={props.value} onChange={event => props.onChange(event.target.value)}
                required={props.required}
            />
        </>
    )
}

export default InputDate