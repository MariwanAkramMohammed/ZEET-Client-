import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StarIcon from "@mui/icons-material/Star";
const URL = process.env.REACT_APP_API_URL;
let star = {};
let Arr = [];
const FeedBack = () => {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    const getComment = async () => {
      const res = await fetch(`${URL}/comment`);
      const comment = await res.json();

      for (let i = 0; i < comment?.length; i++) {
        const RangArr = await FillAr(comment[i].range);

        star[comment[i]._id] = RangArr;
        Arr = [];
      }

      setComment(comment);
    };
    getComment();
  }, []);
  const FillAr = (x) => {
    console.log(x, "          x");
    for (let i = 0; i < x; i++) {
      Arr[i] = i;
    }

    return Arr;
  };

  return (
    <Container>
      <ConCom>
        {comment
          ?.filter((item, index) => item.public)
          .map((item, index) => (
            <CmmentCon key={index} index={`${index}`}>
              <Right>
                <Title>{item.userEmail}</Title>
                <DescEr>{item.comment}</DescEr>
                <CON>
                  {star[item._id]?.map((item) => (
                    <StarIcon
                      style={{ color: "rgb(82, 200, 155)", fontSize: 30 }}
                      key={item}
                    />
                  ))}
                </CON>
              </Right>
            </CmmentCon>
          ))}
      </ConCom>
    </Container>
  );
};

export default FeedBack;
const Container = styled.div`
  margin: 160px 0px 110px 0px;
  width: 100vw;
  // height: 80vh;
  display: flex;
  padding: 50px 0px;
  justify-content: center;
  align-items: center;
  background: rgba(207, 231, 234, 0.3);
  background-image: linear-gradient(
    to right,
    rgba(207, 231, 234, 0.3),
    white,
    rgba(98, 222, 202, 0.2)
  );
`;
const ConCom = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  // align-items:${(props) => props.in} flex-start;
`;
const CmmentCon = styled.div`
  margin: 15px;
  align-self: ${(props) => (props.index === "1" ? "flex-start" : "flex-end")};
  width: 30vw;
  height: 25vh;
  padding: 20px;
  background: rgb(246, 250, 250);
  display: flex;
  border-radius: 0px 0px 20px 20px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 5px 39px 15px rgba(143, 166, 168, 0.2);
  border: 7px solid #abd6cf2f;
`;

const Image = styled.img`
  height: 85%;
  width: 100%;
  opacity: 0.4;
`;

const Right = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h6`
  flex: 0.31;
  margin: 0;
  text-align: start;

  width: 100%;

  color: rgba(82, 200, 155, 0.7);
`;
const DescEr = styled.h5`
  flex: 1;
  font-size: 16px;
  color: rgbA(150, 184, 192, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 2px;
`;
const CON = styled.div`
  flex: 1;
  width: 100%;
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
`;
