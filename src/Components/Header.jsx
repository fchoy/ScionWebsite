import React from 'react'
import styled from 'styled-components'
import scionlogo from '../Images/scionlogo.png'
import media from '../media';
import History from './History';
import Motorsports from './Motorsports';
import Vehicles from './Vehicles';

const Container = styled.div`
    width : 100%;
    height : 20%;
    background-color: black;
    display : flex;
    flex-direction : row;

    @media ${media.mobile} {
        flex-direction : column;
        padding-top : 20px;
        height : 100vh;
    }
`;

const LogoDiv = styled.div`
    width : 25%;
    display : flex;
    align-items : center;
    @media ${media.mobile} {
        width : 100%;
        height : 20%;
    }
`;
const Logo = styled.img`
    width : 200px;
    height : 100px;
    margin : auto 0;
    margin-left : 20px;
    @media ${media.mobile} {
        width : 50%;
        height : 80%;
        margin : auto;
    }
`;

const Navbar = styled.nav`
    display : flex;
    flex-direction: row;
    width : 49%;
    justify-content: center;
    @media ${media.mobile} {
        flex-direction : column;
        margin : 0 auto;
        width : 100%;
    }
`;

const NavbarItem = styled.button`
    border : none;
    background-color: black;
    color : white;
    height : fit-content;
    margin : auto 0;
    font-size : 24px;
    font-family: 'Poppins', sans-serif;
    margin-right : 100px;

    &:hover{
        cursor : pointer;
        text-decoration: underline;
    }

    @media ${media.mobile} {
        width : 100%;
        margin : 0 auto;
        opacity : 1;
        font-size : 3em;
        margin-top : 20px;

        &:last-child{
            margin-bottom : 20px;
        }

        &:hover{
            text-decoration: none;
        }
    }
`;
const LoginDiv = styled.div`
    width : 24%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    text-align: center;
    margin : auto 0;

    @media ${media.mobile} {
        flex-direction : column;
        width : fit-content;
        align-items: center;
        margin : 0;
        width : 100%;
        justify-content: center;
    }
`;

const LoginItem = styled.a`
    border : none;
    background-color: black;
    color : white;
    height : fit-content;
    margin : auto 0;
    font-size : 24px;
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    margin-right : 2%;

    &:hover{
        cursor : pointer;
        text-decoration: underline;
    }

    @media ${media.mobile} {
        width : 100%;
        margin : 0 auto;
        opacity : 1;
        font-size : 3em;
        margin : auto 10px;
        margin-bottom : 20px;

        &.headerDivider{ //on mobile hide the dash
            display : none;
        }

        &:hover{
            text-decoration: none;
        }
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
            <LoginItem href="/login">Login</LoginItem>
            <LoginItem className="headerDivider" style={{"cursor":"default", fontSize: "27px", textDecoration : "none"}}>|</LoginItem>
            <LoginItem href="/signup">Signup</LoginItem>
        </LoginDiv>
    </Container>
  )
}

export default Header