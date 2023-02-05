import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import media from '../media';

const Container = styled.div`
  display: flex;
  flex-direction : column;
  background-color: black;
  width : 100%;

  @media ${media.mobile}{
    width : 100vw;
    padding-top : 2%;
  }
`;

const Row = styled.div`
  width : 100%;
  display : flex;
  flex-direction : row;
  justify-content: center;
  margin-bottom : 10px;
  height : fit-content;

  @media ${media.mobile}{
    flex-direction : column;
  }
`;

/**-------------------------------------------------------------------------- Social Div ------------------------------------------------------------------------------------------------------- */

const SocialDiv = styled.div`
  display : flex;
  flex-direction : column;
  flex : 1;
  justify-content: center;
  align-items : center;
  @media ${media.mobile}{
    margin-top : 2%;
    height : 20vh;
    flex : none;
    background : rgba(34, 34, 34, 0.8);
  }
`;

const Name = styled.h2`
  color : white;
  font-size : 1.8em;
  font-family : 'Courier New', Courier, monospace;
  height : fit-content;
  width: fit-content;
  margin: 0;
  margin-bottom : 10px;

  @media ${media.mobile}{
    margin-bottom : 4%;
  }
`;

const SocialIconDiv = styled.div`
  display: flex;
  flex-direction : row;
  width : fit-content;
  justify-content: center;
  align-items: center;
  @media ${media.mobile}{
    width : 100%;
    height : fit-content;
  }
`;

const SocialIcon = styled.a`
  color : white;
  cursor : pointer;
  margin-right : 10px;
  &:hover{
    opacity : 0.8;
  }

  @media ${media.mobile}{
    height : 100%;
    margin : 0 auto;
  }
`;

const FacebookLogo = styled(FacebookIcon)`
  &&{
    width : 2.1em;
    height : 2.1em;
    cursor : pointer;

    @media ${media.mobile}{
      height : 3em;
      width : 3em;
    }
  }
`;

const TwitterLogo = styled(TwitterIcon)`
  &&{
    width : 2.1em;
    height : 2.1em;
    cursor : pointer;
    
    @media ${media.mobile}{
      height : 3em;
      width : 3em;
    }
  }
`;

const InstagramLogo = styled(InstagramIcon)`
  &&{
    width : 2.1em;
    height : 2.1em;
    cursor : pointer;
    
    @media ${media.mobile}{
      height : 3em;
      width : 3em;
    }
  }
`;

/**-------------------------------------------------------------------------- Links ------------------------------------------------------------------------------------------------------- */
const LinksDiv = styled.div`
  flex : 1;
  display : flex;
  flex-direction : column;
  align-items: center;
  justify-content: center;
  font-family : 'Courier New', Courier, monospace;
  margin-top : 15px;
  @media ${media.mobile}{
    flex : none;
    background : rgba(34, 34, 34, 0.8);
    margin-top : 4%;
    height : fit-content;
    width : 100%;
  }
`;
const LinksTitle = styled.h2`
  color : white;
  font-size : 28px;
  height : fit-content;
  margin: 0; //removes margin from around the title (!)
  
  @media ${media.mobile}{
    font-size: 1.8em;
    margin : auto;
    margin-top : 2%;
  }
`;

const LinksButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  @media ${media.mobile}{
    align-items: center;
    height : fit-content;
  }
`;

const Links = styled.a`
  color : white;
  margin-bottom : 10px;
  cursor : pointer;

  &:hover{
    opacity : 0.8;
  }
  @media ${media.mobile}{
    font-size: 1.5em;
    font-weight : 500;
  }
`;

/**-------------------------------------------------------------------------- NewsLetter ------------------------------------------------------------------------------------------------------- */

const NewsletterDiv = styled.div`  
  flex : 1;
  display : flex;
  width : fit-content;
  flex-direction : column;
  align-items: center;
  margin : 0;
  margin-top : 10px;

  @media ${media.mobile}{
    flex : none;
    background : rgba(34, 34, 34, 0.8);
    width : 100%;
    margin-top : 4%;
    margin-bottom : 4%;
  }
`;
const NewsletterText = styled.h3`
  font-family : 'Courier New', Courier, monospace;
  color : white;
  font-size: 24px;
  margin : 10px 0px 20px 0px; //top right bottom left

  @media ${media.mobile}{
    font-size : 1.3em;
  }
`;

const InputContainerDiv = styled.div`
  width : fit-content;
  height : 40px;
  display : flex;
  flex-direction : row;
  justify-content: center;
  border : 2px solid #585858cc;
  border-radius: 2px;
  @media ${media.mobile}{
    height : 3em; 
    margin-bottom : 4%;
  }
`;

const EmailInput = styled.input`
  width : 250px;
  font-size : 14px;

  @media ${media.mobile}{
    width : 18em;
    height : 3em; 
  }
`;

const EmailIconDiv = styled.div`
  height : 100%;
  margin : auto 0;
  display : flex;
  justify-content: center;
  align-items: center;
  @media ${media.mobile}{
    width : 3em;
  }
`;

const Emailicon = styled(SendOutlinedIcon)`
  color : white;
  cursor : pointer;
  padding-left : 2px;
  padding-right : 2px;
  
  &:hover{
    opacity : 0.8;
  }
`;

/**-------------------------------------------------------------------------- Location ------------------------------------------------------------------------------------------------------- */

const LocationDiv = styled.div`  
  flex : 1;
  display : flex;
  flex-direction : column;
  align-items: center;
  justify-content: center;
  @media ${media.mobile}{
    flex : none;
    background : rgba(34, 34, 34, 0.8);
    height : fit-content;
  }
`;

const LocationTitle = styled.h2`
  font-family : 'Courier New', Courier, monospace;
  color : white;
  margin : 15px 0px 10px 0px;  
  font-size : 28px;
  width : fit-content;
  @media ${media.mobile}{
    font-size : 1.8em;
    margin : 2% auto;
  }
`;

const IconsDiv = styled.div`
  display : flex;
  flex-direction : column;
  align-items: center;

  @media ${media.mobile}{
    margin : 1% 0 1% 0;
    width : 100vw;
  }
`;

const PhoneDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom : 2px;
  @media ${media.mobile}{
    margin : 0 auto 2% auto;
    width : fit-content;
  }
`;

const PhoneIcon = styled(PhoneOutlinedIcon)`
  color : white;
  margin-right : 5px;
`;

const PhoneNumber = styled.span`
  color : white;
  @media ${media.mobile}{
    font-size : 1em;
  }
`;

const EmailDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom : 2px;
  @media ${media.mobile}{
    margin : 0 auto 2% auto;
  }
`;

const EmailIcon = styled(EmailOutlinedIcon)`
  color : white;
  margin-right : 5px;
`;

const EmailText = styled.span`
  color : white;
  @media ${media.mobile}{
    font-size : 1em;
  }
`;

const AddressDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom : 2px;
  @media ${media.mobile}{
    margin : 0 auto 2% auto;
    font-size : 1em;
  }
`;

const LocationIcon = styled(LocationOnOutlinedIcon)`
  color : white;
  margin-right : 5px;
`;

const LocationText = styled.span`
  color : white;
  @media ${media.mobile}{
    font-size : 1em;
  }
`;

/**-------------------------------------------------------------------------- Footer ------------------------------------------------------------------------------------------------------- */

const FooterText = styled.span`
  color : #a8a8a8a2;
  font-size: 14px;
  height : fit-content;
  @media ${media.mobile}{
    width : 100%;
    font-size : 0.8em;
    text-align : center;
  }
`;

const Footer = () => {
  return (
    <Container>
      <Row>
        <SocialDiv><Name>Connect With Us</Name>
          <SocialIconDiv>
            <SocialIcon><FacebookLogo/></SocialIcon>
            <SocialIcon><TwitterLogo/></SocialIcon>
            <SocialIcon><InstagramLogo/></SocialIcon>
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
          <InputContainerDiv><EmailInput placeholder='Email'/><EmailIconDiv><Emailicon/></EmailIconDiv></InputContainerDiv>
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