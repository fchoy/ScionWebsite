import React from "react";
import styled from "styled-components";
import scionxa from "../Images/scionxa.jpg";
import scionxb from "../Images/scionxb.webp";
import sciontc from "../Images/sciontc.jpg";
import scionxd from "../Images/scionxd.webp";
import scioniq from "../Images/scioniq.png";
import scionfrs from "../Images/scionfrs.png";

const Container = styled.div`
  background-color: black;
  height: 950px;
  display: flex;
  flex-direction: column;
`;

const LineupTitle = styled.h1`
  font-size: 48px;
  color: white;
  background-color: black;
  margin: 0 auto;
  padding-top: 20px;
`;

const VehicleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: fit-content;
  height: fit-content;
  margin: 0 auto;
`;

const VehicleContainerRow = styled.div`
  height : 300px;
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const VehicleImageDiv = styled.div`
  height : 300px;
  width: 425px;
  margin-right: 40px;
  position : relative;

  &:hover {
    cursor: pointer;
  }

  &:hover #vehicleimage {
    opacity : 0.5
  }

  &:hover #text {
    opacity : 1;
  }
`;

const VehicleImage = styled.img`
  height: 300px;
  width: 425px;
  position : absolute;
  margin : 0;
  padding : 0;
  left: 0;
  top : 0;
`;

const VehicleImageText = styled.h1`
  font-size: 20px;
  height: fit-content;
  width : fit-content;
  color: white;
  margin : 0;
  padding : 0;
  opacity : 0;
  position : absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Lineup = () => {
  return (
    <Container>
      <LineupTitle>Vehicles</LineupTitle>
      <VehicleContainer>

        <VehicleContainerRow>
          <VehicleImageDiv>
            <VehicleImage id="vehicleimage" src={scionxa}/>
            <VehicleImageText id="text">Scion xA</VehicleImageText>
          </VehicleImageDiv>
          <VehicleImageDiv>
            <VehicleImage id="vehicleimage" src={scionxb}/>
            <VehicleImageText id="text">Scion xB</VehicleImageText>          
          </VehicleImageDiv>
          <VehicleImageDiv>
            <VehicleImage id="vehicleimage" src={scionxd}/>
            <VehicleImageText id="text">Scion xD</VehicleImageText>          
          </VehicleImageDiv>
        </VehicleContainerRow>
        <VehicleContainerRow>
          <VehicleImageDiv>
            <VehicleImage id="vehicleimage" src={scioniq}/>
            <VehicleImageText id="text">Scion iQ</VehicleImageText>
          </VehicleImageDiv>
          <VehicleImageDiv>
            <VehicleImage id="vehicleimage" src={sciontc}/>
            <VehicleImageText id="text">Scion tC</VehicleImageText>          
          </VehicleImageDiv>
          <VehicleImageDiv>
            <VehicleImage id="vehicleimage" src={scionfrs}/>
            <VehicleImageText id="text">Scion FR-S</VehicleImageText>          
          </VehicleImageDiv>
        </VehicleContainerRow>

      </VehicleContainer>
    </Container>
  );
};

export default Lineup;
