import styled from "styled-components";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Register } from "../Apis/Api";
import login from "../img/login1.png";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const Nav = useNavigate();
  const dispatch = useDispatch();
  const submit = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("your password is not matched");
    } else {
      Register(dispatch, { email, password });
    }
  };
  return (
    <Container img={login}>
      <Form onSubmit={submit}>
        <Sep>
          <Con>
            <Lable>First Name</Lable>
            <Input type="text" placeholder="firt name" required />
          </Con>
          <Con position={"right"}>
            <Lable>Last Name</Lable>
            <Input type="text" placeholder="last name" required />
          </Con>
        </Sep>
        <Lable>User Name</Lable>
        <Input
          type="email"
          placeholder="username"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <Lable>Password</Lable>
        <Input
          type="password"
          placeholder="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <Lable>Confirm Password</Lable>
        <Input
          type="password"
          placeholder="confirm"
          required
          onChange={(e) => setConfirm(e.target.value)}
        />
        <LinkButton>
          <Button>Sign-Up</Button>
          <ForgLink onClick={() => Nav("/login")}>
            I have an acount already
          </ForgLink>
        </LinkButton>
      </Form>
    </Container>
  );
};
export default SignUp;

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
  width: 50%;
  height: 80%;
  background: rgb(211, 244, 249);
  padding: 30px 40px;
  border-bottom: 10px solid #0abc9d;
`;

const Sep = styled.div`
  width: 100%;
  display: flex;
`;

const Con = styled.div`
  width: 45%;

  margin-left: ${(props) => props.position === "right" && "auto"};
`;
const Input = styled.input`
  width: 100%;
  height: 30px;
  font-size:16px;
  border: none;
  background: rgb(242, 253, 255);
  border: none;
  padding: 6px;
  border-radius: 5px;
  color: gray;
  &::placeholder {
    opacity: 0.3;
  }
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
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  width: 50%;
  margin-bottom: 3px;
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
  margin-bottom: 25px;
  // margin-bottom: 15px;
  // align-self: start;
  font-size:16px;
  transition: all 0.8s;
  &:hover {
    color: rgb(143, 166, 168);
  }
`;
