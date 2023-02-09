import React from "react";
import styled from "styled-components";
import bg from "../Images/signuptc.jpg";
import media from "../media";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color : rgba(143, 111, 62, 0.15);
  background-blend-mode: multiply;
  background-image: url(${bg});
  background-repeat: no-repeat;
  align-items: center;

  @media ${media.mobile} {
    width: 100%;
    margin: 0;
    background-color: rgba(0, 0, 0, 0);
  }
`;

const LoginTitle = styled.span`
    font-size : 2em;
    font-family: 'Poppins', sans-serif;
    color : black;
`;

const LoginDiv = styled.div`
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
        height : 90%;
    }
`;

const EmailDiv = styled.div`
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

const EmailText = styled.span`
    align-self : flex-start;
    margin-bottom : 1%;
    font-weight : 500;

    @media ${media.mobile} {
        font-size : 1em;
    }
`;

const EmailIcon = styled(EmailOutlinedIcon)`
    border-right : 1px solid black;

    &&{
        width : 8%;
        @media ${media.mobile} {
            width : 10%;
        }
    }
`;

const EmailInputDiv = styled.div`
    height : 80%;
    width : 100%;
    display : flex;
    flex-direction : row;
    align-items: center;
    justify-content: center;
    background-color: white;
    border : 1px solid black;
`;

const EmailInput = styled.input`
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

/*--------------------------------------------------------------------------------Username Div------------------------------------------------------------------------------------------*/

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

const UsernameText = styled.span`
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

const PasswordText = styled.span`
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

const SignupButton = styled.button`
    width : 40%;
    height : 7%;
    margin-top : 1%;
    margin-bottom : 1%;
    background-color : #a1a09ff2;
    outline : none;
    border : none;
    border-radius: 2px;
    cursor : pointer;
    font-size : 1em;
    
    &:hover {
        opacity : 0.9;
    }

    &:focus{
        border : 2px solid rgba(12, 12, 12, 0.6);
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
    color : black;
    text-decoration: underline;
    text-decoration-thickness : 2px;      
    
    &:hover{
        cursor : pointer;
        color : #ffffff;
        opacity : 0.9;
    }

    @media ${media.mobile}{
        font-size : 1.3em;
        color : black;
    }
`;

const Signup = () => {
  return (
    <Container>
      <LoginDiv>
        <LoginTitle>Register</LoginTitle>
        <EmailDiv>
          <EmailText>Enter Your Email</EmailText>
          <EmailInputDiv>
            <EmailIcon/>
            <EmailInput type="input" placeholder="Email" />
          </EmailInputDiv>
        </EmailDiv>
        <UsernameDiv>
          <UsernameText>Create a Username</UsernameText>
          <UsernameInputDiv>
            <UsernameIcon />
            <UsernameInput type="input" placeholder="Username" />
          </UsernameInputDiv>
        </UsernameDiv>
        <PasswordDiv>
          <PasswordText>Create Password</PasswordText>
          <PasswordInputDiv>
            <PasswordIcon />
            <PasswordInput type="password" placeholder="Password" />
          </PasswordInputDiv>
        </PasswordDiv>
        <PasswordDiv>
          <PasswordText>Confirm Password</PasswordText>
          <PasswordInputDiv>
            <PasswordIcon />
            <PasswordInput type="password" placeholder="Password" />
          </PasswordInputDiv>
        </PasswordDiv>
        <CheckboxDiv>
          <Checkbox type="checkbox"/><CheckboxText>Check to Signup for our Newsletter</CheckboxText>
        </CheckboxDiv>
        <CheckboxDiv>
          <Checkbox type="checkbox"/><CheckboxText>Check here to indicate that you have read and agreed to our terms and conditions.</CheckboxText>
        </CheckboxDiv>
        <SignupButton type="button">Register</SignupButton>
        <LinksDiv>
          <SignupLinkDiv>
            <SignupLink href="/login">Already Have an Account?</SignupLink>
          </SignupLinkDiv>
        </LinksDiv>
      </LoginDiv>
    </Container>
  );
};

export default Signup;
