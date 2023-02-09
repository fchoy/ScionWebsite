import React, { useEffect } from 'react'
import styled from 'styled-components';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import bg from '../Images/loginfrs.jpg'
import facebooklogin from '../Images/facebooklogin.png'
import googlelogin from '../Images/googlelogin.jpg'
import media from '../media';

const Container = styled.div`
    width : 100vw;
    height : 100vh;
    display : flex;
    justify-content: center;
    //background : linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url(${bg}); //applies a color linearly in a vertical direction (Does same thing as what is written below)
    background-color : rgba(0,0,0,0.1);
    background-blend-mode: multiply;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    align-items: center;

    @media ${media.mobile} {
        width : 100%;
        margin: 0;
        background-color : rgba(0,0,0,0);
    }
`;

const LoginTitle = styled.span`
    font-size : 2em;
    font-family: 'Poppins', sans-serif;
    color : black;
`;

const LoginForm = styled.form`
    width : 50%;
    height : 70%;
    background-color : #92601e31;
    margin : auto;
    display : flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
    @media ${media.mobile} {
        width : 90%;
        height : 85%;
    }
`;

const UsernameDiv = styled.div`
    width : 40%;
    height : 11%;
    display : flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
    margin-bottom : 2%;
    @media ${media.mobile} {
        width : 70%;
        height : 15%;
        margin-bottom : 7%;
    }
`;

const UsernameText = styled.label`
    align-self : flex-start;
    margin-bottom : 1%;
    font-weight : 500;

    @media ${media.mobile} {
        font-size : 1em;
    }
`;

const UsernameIcon = styled(PersonOutlineOutlinedIcon)`
    border-right : 1px solid black;

    &&{
        width : 8%;
        @media ${media.mobile} {
            width : 10%;
        }
    }
`;

const UsernameInputDiv = styled.div`
    height : 80%;
    width : 100%;
    display : flex;
    flex-direction : row;
    align-items: center;
    justify-content: center;
    background-color: white;
    border : 1px solid black;
`;

const UsernameInput = styled.input`
    height : fit-content;
    border : none;
    outline : none;
    font-size : 1em;
    margin-left : 1%;
    width : 100%;

    &::placeholder{
        text-align: center;
    }
`;

const PasswordDiv = styled.div`
    width : 40%;
    height : 11%;
    display : flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
    margin-bottom : 2%;

    @media ${media.mobile} {
        width : 70%;
        height : 15%;
        margin-bottom : 7%;
    }
`;

const PasswordText = styled.label`
    align-self : flex-start;
    margin-bottom : 1%;
    font-weight : 500;
`;

const PasswordInputDiv = styled.div`
    height : 80%;
    width : 100%;
    display : flex;
    flex-direction : row;
    align-items: center;
    background-color: white;
    border : 1px solid black;
`;

const PasswordIcon = styled(LockOutlinedIcon)`
    border-right : 1px solid black;
    &&{
        width : 8%;
        @media ${media.mobile} {
            width : 10%;
        }
    }
`;

const PasswordInput = styled.input`
    height : fit-content;
    border : none;
    outline : none;
    font-size : 1em;
    margin-left : 1%;
    width : 100%;

    &::placeholder{
        text-align: center;
    }
`;

const CheckboxDiv = styled.div`
    width : 40%;
    height : fit-content;
    margin-bottom : 1%;
    display : flex;
    flex-direction : row;
    align-items: center;

    @media ${media.mobile} {
        width : 70%;
        margin-bottom : 7%;
    }
`;

const Checkbox = styled.input`
  -webkit-transform: scale(1.5); /* Safari and Chrome */
  transform : scale(1.5);
  height : fit-content;
  width : fit-content; 

    &:focus{
        border : 1px solid blue;
    }

    @media ${media.mobile} {
        -webkit-transform: scale(1.9); /* Safari and Chrome */
        transform: scale(1.9);
    }
`;

const CheckboxText = styled.span`
    margin-left : 2%;
    font-size : 1.1em;
    font-weight : 500;
    color : black;
    @media ${media.mobile} {
        margin-left : 5%;
    }
`;

const LoginButton = styled.input`
    width : 40%;
    height : 7%;
    margin-top : 1%;
    margin-bottom : 1%;
    background-color : #f1ad1aea;
    outline : none;
    border : none;
    border-radius: 2px;
    cursor : pointer;
    font-size : 1em;
    
    &:hover {
        opacity : 0.9;
    }

    &:focus{
        border : 2px solid rgba(0,0,0,0.6);
    }

    @media ${media.mobile}{
        width : 70%;
        height : 11%;
        margin-bottom : 7%;
    }
`;

const LinksDiv = styled.div`
    width : 40%;
    display : flex;
    flex-direction : row;
    align-items: center;
    margin-bottom : 2%;
    @media ${media.mobile}{
        width : fit-content;
        flex-direction: column;
    }
`;

const ForgotPasswordDiv = styled.div`
    width : fit-content;
    flex : 1;
    @media ${media.mobile}{
        margin-bottom : 5%;
    }
`;

const ForgotPasswordLink = styled.a`
    width: fit-content;
    font-size : 1.2em;
    font-weight : 500;
    color : #f1ad1aea;
    text-decoration: underline;
    text-decoration-thickness : 2px;   
    &:hover{
        cursor : pointer; 
        opacity : 0.9;
    }

    @media ${media.mobile}{
        font-size : 1.3em;
        color : #ffc23e;
    }
`;

const SignupLinkDiv = styled.div`
    display : flex;
    flex-direction: row;
    height : fit-content;
`;

const SignupLink = styled.a`
    margin : auto 0;
    width: fit-content;
    font-size : 1.2em;
    font-weight : 500;
    color : #f1ad1aea;
    text-decoration: underline;
    text-decoration-thickness : 2px;      
    
    &:hover{
        cursor : pointer;
        opacity : 0.9;
    }

    @media ${media.mobile}{
        font-size : 1.3em;
        color : #ffc23e;
    }
`;

const BreakDiv = styled.div`
    width : 45%;
    height : fit-content;
    display : flex;
    flex-direction : row;
    align-items: center;
    justify-content: center;
    margin-bottom : 2%;

    @media ${media.mobile}{
        width : 75%;
        margin-bottom : 5%;
    }
`;

const Divider = styled.div`
    width : 45%;
    height : 1px;
    border-bottom : 1px solid white;
    margin : auto 0;
`;

const OrText = styled.span`
    width : 5%;
    flex: 1;
    text-align: center;
    font-size : 1.1em;
    color : white;
    @media ${media.mobile}{
        width : 10%;
    }
`;

const OtherLoginDiv = styled.div`
    width : 40%;
    height: fit-content;
    display : flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
    @media ${media.mobile}{
        width : 70%;
    }
`;

const GoogleLogin = styled.a`
    width : fit-content;
    height : fit-content;
    text-align : center;
    @media ${media.mobile}{
        margin-bottom : 5%;
    }
`;

const GoogleImage = styled.img`
    width : 95%;
    max-width : 95%;
    height : 80%;
    max-height : 80%;
    border-radius: 6px;
    &:hover{
        cursor : pointer;
        opacity : 0.9;
    }

    @media ${media.mobile}{
        width : 100vw;
        max-width : 90%;
        height : 91%;
        max-height : 91%;
    }
`;
const FacebookLogin = styled.a`
    width : fit-content;
    height : fit-content;
    text-align : center;
    @media ${media.mobile}{
        margin-bottom : 3%;
    }
`;

const FacebookImage = styled.img`
    width: 85%;
    max-width : 85%;
    height : 100%;
    max-height : 100%;
    border-radius: 6px;

    @media ${media.mobile}{
        width : 100vw;
        max-width : 90%;
    }
    
    &:hover{
        cursor : pointer;
        opacity : 0.9;
    }
`;
const Login = () => {

    useEffect(() => {
        document.title = "Scion | Login";
    }, []);

  return (
    <Container>
        <LoginForm action="?" method="" onSubmit="">
            <LoginTitle>Login</LoginTitle>
            <UsernameDiv>
                <UsernameText for="userinput">Username</UsernameText>
                <UsernameInputDiv>
                    <UsernameIcon/><UsernameInput name="userinput" type="input" placeholder='Username' required/>
                </UsernameInputDiv>
            </UsernameDiv>
            <PasswordDiv>
                <PasswordText for="pwinput">Password</PasswordText>
                <PasswordInputDiv>                
                    <PasswordIcon/><PasswordInput name="pwinput" type="password" placeholder='Password' required/>
                </PasswordInputDiv>
            </PasswordDiv>
            <CheckboxDiv>
                <Checkbox type="checkbox"/><CheckboxText>Remember Me</CheckboxText>
            </CheckboxDiv>
            <LoginButton type="submit" value="Sign In"/>
            <LinksDiv>
                <ForgotPasswordDiv>
                    <ForgotPasswordLink href="/forgotpassword">Forgot Password?</ForgotPasswordLink>
                </ForgotPasswordDiv>
                <SignupLinkDiv>
                    <SignupLink href="/signup">Don't Have an Account?</SignupLink>
                </SignupLinkDiv>
            </LinksDiv>
            <BreakDiv>
                <Divider/>
                <OrText>or</OrText>
                <Divider/>
            </BreakDiv>
            <OtherLoginDiv>
                <GoogleLogin><GoogleImage src={googlelogin}/></GoogleLogin>
                <FacebookLogin><FacebookImage src={facebooklogin}/></FacebookLogin>
            </OtherLoginDiv>
        </LoginForm>
    </Container>
  )
}

export default Login