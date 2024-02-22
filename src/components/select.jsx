import styled from "styled-components"

const DivStyled = styled.div`
div{
    display: flex;
  align-items: center;
  margin-bottom:-4px;
  margin-top:5px;
}
select{
    width:300px;
}
label{
    margin-left: 5px
}
`
function Select(props) {

    return (
        <DivStyled>
            <div>
                {props.icon}
                <label>{props.text}</label>

            </div>
            <select
                value={props.value} onChange={event => props.onChange(event.target.value)}
                required={props.required}
            >
                <option value="">{props.placeholder}</option>
                {props.itens.map(item =>
                    <option
                        key={item.id}
                        value={item.id}
                        name={item.name}>
                        {item.name}
                    </option>
                )}
            </select>
        </DivStyled>
    )
}

export default Select