import styled from "styled-components";
import { useState } from "react";
import SingInCart from "./SignInCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useNavigate } from "react-router-dom";
import { Badge } from "@mui/material";
import { useSelector } from "react-redux";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { useEffect } from "react";
import User from "./User";
const Navbar = () => {
  const [show, setShow] = useState(false);
  const [userShow, setUserShow] = useState(false);
  const [searchshow, setSearch] = useState(false);
  const [inp, setInp] = useState("");
  const [list, setList] = useState([]);
  const newNav = useNavigate();

  const currentUser = useSelector((state) => state.user.currentUser);
  const Products = useSelector((state) => state.product.Products);

  const CartProduct_Num = useSelector(
    (state) => state.cart.Cartproducts
  ).length;
  useEffect(() => {
    const newList = Products.filter((item) =>
      item.name.toLowerCase().includes(inp.toLowerCase())
    );
    setList(newList);
  }, [inp]);

  return (
    <Container>
      <Cont>
        <Wrapped>
          <Left>
            <Logo onClick={() => newNav("/")}>ZEET</Logo>
          </Left>

          <Center>
            <SearchInput
              id="inp"
              type="search"
              placeholder="Search.. "
              onClick={() => setSearch(true)}
              onChange={(e) => setInp(e.target.value)}
            />
          </Center>
          <Right>
            {currentUser ? (
              <PersonPinIcon
                style={{ fontSize: 30, color: "white", cursor: "pointer" }}
                onClick={() => setUserShow(!userShow)}
              />
            ) : (
              <Nav>
                <Sign onClick={() => setShow(!show)}>SIGN-IN</Sign>
              </Nav>
            )}
            <Nav>
              <Badge
                badgeContent={CartProduct_Num}
              
                style={{ fontSize: 4 }}
              >
                <Icon>
                      <ShoppingBagIcon
                  onClick={() => newNav("/cart")}
                  style={{ fontSize: 25 }}
                />
                </Icon>
            
              </Badge>
            </Nav>
          </Right>
        </Wrapped>
        {searchshow && (
          <Search onClick={() => setSearch(false)}>
            <CONT>
              {list.map((item, index) => (
                <ListItem onClick={() => newNav(`/product/${item._id}`)}>
                  {item.name}
                </ListItem>
              ))}
            </CONT>
          </Search>
        )}
      </Cont>
      <SingInCart show={show} />
      {show && <SingBackdrop onClick={() => setShow(!show)} />}
      {userShow && <User />}
      {userShow && <UserBackdrop  onClick={() => setUserShow(!userShow)}/>}
    </Container>
  );
};
export default Navbar;

const Container = styled.div`
  width: 100vw;
  height: 55px;

  position: relative;
`;
const Icon=styled.div`
width: 100%;
height: 100%;
// background:red;
display: flex;
  justify-content: center;
  align-items: center;
margin-bottom:10px;
`
const Search = styled.div`
  width: 100vw;
  height: 93vh;

  position: absolute;
  top: 60px;
  backdrop-filter: blur(12px);
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const SingBackdrop = styled.div`
  width: 100vw;
  height: 93vh;
  z-index: 1;
  position: absolute;
  top: 55px;
  backdrop-filter: blur(12px);
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const UserBackdrop = styled.div`
  width: 100vw;
  height: 93vh;
  z-index: 1;
  position: absolute;
  top: 55px;
  backdrop-filter: blur(12px);
  display: flex;
  // flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CONT = styled.div`
  width: 80%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;
const ListItem = styled.p`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 5px 0px;
  font-size: 18px;
  border-bottom: 1px solid #abd6cf2f;
  color: #0abc9d;
`;
const Cont = styled.div`
  width: 100%;
  height: 100%;
  background: #0abc9d;
  // overflow: hidden;
  display: flex;
  justify-content: center;
  aling-items: center;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 11;
`;
const Wrapped = styled.div`
  width: 100%;
  height: 45px;
  padding: 8px 30px;
  display: flex;
`;
const Left = styled.div`
  flex: 1;

  color: white;
`;
const Logo = styled.h1`
  margin: 0;
  cursor: pointer;
  font-size: 30px;
`;

const SearchInput = styled.input`
  width: 80%;
  height: 80%;
  background: #6ae8d2;
  border-radius: 10px;
  border: none;
  color: white;
  font-size: 16px;
  padding-left: 20px;
`;
const Center = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  aling-items: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  aling-items: center;
  gap: 50px;
  margin: auto 0px;
`;
const Nav = styled.div`
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Sign = styled.p`
  margin: 0;
  margin-top: -5px;
  padding: 5px 15px;
  font-size:18px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
`;
