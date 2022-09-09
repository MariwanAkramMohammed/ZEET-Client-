import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const SingInCart = ({ show }) => {
  return (
    <Container show={show}>
      <Wrap>
        <Links className="man" to="/login">
          Log In
        </Links>
        <Links to="/signup">Sign Up</Links>
      </Wrap>
    </Container>
  );
};
export default SingInCart;
const Container = styled.div`
  width: 18vw;
  height: 24vh;
  display: flex;

  justify-content: center;
  align-items: center;
  position: absolute;
  right: 30px;
  top: 40px;
  // background: #d2eef1;
  border-bottom: 10px solid  #0abc9d;
  background: rgba(208, 238, 241, 0.7);
  z-index: 2;
  // border-radius: 0px 0px 20px 20px;
  transition: all 1s;
  transform: ${(props) =>
    props.show ? "translatey(-0px)" : "translatey(-190px)"};
`;
const Wrap = styled.div`
  // border-radius: 0px 0px 20px 20px;
  width: 90%;
  background: #d2eef1;
  height: 87%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const Links = styled(Link)`
  color: rgb(107, 207, 177);
  text-align: center;
  width: 80%;
  border-bottom: 3px solid rgba(255, 255, 255, 0.3);
  padding: 7px;
  // border-radius: 15px;
  // background: rgb(219, 238, 240);
  cursor: pointer;
  transition: all 1s;
  text-decoration: none;
  font-weight: 500;
  font-size: 20px;
  &:hover {
    background: rgba(255, 255, 255, 0.5);
    color: rgb(65, 161, 132);
  }
`;
