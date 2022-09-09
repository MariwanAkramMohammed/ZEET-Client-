import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginSucceed } from "../Redux/userSlice";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { AddItemToCart } from "../Redux/CartSlice";
const ProductItem = ({ item }) => {
  const dispatch = useDispatch();
  const Nav = useNavigate();
  const AddItem = () => {
    const { name, img, price, color, size } = item;
    const product = {
      name,
      img,
      price,
      Totalprice: price,
      color: color[0],
      size: size[0],
      quantity: 1,
    };

    dispatch(AddItemToCart(product));
  };
  return (
    <Container>
      <Wrap>
        <ImageCon>
          <Image src={item.img} />
        </ImageCon>
        <Info>
          <Title>{item.name}</Title>
          <Desc>{item.desc}</Desc>
          <Price>${item.price}</Price>
          <ConButtons>
            <Button onClick={() => Nav(`/product/${item._id}`)}>Buy now</Button>
            <Icon>
              <ShoppingCartOutlinedIcon
                style={{ fontSize: 34 }}
                onClick={() => AddItem()}
              />
            </Icon>
          </ConButtons>
        </Info>
      </Wrap>
    </Container>
  );
};
export default ProductItem;
const Container = styled.div`
  width: 20vw;
  height: 50vh;
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 6px;
  width: 100%;
  height: 100%;
  background: #d6f0f3;
  border-radius: 10px 10px 0px 0px;
`;
const ImageCon = styled.div`
  flex: 1.3;
  overflow: hidden;
  width: 100%;
  // height: 70%;
  border-radius: 10px 10px 0px 0px;
`;
const Image = styled.img`
  width: 110%;
  height: 110%;
  object-fit: cover;
`;
const Info = styled.div`
  width: 100%;
  flex: 1;
  background: #e6f8fa;
  // height: 53%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;

const Title = styled.h2`
  color: #4c5051;
  flex: 1;
  margin: 0;
  padding-left: 30px;
  padding-top: 10px;
`;
const Desc = styled.p`
  padding-right: 30px;
  padding-left: 20px;
  padding-top: 10px;
  flex: 1;
  margin: 0;
  font-size: 16px;
  font-weight: bold;
  color:  rgba(159, 159, 159, 0.9);
  
`;
const Price = styled.span`
  margin: 10px 0px 0px 20px;
  flex: 1;
  font-weight:bold;
  font-size: 24px;
  color: #0abc9d;
`;
const ConButtons = styled.div`
  width: 100%;
  flex: 1.5;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #edfafb;
`;
const Button = styled.button`
  width: 70%;
  height: 75%;
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
const Icon = styled.div`
  height: 75%;
  width: 17%;
  color: #0abc9d;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`;
