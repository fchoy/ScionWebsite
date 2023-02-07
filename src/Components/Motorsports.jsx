import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { motorsports } from "../motorsports";
import media from '../media';


const Container = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  width : 100vw;
  overflow : hidden;

  @media ${media.mobile} {
    position : static;
    width : 100%;
    height : 100vh;
    padding-bottom : 4%;
  }
`;

const Title = styled.h1`
  color: white;
  margin: 0 auto;
  margin-top: 20px;
  font-size: 48px;
  @media ${media.mobile} {
    width : fit-content;
    margin : 5% auto;
  }

`;

const ArrowContainer = styled.div`
  position: absolute;
  left: ${(props) => props.direction === "left" && "20px"};
  right: ${(props) => props.direction === "right" && "20px"};
  width: 60px;
  height: 60px;
  background-color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin : auto;
  top : 50%;
  z-index : 1;

  &:hover {
    opacity: 0.7;
  }

  @media ${media.mobile} {
    position : static;
    width : 100%;
    border-radius: 0;
    margin : 0;
    height : 9vh;

    &.topArrowContainer{
      //margin-bottom : 2%;
    }

    &.bottomArrowContainer {
      //margin-top : 2%;
    }
  }

`;

const SlideContainer = styled.div`
  height: 100%;
  width: 400vw;
  display: flex;
  flex-direction: row;
  transform : translateX(${(props) => props.slideIndex * -100}vw); 
  transition: all 0.5s ease-in;
  margin-top : 10px;

  @media ${media.mobile} {
    margin : 0; 
    height : 100%;  
  }
`;
const Slide = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;

  @media ${media.mobile} {
    height : 100%;
    margin : auto; 
    flex-direction : column;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media ${media.mobile} {
    width : fit-content;
    height : fit-content;
    margin : 0; 
    flex-direction : column; 
    text-align: center;
  }
`;
const SlideTitle = styled.h1`
  color: white;
  font-size: 36px;

  @media ${media.mobile} {
    font-size : 1.5em;
    width : 100%;
    text-align: center;
    height : fit-content;
  }
`;
const SlideDescription = styled.span`
  color: #d3d1d1;
  font-size : 18px;
  font-weight : 400;

  @media ${media.mobile} {
    font-size : 1.1em;
    width : 90vw;
    height : 100%;
    margin-bottom : 1%;
    display : flex;
    justify-content: center;
    align-items: center;
  }
`;

const Right = styled.div`
  flex: 1;

  @media ${media.mobile} {
    margin : 2% 0 4% 0;
  }
`;
const SlideImage = styled.img`
  height : 600px;
  width : 900px;

  @media ${media.mobile} {
    width : 100%;
    height : 40vh;
  }
`;

const Motorsports = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if(direction === "left"){
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3);
    }
    else if(direction === "right"){
      setSlideIndex(slideIndex < 3? slideIndex + 1 : 0)
    }
  }

  return (
    <Container>
      <Title>Motorsports</Title>

      <ArrowContainer className="topArrowContainer" direction="left" onClick={() => handleClick("left")}>
        <ArrowBackOutlinedIcon />
      </ArrowContainer>

      <SlideContainer slideIndex={slideIndex}>
        {motorsports.map((item) => (
          <Slide>
            <Left>
              <SlideTitle>{item.title}</SlideTitle>
              <SlideDescription>{item.description}</SlideDescription>
            </Left>
            <Right>
              <SlideImage src={item.img} />
            </Right>
          </Slide>
        ))}
      </SlideContainer>

      <ArrowContainer className="bottomArrowContainer" direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardOutlinedIcon />
      </ArrowContainer>

    </Container>
  );
};

export default Motorsports;
