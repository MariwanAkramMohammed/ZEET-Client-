import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Loginuser } from "../Apis/Api";
import login from "../img/login1.png";
import ErrorPage from "../Components/ErrorPage";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const CurrentUser = useSelector((state) => state.user?.currentUser);
  const Error = useSelector((state) => state.user?.isError);
  const URL = process.env.REACT_APP_API_URL;

  const Nav = useNavigate();
  const Submit = async (e) => {
    e.preventDefault();

    if (email && password) {
      Loginuser(dispatch, { email, password });
    }
  };
  return (
    <Container img={login}>
      <Form onSubmit={Submit}>
        <Lable>Email</Lable>
        <Input
          type="email"
          placeholder="Email"
          name="email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <Lable>Password</Lable>
        <Input
          type="password"
          placeholder="Passowrd"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <LinkButton>
          <Button>Login</Button>
          <ForgLink>Forgot Passowrd .. </ForgLink>
          <ForgLink onClick={() => Nav("/signup")}>
            Create New Account{" "}
          </ForgLink>
        </LinkButton>
      </Form>
      {Error && <ErrorPage />}

    </Container>
  );
};
export default Login;
const Container = styled.div`
  width: 100vw;
  height: 93vh;
  background-size: cover;
  background-position: center;
  background-image: url(${(props) => props.img});
  display: flex;

  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  width: 30%;
  height: 50%;
  background: rgb(211, 244, 249);
  padding: 30px 40px;
  border-bottom: 10px solid #0abc9d;
`;

const Input = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  background: rgb(242, 253, 255);
font-size:16px;
  padding: 6px;
  border-radius: 5px;
  color: gray;
  &:focus {
    background: rgb(230, 255, 251);
  }
`;
const Lable = styled.p`
  font-size: 18px;
  color: gray;
  margin-top: 35px;
`;
const LinkButton = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  font-size:16px;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  width: 50%;
  margin-bottom: 11px;
  padding: 12px 40px;
  font-size: 18px;
  background: #0abc9d;
  border: none;
  color: white;
  transition: all 0.8s;
  cursor: pointer;
  &:hover {
    background: #17d7b6;
  }
`;
const ForgLink = styled.p`
  color: rgba(143, 166, 168, 0.7);
  cursor: pointer;
  margin: 2px;
  // align-self: start;
  transition: all 0.8s;
  font-size:16px;
  &:hover {
    color: rgb(143, 166, 168);
  }
`;
