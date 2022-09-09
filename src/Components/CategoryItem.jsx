import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const CategoryItem = ({ itme }) => {
  return (
    <Container>
      <ConBack>
        <Wrap>
          <Bon>
            <Title>{itme.title}</Title>
            <Button to={`/products/${itme.cat}`}>See ow</Button>
          </Bon>
          <Image src={itme.img} />
        </Wrap>
      </ConBack>
    </Container>
  );
};

export default CategoryItem;

const Bon = styled.div`
  border-radius: 10px;
  background: black;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: all 0.8s ease-in;
`;
const Title = styled.h1`
  margin-top: 10%;
  color: white;
  font-size: 44px;
  font-weight: 600;
`;
const Button = styled(Link)`
  background: white;
  font-size: 22px;
  color: #0abc9d;
  padding: 15px 50px;
  border: none;
  font-weight: bold;
  transition: all 0.5s ease-in;
  maring: 10px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    font-size: 24px;
    padding: 15px 55px;
  }
`;

const Container = styled.div`
  flex: 1;
  min-width: 40vw;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  // margin: 10px;
`;
const ConBack = styled.div`
  width: 85%;
  height: 42vh;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  &:hover ${Bon} {
    opacity: 0.6;
  }
`;
const Wrap = styled.div`
  background: black;
  border-radius: 10px;
  box-shadow: 0px 0px 8px 0px white;
  width: 95%;
  height: 95%;
  overflow: hidden;
  position: relative;
`;
const Image = styled.img`
  width: 110%;
  height: 110%;
  object-fit: cover;
  // opacity:0.9;
`;
