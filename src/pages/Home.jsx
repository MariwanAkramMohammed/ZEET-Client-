import Slide from "../Components/Slide";
import React from "react";
import styled from "styled-components";
import Categories from "../Components/Categories";
import Products from "../Components/products";
import FeedBack from "../Components/FeedBack";
import Footer from "../Components/Footer";
const Home = () => {
  return (
    <Container>
      <Slide />
      <Categories />
      <FeedBack />
      <Products />
      <Footer />
    </Container>
  );
};

export default Home;
const Container = styled.div``;
