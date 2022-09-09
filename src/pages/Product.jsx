import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useDispatch, useSelector } from "react-redux";
import { AddItemToCart } from "../Redux/CartSlice";
const URL = process.env.REACT_APP_API_URL;
const Product = () => {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  const { id: _id } = useParams();
  const dispatch = useDispatch();
  const cartProducts = useSelector((state) => state.cart.Cartproducts);
  const total = useSelector((state) => state.cart.AllPrices);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`${URL}/product/${_id}`);
      const product = await response.json();

      setItem(product);
    };
    getProduct();
  }, [_id]);

  const Count = (type) => {
    if (type == "remove") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  const AddItem = () => {
    const { name, img, price } = item;

    dispatch(
      AddItemToCart({
        name,
        img,
        price,
        Totalprice: price * quantity,
        color,
        size,
        quantity,
      })
    );
  };
  return (
    <Container>
      <Left>
        <Image src={item.img} />
      </Left>
      <Right>
        <Info>
          <Title>{item.name}</Title>
          <Desc>{item.desc}</Desc>
          <Price>${item.price}</Price>
        </Info>
        <FilterCon>
          <Contain>
            <Label>Color</Label>
            <SelectColor onChange={(e) => setColor(e.target.value)}>
              <OptionColor defaultValue="Color" hidden>
                Colors
              </OptionColor>
              {item.color?.map((colors, index) => (
                <OptionColor key={index}>{colors}</OptionColor>
              ))}
            </SelectColor>
          </Contain>

          <Contain>
            <Label>Size</Label>
            <SelectSize onChange={(e) => setSize(e.target.value)}>
              <OptionSize defaultValue="Size" hidden>
                Size
              </OptionSize>
              {item.size?.map((sizes, index) => (
                <OptionSize key={index}>{sizes}</OptionSize>
              ))}
            </SelectSize>
          </Contain>
        </FilterCon>
        <ConGuantity>
          <Quantity>
            <RemoveIcon
              onClick={() => Count("remove")}
              style={{
                cursor: "pointer",
                fontSize: 30,
                margin: 6,
                color: "#959595",
              }}
            />
            <Amount>{quantity}</Amount>
            <AddIcon
              onClick={() => Count("add")}
              style={{
                cursor: "pointer",
                fontSize: 30,
                margin: 6,
                color: "#959595",
              }}
            />
          </Quantity>
          <Button onClick={() => AddItem()}>Add To Cart</Button>
        </ConGuantity>
      </Right>
    </Container>
  );
};
export default Product;
const Container = styled.div`
  width: 100vw;
  height: 70vh;
  margin: 30px 0px;
  padding: 50px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Left = styled.div`
  flex: 1.3;
  border-radius: 25px;
  overflow: hidden;
  // background:red;
  height: 100%;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-position: center;
`;
const Right = styled.div`
  flex: 1;
  border-radius: 25px;
  width: 100%;
  height: 100%;
  background: rgb(243, 252, 251);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 30px;
`;
const Info = styled.div`
  border-radius: 25px;
  width: 100%;
  flex: 9;
  background: rgb(226, 247, 244);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 60px;

  margin-top: 30px;
`;
const Title = styled.h2`
  margin-top: 0px;
  margin-bottom: 20px;
  margin-left: 30px;
  font-weight: 700;
  font-size: 45px;
  color: rgb(10, 188, 157);
`;
const Desc = styled.p`
  padding-right: 80px;
  color: gray;
  font-size: 18px;
  margin: 0;
  margin-left: 40px;
  margin-bottom: 30px;
`;
const Price = styled.span`
  margin-left: 40px;
  font-weight: bold;
  font-size: 28px;
  color: #0abc9d;
`;

const FilterCon = styled.div`
  width: 100%;
  flex: 1.4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;
const Contain = styled.div`
  flex: 1;
  display: flex;
  padding: 10px;
  justify-content: space-around;
  align-items: center;
  // background: gray;
`;
const Label = styled.h4`
  margin: 0;

  font-size: 18px;
  color: gray;
`;

const SelectColor = styled.select`
  font-size: 14px;
  padding: 5px 20px;
  border: none;
  color: rgba(54, 180, 159, 0.8);
  border-right: 4px solid #09aa8f;
  margin-left: 20px;
  background: rgb(230, 255, 251);
`;
const OptionColor = styled.option`
  height: 50px;
  font-weight: 600;
  font-size: 16px;
  color: rgb(10, 188, 157);
`;
const SelectSize = styled.select`
  font-size: 14px;
  padding: 5px 20px;
  border: none;
  color: rgba(54, 180, 159, 0.8);
  border-right: 4px solid #09aa8f;

  margin-left: 20px;
  background: rgb(230, 255, 251);
`;
const OptionSize = styled.option`
  height: 50px;
  font-weight: 700;
  font-weight: 600;
  font-size: 16px;
  color: rgb(10, 188, 157);
`;
const ConGuantity = styled.div`
  padding: 10px;
  flex: 4;
  width: 100%;
  // height:auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Quantity = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
`;
const Amount = styled.p`
  font-size: 26px;
  color: #6e6e6e;
`;
const Button = styled.button`
  width: 50%;
  margin: 36px 0px;
  font-weight: 700;
  font-size: 20px;
  padding: 12px 40px;

  background: #0abc9d;
  border: none;
  color: white;
  transition: all 0.8s;
  cursor: pointer;
  &:hover {
    background: #17d7b6;
  }
`;
