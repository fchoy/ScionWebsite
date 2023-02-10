import React from 'react'
import styled from 'styled-components'
import ScionHistoryImage from '../Images/scionhistoryimage.webp'
import media from '../media';

const Container = styled.div`
    background-color : black;
    height : 810px;
    display : flex;
    flex-direction : row;

    @media ${media.mobile}{
        height : 100%;
        width : 100%;
        flex-direction : column-reverse;
        padding-bottom : 2.2em;
    }

`;
const Left = styled.div`
    flex : 1;
    display : flex;
    flex-direction: column;
    @media ${media.mobile}{
        height : 100%;
        width : 100%;
        justify-content: center;
        align-items: center;
    }
`;
const HistoryTitle = styled.h1`
    color : white;
    font-size: 48px;
    padding-left : 50px;
    padding-top : 50px;
    @media ${media.mobile}{
        padding : 0;
        font-size : 2.2em;
    }
`;
const HistoryText = styled.span`
    height : 400px;
    width : 800px;
    margin-left : 50px;
    font-size: 18px;
    color : white;
    line-height: 1.8;
    font-family: 'Cabin', sans-serif;

    @media ${media.mobile}{
        height : fit-content;
        font-size : 1.1em;
        width : fit-content;
        margin : 0 2%;
        line-height: 1.4;
    }
`;
const Right = styled.div`
    flex : 1;
    display : flex;
    flex-direction : column;
    justify-content: center;

    @media ${media.mobile}{
        height : 100%;
        padding-top : 5%
    }
`;
const HistoryImage = styled.img`
    
`;


const History = ({historyRef}) => {
  return (
    <Container ref={historyRef}>
        <Left>
            <HistoryTitle>Scion</HistoryTitle>
            <HistoryText>
                The development of the Scion brand started in 1999 when Toyota decided to launch "Project Genesis", which was their plan to market towards a more youthful clientelle.<br/><br/>
                In February of 2004, the rollout of the Scion brand began all across the United States with the xA and the xB, the tC in 2005, and the xD in 2006. The Scion iQ debuted in October of 2011, and the FR-S in 2013.<br/><br/>
                Scion's marketing strategy centered on an idea called "pure price", meaning that the price that you see on the window sticker is the price you pay. No additional fees or taxes.<br/><br/>
                Upgrades straight from the factory also allowed Scion owners to customize their Scion automobiles to their liking from dealership without needing to do the install themselves.<br/><br/>
                The Scion brand unfortunately was shut down in 2016 due to declining sales and that the average Scion buyer no longer fit in with the "youthful" philosophy that Scion targetted. 
                
            </HistoryText>
        </Left>
        <Right>
            <HistoryImage src={ScionHistoryImage}/>
            {/*<HistoryImage src={ScionHistoryImage2} style={{objectFit: "contain", height : "380px"}}/>*/}
        </Right>
    </Container>
    
  )
}

export default History