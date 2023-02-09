import React from 'react'
import styled from 'styled-components';
import media from '../media';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import bg from '../Images/forgotpasswordxb.jpg'

const Container = styled.div`
    width : 100vw;
    height : 100vh;
    display : flex;
    justify-content: center;
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

const ForgotPasswordTitle = styled.span`
    font-size : 2em;
    font-family: 'Poppins', sans-serif;
    color : #d3d0d0;
    margin-bottom : 1%;
    @media ${media.mobile} {
        color : black;
    }
`;

const ForgotPasswordForm = styled.form`
    width : 50%;
    height : 60%;
    background-color : #b4b4b430;
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
    color : #d3d0d0;

    @media ${media.mobile} {
        font-size : 1.1em;
        color : black;
    }
`;

const EmailIcon = styled(EmailOutlinedIcon)`
    border-right : 1px solid black;

    &&{
        width : 8%;
        @media ${media.mobile} {
            width : 10%;
            padding-right : 1%;
            height : 80%;
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
        font-size : 1.1em;
    }
`;

const LoginButton = styled.input`
    width : 40%;
    height : 7%;
    margin-top : 1%;
    margin-bottom : 2%;
    background-color : #e2dfd7fa;
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

const ConfirmationText = styled.i`
  width : fit-content;
  height : fit-content;
  color : white;
  display : none;
  text-align: center;
  margin-bottom : 1%;
  @media ${media.mobile}{
        width : 70%;
        margin-bottom : 7%;
    }
`;

const HomeLink = styled.a`
  color : orange;
  font-weight : 400;
  text-decoration: underline;
  cursor : pointer;
  @media ${media.mobile}{
        color : white;
        font-weight : 500;
        font-size : 1.2em;
    }
`;

const ForgotPassword = () => {

  const displayConfirmationText = e => {
    e.preventDefault();
    document.getElementById("confirmationtext").style.display = "inherit";
  }

  return (
    <Container>
      <ForgotPasswordForm action="?" method="" onSubmit={displayConfirmationText}>
        <ForgotPasswordTitle>Forgot Password</ForgotPasswordTitle>
        <EmailDiv>
          <EmailText>Enter Your Email</EmailText>
          <EmailInputDiv>
            <EmailIcon/><EmailInput type="email" placeholder='Email' required/>
          </EmailInputDiv>
        </EmailDiv>
        <LoginButton type="submit" value="Request Reset Link"/>
        <ConfirmationText id="confirmationtext">Please check your email for the password reset link. The link will only be valid for 15 minutes.</ConfirmationText>
        <HomeLink href="/login">Return To Login Page</HomeLink>
      </ForgotPasswordForm>
    </Container>
  )
}

export default ForgotPassword