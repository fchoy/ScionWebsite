import React from 'react'
import styled from 'styled-components'
import scionlogo from '../Images/scionlogo.png'

const Container = styled.div`
    width : 100%;
    height : 125px;
    background-color: black;
    display : flex;
    flex-direction : row;
`;

const LogoDiv = styled.div`
    width : 25%;
    display : flex;
    align-items : center;
`;
const Logo = styled.img`
    width : 200px;
    height : 100px;
    margin : auto 0;
    margin-left : 20px;
`;

const Navbar = styled.nav`
    display : flex;
    flex-direction: row;
    width : 49%;
    justify-content: center;
`;
const NavbarItem = styled.button`
    border : none;
    background-color: black;
    color : white;
    height : fit-content;
    margin : auto 0;
    font-size : 24px;
    font-family: 'Poppins', sans-serif;
;
    margin-right : 100px;

    &:hover{
        cursor : pointer;
        text-decoration: underline;
    }
`;
const LoginDiv = styled.div`
    width : 24%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin : auto 0;
`;

const LoginItem = styled.button`
    border : none;
    background-color: black;
    color : white;
    height : fit-content;
    margin : auto 0;
    font-size : 24px;
    font-family: 'Poppins', sans-serif;
    &:hover{
        cursor : pointer;
        text-decoration: underline;
    }
`;



const Header = () => {
  return (
    <Container>
        <LogoDiv>
            <Logo src={scionlogo}/>
        </LogoDiv>
        <Navbar>
            <NavbarItem>History</NavbarItem>
            <NavbarItem>Vehicles</NavbarItem>
            <NavbarItem>Motorsports</NavbarItem>
        </Navbar>
        <LoginDiv>
            <LoginItem>Signup</LoginItem>
            <LoginItem style={{"cursor":"default", fontSize: "27px"}}>|</LoginItem>
            <LoginItem>Login</LoginItem>
        </LoginDiv>
    </Container>
  )
}

export default Header