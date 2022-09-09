import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Products from "../Components/products";
const ProductList = () => {
  const { cat } = useParams();
  const [color, setColor] = useState(null);
  const [size, setSize] = useState("L");

  return (
    <Container>
      <Filter>
        <Title>You can filter to find your fit itme</Title>
        <FilterItems>
          <Con>
            <Label>Color</Label>
            <SelectColor onChange={(e) => setColor(e.target.value)}>
              <OptionColor value="Choose here" selected disabled hidden>
                Choose Color
              </OptionColor>
              <OptionColor>red</OptionColor>
              <OptionColor>blue</OptionColor>
              <OptionColor>black</OptionColor>
              <OptionColor>gray</OptionColor>
              <OptionColor>yellow</OptionColor>
              <OptionColor>white</OptionColor>
            </SelectColor>
          </Con>
          <Con>
            <Label>Size</Label>
            <SelectSize onChange={(e) => setSize(e.target.value)}>
              <OptionSize selected>S</OptionSize>
              <OptionSize>M</OptionSize>
              <OptionSize>L</OptionSize>
              <OptionSize>XL</OptionSize>
            </SelectSize>
          </Con>
        </FilterItems>
      </Filter>
      <Products cat={cat} flter={{ color, size }} />
      <Footer />
    </Container>
  );
};
export default ProductList;
const Container = styled.div`
  width: 100vw;
  height: 200px;
  background: rgb(230, 255, 251);
  padding-bottom: 30px;
  // margin-top: 30px;
`;
const Filter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0px;
`;
const Title = styled.h1`
  color: #09aa8f;
  letter-spacing: 2px;
  margin-bottom: 50px;
`;
const FilterItems = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // background: rgb(230, 255, 251);
  padding: 15px 20px;
`;
const Con = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Label = styled.h4`
  margin: 0;
  letter-spacing: 2px;
  font-size: 24px;
  color: gray;
`;
const SelectColor = styled.select`
  font-size: 16px;
  padding: 10px 30px;
  border: none;
  color: rgba(54, 180, 159, 0.8);
  border-right: 4px solid #09aa8f;
  margin-left: 20px;
  background: rgb(230, 255, 251);
`;
const OptionColor = styled.option`
  height: 50px;
  color: rgb(10, 188, 157);
`;
const SelectSize = styled.select`
  font-size: 16px;
  padding: 10px 30px;
  border: none;
  color: rgba(54, 180, 159, 0.8);
  border-right: 4px solid #09aa8f;

  margin-left: 20px;
  background: rgb(230, 255, 251);
`;
const OptionSize = styled.option`
  height: 50px;
  color: rgb(10, 188, 157);
`;
