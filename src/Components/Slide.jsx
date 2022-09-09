import { useState } from "react";
import React from "react";
import styled from "styled-components";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Link, useNavigate } from "react-router-dom";
import guy from "../img/guy.png";
import login from "../img/login.png";

const slidem = [1, 2];
const Slider = () => {
  const [index, setIndex] = useState(0);
  const Nav = useNavigate();
  const count = (type) => {
    if (type === "left") {
      index > 0 ? setIndex(index - 1) : setIndex(1);
    } else {
      index < 1 ? setIndex(index + 1) : setIndex(0);
    }
  };

  return (
    <COantainer>
      <Arrow type="left" onClick={() => count("left")}>
        <KeyboardArrowLeftIcon style={{ fontSize: 40 }} />
      </Arrow>

      <Wrap index={index}>
        {slidem.map((item, index) => (
          <Slide key={index}>
            {item == 1 ? (
              <Wrapped>
                <Left>
                  <Image src={login} />
                </Left>
                <Right>
                  <Title>REGISTER</Title>
                  <Desc>
                    If you do not have an account yet <br />
                    You should create an account first <br />
                    If you want to buy products
                  </Desc>
                  <RegLink to="/signup">Click here for registering ...</RegLink>
                </Right>
              </Wrapped>
            ) : (
              <Wrapped>
                <Left>
                  <Image src={guy} />
                </Left>
                <Right>
                  <Title>FIND YOUR FAVORITE</Title>
                  <Title color="gray">PRODUCTS</Title>

                  <Button onClick={() => Nav("/products/men")}>Shop Now</Button>
                </Right>
              </Wrapped>
            )}
          </Slide>
        ))}
      </Wrap>
      <Arrow type="right" onClick={() => count("right")}>
        <KeyboardArrowRightIcon style={{ fontSize: 40 }} />
      </Arrow>
    </COantainer>
  );
};
export default Slider;
const COantainer = styled.div`
  width: 100%;
  height: 80vh;
  overflow: hidden;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  position: relative;
`;

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  transform: translateX(${(props) => props.index * -100}vw);
  transition: all 1.5s ease;

  z-index: 1;
`;
const RegLink = styled(Link)`
  color: rgb(177, 177, 177);
  font-size: 20px;
  margin-top: 60px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: rgb(93, 93, 93);
  }
`;
const Slide = styled.div`
  min-width: 100vw;
  height: 80vh;
  magrin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  // background: blue;
`;

const Wrapped = styled.div`
  background: white;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  gap: 50px;
  // box-shadow: 5px 0px 40px 0px rgba(0, 0, 0, 0.1);
`;
const Left = styled.div`
  flex: 1.3;
  height: 100%;
  object-fit: cover;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  background-position: 100px 200px;
`;
const Right = styled.div`
  flex: 1.5;
  height: 100%;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  text-align: center;
  font-size: 80px;
  font-weight: bold;
  color: ${(props) => (props.color === "gray" ? "gray" : " #0abc9d")};
  margin: 12px;
`;

const Desc = styled.p`
  font-size: 30px;
  font-weight: bold;

  color: rgba(159, 159, 159, 0.7);
`;
const Button = styled.button`
  font-size: 30px;
  padding: 10px 20px;
  margin-top: 60px;
  border-radius: 5px;
  border: none;
  // box-shadow: 5px 0px 40px 0px rgba(10, 188, 157, 0.5);
  margin-bottom: 20px;
  background: #09aa8f;
  color: white;
  cursor: pointer;
`;

const Arrow = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;

  left: ${(props) => props.type === "left" && "15px"};
  right: ${(props) => props.type === "right" && "15px"};
  color: rgb(10, 188, 157);
  z-index: 2;
  cursor: pointer;
`;
