import { styled } from "styled-components";

const ButtonStyled = styled.button`
display: flex;
  margin: auto;
  width: 120px;
  height: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 14px;
  border: #51714B solid 1px;
  font-size: 12px;
  line-height: 15px;
  font-weight: 600;
  background-color: #51714B;
  color: #FFFFFF;
  text-decoration: none;
`

function Button(props) {

  return (
    <ButtonStyled
      onClick={props.click}>
      {props.text}
    </ButtonStyled>
  )
}

export default Button