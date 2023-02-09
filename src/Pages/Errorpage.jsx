import React from "react";
import { useRouteError } from "react-router";
import styled from "styled-components";
import media from "../media"

const Container = styled.div`
    padding : 0;
    margin : 0;
    height : 100vh;
    width : 100vw;
    display : flex;
    align-items : center;
    justify-content: center;
`;

const ErrorDiv = styled.div`
    width : 50%;
    height : 50%;
    display : flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${media.mobile} {
        width : 60%;
        height : 60%;
    }
    
`;

const ErrorTitle = styled.h1``;

const ErrorText = styled.p`
    margin-bottom : 2%;

    @media ${media.mobile} {
        text-align: center;
        margin-bottom : 7%;
    }
`;

const ErrorStatus = styled.i`
    margin-bottom : 2%;

    @media ${media.mobile} {
        text-align: center;
        margin-bottom : 7%;
    }
`;

const ErrorLink = styled.a`
    text-decoration : none;
    font-size : 1.1em;
    font-weight : 500;
    color : red;
    cursor : pointer;

    &:hover{
        opacity : 0.5;
    }

    @media ${media.mobile} {
        font-size : 1.5em;
    }
`;

const Errorpage = () => {
    //log error message to console
    const error = useRouteError();
    console.error(error);

    //display some error page that the user can see
    return(
        <Container>
            <ErrorDiv>
                <ErrorTitle>Uh oh!</ErrorTitle>
                <ErrorText>An unexpected error has occurred. Please return to the previous page.</ErrorText>
                <ErrorStatus>{error.statusText || error.message}</ErrorStatus>
                <ErrorLink href="/">Go Back</ErrorLink>
            </ErrorDiv>
        </Container>
    );
};

export default Errorpage;
