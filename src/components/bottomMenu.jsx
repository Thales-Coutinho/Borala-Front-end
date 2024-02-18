import styled from "styled-components";
import { FaCarAlt, FaSearch, FaUserCircle, FaCommentDots, FaShoppingBag } from "react-icons/fa";
import MenuLink from "./menuLink"


const NavStyled = styled.nav`
       display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
`

function BottonMenu() {
    return (
        <NavStyled>
            <MenuLink to="/" name="Procurar" icon={<FaSearch />} />
            <MenuLink to="/erro" name="Propor" icon={<FaCarAlt />} />
            <MenuLink to="/erro" name="Viagens" icon={<FaShoppingBag />} />
            <MenuLink to="/erro" name="Mensagens" icon={<FaCommentDots />} />
            <MenuLink to="/erro" name="Perfil" icon={<FaUserCircle />} />
        </NavStyled>
    )
}

export default BottonMenu