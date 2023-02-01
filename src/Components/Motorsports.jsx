import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { motorsports } from "../motorsports";

const Container = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;
  width : 100vw;
  overflow : hidden;
`;

const Title = styled.h1`
  color: white;
  margin: 0 auto;
  margin-top: 20px;
  font-size: 48px;
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
`;

const SlideContainer = styled.div`
  height: 100%;
  width: 400vw;
  display: flex;
  flex-direction: row;
  transform : translateX(${(props) => props.slideIndex * -100}vw); 
  transition: all 0.5s ease-in;
  margin-top : 10px;
`;
const Slide = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;

`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SlideTitle = styled.h1`
  color: white;
  font-size: 36px;
`;
const SlideDescription = styled.span`
  color: #d3d1d1;
  font-size : 18px;
  font-weight : 400;
`;

const Right = styled.div`
  flex: 1;
`;
const SlideImage = styled.img`
  height : 600px;
  width : 900px;
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

      <ArrowContainer direction="left" onClick={() => handleClick("left")}>
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

      <ArrowContainer direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardOutlinedIcon />
      </ArrowContainer>
    </Container>
  );
};

export default Motorsports;
