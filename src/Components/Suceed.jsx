import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SendIcon from "@mui/icons-material/Send";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
const URL = process.env.REACT_APP_API_URL;
const SucceedPage = () => {
  const [comment, setComment] = useState(null);
  const [range, setRange] = useState(0);
  const User = useSelector((state) => state.user.currentUser);
  const NewNav = useNavigate();

  const sendComment = async (e) => {
    e.preventDefault();
    const data = {
      comment,
      range,
      userId: User?._id,
      userEmail: User?.email,
    };

    const res = await fetch(`${URL}/comment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token: `breare ${User?.token}`,
      },
      body: JSON.stringify(data),
    });

    NewNav("/");
  };

  return (
    <Container>
      <Wrap>
        {/* <Con>Your order has made successfully</Con> */}
        <TitleThank>
          <DescEr>Thanks For Choosing Us</DescEr>
          <DescEr type="comment">you want to leave a comment</DescEr>
        </TitleThank>
        <ComentCon>
          <Form onSubmit={sendComment}>
            <TextCon
              placeholder="Write something.."
              onChange={(e) => setComment(e.target.value)}
            />
            <div class="slidecontainer">
              <input
                type="range"
                min="0"
                max="5"
                class="slider"
                id="myRange"
                onChange={(e) => setRange(e.target.value)}
              />
            </div>
            <ConRange>
              {range}
              <StarIcon style={{ color: "#04AA6D", fontSize: 30 }} />
            </ConRange>
            <Send>
              <Button disabled={comment ? false : true}>
                SEND
                <SendIcon style={{ fontSize: 26 }} />
              </Button>
            </Send>
          </Form>
        </ComentCon>
        <Links to="/">get back to home</Links>
      </Wrap>
    </Container>
  );
};
export default SucceedPage;

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
  width: 80vw;
  height: 70vh;
  background: rgb(239, 245, 244);
  display: flex;
  overflow: hidden;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 5px 39px 5px rgba(143, 166, 168, 0.2);
  border: 7px solid #abd6cf2f;
  border-bottom: 5px solid #0abc9d;
`;
const Con = styled.h2`
  display: flex;
  width: 100%;
  // margin: 0;
  justify-content: center;
  align-items: center;
  flex: 0.8;
  background: #0abc9d;
  color: rgba(8, 87, 65, 0.6);
`;
const ConRange = styled.div`
  width: 55px;
  display: flex;
  font-weight: 700;
  color: #04aa6d;
  justify-content: space-between;
  align-items: center;
`;
const TitleThank = styled.div`
  flex: 2.5;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;

  // color: #0abc9d;
`;
const DescEr = styled.h1`
  flex: 1;
  font-size: ${(props) => (props.type ? 25 : 55)}px;

  margin-top: ${(props) => !props.type && 26}px;
  // margin: ${(props) => (props.type ? 10 : 16)}px;
  // margin: ${(props) => props.type && 16}px;
  color: ${(props) =>
    props.type ? "rgb(126, 148, 151, 0.9);" : "rgb(82, 200, 155)"};

  display: flex;
  align-items: ${(props) => (props.type ? "flex-end" : "center")};
  justify-content: center;
  letter-spacing: 2px;
`;
const ComentCon = styled.div`
  flex: 3;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 100%;
`;
const TextCon = styled.textarea`
  background: rgba(8, 87, 65, 0.051);
  max-width: 90%;
  min-width: 90%;
  min-height: 30%;
  max-height: 70%;
  font-size: 16px;
  border: none;
  flex: 1.5;
  border-radius: 20px;
  padding: 20px;
`;

const Send = styled.div`
  flex: 1.3;

  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  width: 23%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 12px;
  font-weight: bold;
  background: #0abc9d;
  border: none;
  font-size: 18px;
  color: white;
  transition: all 0.8s;
  cursor: pointer;
  &:hover {
    background: #17d7b6;
  }
`;
const Links = styled(Link)`
  display: flex;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  flex: 0.4;
  font-size: 16px;
  color: rgb(126, 148, 151, 0.6);
  text-decoration: none;
`;
