import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { FetchingSuccess } from "../Redux/ProductSclice";
import ProductItem from "./ProductItem";

const URL=process.env.REACT_APP_API_URL;
const Products = ({ cat, flter }) => {
  const [productsData, setProductsData] = useState([]);
  const [FilteredProduct, setFilteredProdut] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch(
          cat
            ? `${URL}/product/?category=${cat}`
            : `${URL}/product/`
        );
        const ProData = await res.json();
        setProductsData(ProData);
        dispatch(FetchingSuccess(ProData));
      } catch (er) {
        console.log(er);
      }
    };
    getProducts();
  }, [cat]);
  useEffect(() => {
    cat &&
      setFilteredProdut(
        productsData.filter((item) => {
          const size = item.size.includes(flter.size);
          const color = item.color.includes(flter.color);
          return color && size;
        })
      );
  }, [cat][flter]);

  return (
    <Container>
      {FilteredProduct?.length ? (
        <Wrap>
          {FilteredProduct?.map((item, index) => (
            <ProductItem key={index} item={item} />
          ))}
        </Wrap>
      ) : (
        <Wraps>
          {productsData.map((item, index) => {
            return index < 4 && <ProductItem key={item._id} item={item} />;
          })}
        </Wraps>
      )}
    </Container>
  );
};

export default Products;

const Container = styled.div`
  background: #e6f7f8;
  padding: 80px 0px;
  width: 100vw;
  // height: 60vh;
  // display: flex;

  // justify-content: center;
  // align-items: center;
  // flex-wrap: wrap;
  // gap: 60px;
`;
const Wrap = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 60px;
`;
const Wraps = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
  // flex-wrap: wrap;
  gap: 60px;
`;
