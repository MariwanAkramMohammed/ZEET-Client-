import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import error from "../img/error.png";
import { EmptyError } from "../Redux/userSlice";
const ErrorPage = () => {
  const Error = useSelector((state) => state.user?.isError);
  const disptch = useDispatch();
  // console.log(JSON.stringify(Error));
  return (
    <Container>
      <Wrap>
        <Left>
          <Image src={error} />
        </Left>
        <Right>
          <Title>' OOPS '</Title>
          <DescEr>{Error && JSON.stringify(Error)}</DescEr>
          <Botton onClick={() => disptch(EmptyError())}>Try Again</Botton>
        </Right>
      </Wrap>
    </Container>
  );
};
export default ErrorPage;
const Container = styled.div`
  width: 100vw;
  height: 93vh;

  z-index: 1;
  position: absolute;
  top: 55px;
  backdrop-filter: blur(2px);
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(211, 231, 228, 0.406);
`;

const Wrap = styled.div`
  width: 60vw;
  height: 40vh;
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
  justify-self: flex-end;
  display: flex;
  letter-spacing: 2px;
  font-size: 16px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  background: none;
  cursor: pointer;
  border: none;
  color: rgb(150, 184, 192);
`;
