import styled from "styled-components";
import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import MarkEmailUnreadOutlinedIcon from "@mui/icons-material/MarkEmailUnreadOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
const Footer = () => {
  return (
    <Container>
      <Left>
        <Title>ZEET SHOP</Title>
        <Desc>
          you can find your favorite clothes with us and we have the best deal
          and we share your thoughts about our team and you get your ordered
          clothes at the right place and less cost and time
        </Desc>
        <Social>
          <FacebookOutlinedIcon style={{ fontSize: 23, color: "white" }} />
          <p>ZEETSHOP</p>
        </Social>
      </Left>
      <Center>
        <Links>SOME RELATIVE LINKS</Links>
        <ul>
          <li>Men Fashion</li>
          <li>Women Fashion</li>
          <li>Weekly Fashion</li>
          <li>Monthly Fashion</li>
          <li>New Product</li>
          <li>Newest Style Fashion</li>
        </ul>
      </Center>
      <Right>
        <Links>Contact Us</Links>
        <ul>
          <li>
            <PhoneOutlinedIcon
              style={{ color: "white", fontSize: 23, marginRight: 10 }}
            />
            +945 770 234 3355
          </li>
          <li>
            <MarkEmailUnreadOutlinedIcon
              style={{ color: "white", fontSize: 23, marginRight: 10 }}
            />
            ZeetShop@gmail.com
          </li>
          <li>
            <FmdGoodOutlinedIcon
              style={{ color: "white", fontSize: 23, marginRight: 10 }}
            />
            Sulaimanyah:Salm Street
          </li>
        </ul>
      </Right>
    </Container>
  );
};
export default Footer;
const Container = styled.div`
  padding: 20px 20px;
  background: #0e5145;
  width: 100vw;
  height: 40vh;
  margin-top: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
const Title = styled.h1`
  color: white;
`;
const Desc = styled.p`
  color: #8dc9bc;
  font-size: 16px;
`;
const Center = styled.div`
  flex: 1;
  ul {
    list-style: none;
  }
  li {
    text-align: start;
    font-size: 16px;
    padding: 5px 0px;
    color: #8dc9bc;
  }
`;

const Right = styled.div`
  flex: 1;
  ul {
    list-style: none;
  }
  li {
    font-size: 16px;
    text-align: start;
    padding: 5px 0px;
    color: #8dc9bc;
  }
`;
const Social = styled.div`
  display: flex;
margin-top:20px;
  justify-content: flex-start;
  align-items: center;
  p {
    font-size: 18px;
    color: white;
    margin-left: 10px;
  }
`;
const Links = styled.h3`
  padding-left: 30px;
  color: white;
`;
