import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate } from "react-router-dom";
import { RemoveItemCart, EmptyCartProducts } from "../Redux/CartSlice";
import { SendOrder } from "../Apis/Api";
const URL=process.env.REACT_APP_API_URL;

const PublicKey=process.env.REACT_APP_STRIPE_KEY; 
const Cart = () => {
  const dispatch = useDispatch();
  const [stripeToken, setStripeToken] = useState("");
  const Products = useSelector((state) => state.cart.Cartproducts);
  const TotalPrice = useSelector((state) => state.cart.AllPrices);
  const User = useSelector((state) => state.user.currentUser);
  const Nav = useNavigate();

  const onToken = (token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const SendPayment = async () => {
      try {
        const res = await fetch(`${URL}/payment/checkout`, {
          method: "POST",
          headers: {
            token: `Breare ${User?.token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tokenId: stripeToken.id,
            amount: TotalPrice * 100,
          }),
        });
        const userPay = await res.json();
        if (userPay.status === "succeeded"&&User) {
          SendOrder(Products, TotalPrice, User);
          dispatch(EmptyCartProducts());
          Nav("/succeed");
        }
      } catch (er) {
        console.log(er);
      }
    };
    stripeToken && SendPayment();
  }, [stripeToken]);

  return (
    <Container>
      <Wrap>
        <LEFT>
          {Products?.map((item, index) => (
            <Item key={index}>
              <ImgCon>
                <Image src={item.img} />
              </ImgCon>
              <Info>
                <Part>
                  <Lables>name</Lables>
                  <Desc>{item.name}</Desc>
                </Part>
                <Part>
                  <Lables>price</Lables>
                  <Desc>${item.price} </Desc>
                </Part>

                <Part>
                  <Lables>Quantity</Lables>
                  <Con>
                    <RemoveIcon
                      style={{
                        cursor: "pointer",
                        fontSize: 20,
                        margin: 7,
                        color: "#959595",
                      }}
                    />
                    <Desc> {item.quantity}</Desc>
                    <AddIcon
                      style={{
                        cursor: "pointer",
                        fontSize: 20,
                        margin: 7,
                        color: "#959595",
                      }}
                    />
                  </Con>
                </Part>
                <Part>
                  <Lables>remove</Lables>
                  <Desc
                    type="remove"
                    onClick={() => dispatch(RemoveItemCart(item))}
                  >
                    X
                  </Desc>
                </Part>
              </Info>
            </Item>
          ))}
        </LEFT>
        {/* /////////////////////////////////// */}
        <Right>
          <RitCon>
            <ConTotal>
              <Lables> total </Lables>
              <Desc>${TotalPrice}</Desc>
            </ConTotal>
            <ConTotal>
              <Lables>Discount</Lables>
              <Desc>$70</Desc>
            </ConTotal>
            <ConTotal>
              <Lables>your total </Lables>
              <Desc>${TotalPrice}</Desc>
            </ConTotal>

            <Button dis={TotalPrice === 0 || User === null}>
              <StripeCheckout
                disabled={TotalPrice === 0 || User === null}
                name="ZEET"
                description="Big Data Stuff"
                image="https://cdn.dribbble.com/users/2984251/screenshots/12344150/media/c6ec69ee218eb7113e06b35035aa9d27.png?compress=1&resize=400x300&vertical=top"
                ComponentClass="div"
                panelLabel="Give Money"
                amount={TotalPrice * 100}
                currency="USD"
                email="info@vidhub.co"
                token={onToken}
                stripeKey={PublicKey}
              >
                Checkout
              </StripeCheckout>
            </Button>
          </RitCon>
        </Right>
      </Wrap>
    </Container>
  );
};
export default Cart;
const Container = styled.div`
  width: 100vw;
  height: 93vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(243, 252, 251);

  & ::-webkit-scrollbar {
    width: 8px;
  }

  & ::-webkit-scrollbar-track {
    background: white;
  }

  & ::-webkit-scrollbar-thumb {
    background: rgba(54, 180, 159, 0.3);
  }

  & ::-webkit-scrollbar-thumb:hover {
    background: rgba(54, 180, 159, 0.5);
  }
`;
const Wrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LEFT = styled.div`
  flex: 2.1;
  width: 90%;
  height: 90vh;
  overflow: auto;
  text-align: justify;
`;
const Item = styled.div`
  margin: 20px 30px;
  height: 20vh;
  background: white;
  box-shadow: 0px 5px 9px 0px rgba(143, 166, 168, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;
const ImgCon = styled.div`
  border-radius: 15px;
  flex: 1;
  height: 16vh;
  // width: 95%;
  // object-fit: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  border-radius: 15px;
  background: red;
  margin: 0px 10px;
`;
const Image = styled.img`
  overflow: hidden;
  width: 120%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  width: 92%;
  flex: 3;
  height: 16vh;

  margin: 20px 30px;
  background: rgb(243, 252, 251);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;

const Part = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Lables = styled.h3`
  color: rgb(54, 180, 159);
`;
const Desc = styled.p`
  cursor: ${(props) => props.type && "pointer"};
  color: gray;
`;
const Con = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  width: 100%;
`;
const RitCon = styled.div`
  border: 3px solid rgba(54, 180, 159, 0.2);
  width: 90%;
  border-radius: 20px;
  height: 90%;
  background: white;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;
const ConTotal = styled.div`
  margin-left: 30px;

  width: 80%;
  display: flex;
  border-bottom: 2px solid rgba(54, 180, 159, 0.1);
  align-items: center;
  justify-content: flex-start;
  & ${Lables} {
    color: rgb(61, 65, 66, 0.8);
    margin-top: 30px;
    margin-left: 20px;
    margin-right: 120px;
  }
`;
const Button = styled.button`
  width: 50%;
  align-self: center;
  margin-top: 35%;
  margin-bottom: 25px;
  padding: 12px 40px;
  font-size: 18px;
  background: ${(props) => (props.dis ? "#0f5e51" : "#0abc9d")};

  border: none;
  color: white;
  transition: all 0.8s;
  cursor: pointer;
  color: ${(props) => props.dis && "rgba(225, 225, 225, 0.53)"};

  &:hover {
    background: ${(props) => (props.dis ? "#0f5e51" : "#17d7b6")};
    color: ${(props) => props.dis && "rgba(225, 225, 225, 0.53)"};
  }
`;
