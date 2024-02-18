import styled from "styled-components";

const DivStyled = styled.div`
div{
    display: flex;
  align-items: center;
  margin-bottom:-4px;
  margin-top:5px;
}
input{
    width:290px;
}
label{
    margin-left: 5px
}
`

function InputDate(props) {
    const currentDate = new Date().toISOString().split('T')[0];

    return (
        <DivStyled>
            <div>
                {props.icon}
                <label>{props.text}</label>

            </div>
            <input type="date" placeholder="dd-mm-yyyy" min={currentDate}
                value={props.value} onChange={event => props.onChange(event.target.value)}
                required={props.required}
            />
        </DivStyled>
    )
}

export default InputDate