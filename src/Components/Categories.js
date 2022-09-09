import React from "react";
import { Category } from "../data";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
const Categories = () => {
  return (
    <Container>
      {Category.map((itme,index) => (
        <CategoryItem key={index} itme={itme} />
      ))}
    </Container>
  );
};
const Container = styled.div`
  background: white;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 110px 0px;
  // border-top: 1px solid white;
`;

export default Categories;
