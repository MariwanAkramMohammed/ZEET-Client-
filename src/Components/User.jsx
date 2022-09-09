import React from "react";
import styled from "styled-components";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logout } from "../Redux/userSlice";
const User = () => {
  const Nav = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <Container>
      <Wrap>
        <Right>
          <Title>
            <PersonPinIcon style={{ color: "#0abc9d", fontSize: 130 }} />
          </Title>
          <DescEr>{currentUser?.email}</DescEr>
          <Botton className="boom" onClick={() => dispatch(Logout())}>
            LogOut
          </Botton>
        </Right>
      </Wrap>
    </Container>
  );
};
export default User;
const Container = styled.div`
  width: 100%;
  height: 100%;

  z-index: 3;
  margin-top: 20%;
  position: absolute;
  top: 55px;
  backdrop-filter: blur(12px);
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
  // background: rgba(211, 231, 228, 0.406);
`;

const Wrap = styled.div`
  width: 25vw;
  height: 55vh;
  background: rgb(239, 245, 244);
  display: flex;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 39px 5px rgba(143, 166, 168, 0.2);
  border: 7px solid #abd6cf2f;
`;
const Left = styled.div`
  flex: 1.5;
  height: 100%;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  object-fit: cover;
`;
const Image = styled.img`
  height: 85%;
  width: 100%;
  opacity: 0.4;
`;

const Right = styled.div`
  flex: 3;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  flex: 1;
  color: rgbA(150, 184, 192, 0.6);
  display: flex;
  font-size: 50px;
  align-items: center;
  justify-content: center;
`;
const DescEr = styled.h2`
  flex: 1;
  font-size: 22px;
  color: rgb(82, 200, 155);
  display: flex;
  align-items: FLEX-START;
  justify-content: center;
  letter-spacing: 2px;
`;
const Botton = styled.button`
  flex: 1;
  width: 30%;
  margin: 60px;
  justify-self: flex-end;
  display: flex;
  letter-spacing: 2px;
  font-size: 16px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  // background: none;
  cursor: pointer;
  border: none;
  color: rgb(150, 184, 192);
  // background:red;
  border-radius: 20px;
  padding: 3px 8px;
  transition: all 0.4s;
  background: rgb(220, 233, 236);
  &:hover {
    color: rgb(131, 152, 157);
    background: rgb(204, 228, 216);
  }
`;
