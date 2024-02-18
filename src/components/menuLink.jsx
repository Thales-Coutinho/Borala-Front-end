import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const DivStyled = styled.div.attrs(props => ({
    style: {
      color: '#eaeee9',
      backgroundColor: props['$currentPage'] ? '#394e35' : '#51714b',
      fontSize: '0.9rem',
      width: '83px',
      height: '50px',
      paddingTop: '10px',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
  }))``;

function MenuLink(props) {
    const location = useLocation().pathname;

    return (
        <Link to={props.to} style={{ textDecoration: 'none' }}>
            <DivStyled $currentPage={location === props.to}>
                {props.icon}
                {props.name}
            </DivStyled>
        </Link>
    );
}

export default MenuLink;
