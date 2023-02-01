import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

const Container = styled.div`
  display: flex;
  flex-direction : column;
  background-color: black;
  width : 100%;
`;

const Row = styled.div`
  width : 100%;
  display : flex;
  flex-direction : row;
  justify-content: center;
  margin-bottom : 10px;
`;

const SocialDiv = styled.div`
  display : flex;
  flex-direction : column;
  flex : 1;
  justify-content: center;
  align-items : center;
`;
const Name = styled.h2`
  color : white;
  font-size : 36px;
  font-family : 'Courier New', Courier, monospace;
  height : fit-content;
  width: fit-content;
  margin: 0;
  margin-bottom : 10px;
`;
const SocialIconDiv = styled.div`
  display: flex;
  flex-direction : row;
  width : fit-content;
  justify-content: center;
  align-items: center;
`;
const SocialIcon = styled.a`
  color : white;
  cursor : pointer;
  &:hover{
    opacity : 0.8;
  }
`;

const LinksDiv = styled.div`
  flex : 1;
  display : flex;
  flex-direction : column;
  align-items: center;
  justify-content: center;
  font-family : 'Courier New', Courier, monospace;
  margin-top : 15px;
`;
const LinksTitle = styled.h2`
  color : white;
  font-size : 28px;
  height : fit-content;
  margin: 0; //removes margin from around the title (!)
`;

const LinksButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
`;

const Links = styled.a`
  color : white;
  padding-bottom : 10px;
  cursor : pointer;

  &:hover{
    opacity : 0.8;
  }
`;

const NewsletterDiv = styled.div`  
  flex : 1;
  display : flex;
  width : fit-content;
  flex-direction : column;
  align-items: center;
  margin : 0;
  margin-top : 10px;
`;
const NewsletterText = styled.h3`
  font-family : 'Courier New', Courier, monospace;
  color : white;
  font-size: 24px;
  margin : 10px 0px 20px 0px; //top right bottom left
`;

const InputContainerDiv = styled.div`
  width : fit-content;
  height : 30px;
  display : flex;
  flex-direction : row;
  justify-content: center;
  border : 2px solid #585858cc;
  border-radius: 2px;
`;

const EmailInput = styled.input`
  width : 200px;
  font-size : 14px;
`;

const Emailicon = styled(SendOutlinedIcon)`
  color : white;
  margin : auto 0;
  cursor : pointer;
  padding-left : 2px;
  padding-right : 2px;
  &:hover{
    opacity : 0.8;
  }
`;

const LocationDiv = styled.div`  
  flex : 1;
  display : flex;
  flex-direction : column;
  align-items: center;
  justify-content: center;
`;

const LocationTitle = styled.h2`
  font-family : 'Courier New', Courier, monospace;
  color : white;
  margin : 15px 0px 10px 0px;  
  font-size : 28px;
  width : fit-content;
`;

const IconsDiv = styled.div`
  display : flex;
  flex-direction : column;
  align-items: center;
`;

const PhoneDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom : 2px;
`;

const PhoneIcon = styled(PhoneOutlinedIcon)`
  color : white;
  padding-right : 5px;
`;

const PhoneNumber = styled.span`
  color : white;
`;

const EmailDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom : 2px;
`;

const EmailIcon = styled(EmailOutlinedIcon)`
  color : white;
  padding-right : 5px;
`;

const EmailText = styled.span`
  color : white;
`;

const AddressDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom : 2px;
`;

const LocationIcon = styled(LocationOnOutlinedIcon)`
  color : white;
  padding-right : 5px;
`;

const LocationText = styled.span`
  color : white;
`;

const FooterText = styled.span`
  color : #a8a8a8a2;
  font-size: 14px;
  height : fit-content;
`;

const Footer = () => {
  return (
    <Container>
      <Row>
        <SocialDiv><Name>Scion</Name>
          <SocialIconDiv>
            <SocialIcon><FacebookIcon style={{width: "50px", height : "50px", paddingRight : "10px", cursor: "pointer"}}/></SocialIcon>
            <SocialIcon><TwitterIcon style={{width: "50px", height : "50px", paddingRight : "10px", cursor: "pointer"}}/></SocialIcon>
            <SocialIcon><InstagramIcon style={{width: "50px", height : "50px", paddingRight : "10px", cursor: "pointer"}}/></SocialIcon>
          </SocialIconDiv>
        </SocialDiv>
        <LinksDiv>
          <LinksTitle>Useful Links</LinksTitle>
          <LinksButtonDiv>
            <Links>FAQ</Links>
            <Links>Privacy Policy</Links>
            <Links>Find a Store Near You</Links>
          </LinksButtonDiv>
        </LinksDiv>
        <NewsletterDiv>
          <NewsletterText>Stay Up To Date With Scion</NewsletterText>
          <InputContainerDiv><EmailInput placeholder='Email'/><Emailicon/></InputContainerDiv>
        </NewsletterDiv>
        <LocationDiv>
          <LocationTitle>Contact</LocationTitle>
          <IconsDiv>
            <PhoneDiv><PhoneIcon/><PhoneNumber>(408) 984-1234</PhoneNumber></PhoneDiv>
            <EmailDiv><EmailIcon/><EmailText>stevenscreekscion@toyota.com</EmailText></EmailDiv>
            <AddressDiv><LocationIcon/><LocationText>4202 Stevens Creek Blvd, San Jose, CA 95129</LocationText></AddressDiv>
          </IconsDiv>
        </LocationDiv>
      </Row>
      <Row>
        <FooterText>2023 Felix Choy © Developed Using React and Styled Components</FooterText>
      </Row>
    </Container>
  )
}

export default Footer