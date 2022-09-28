import React, { useState } from "react";
import style from "styled-components";
import { GoThreeBars } from "react-icons/go";
import { FiXCircle } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [changeHeader, setChangeHeader] = useState(false);

  const Toggle = () => {
    setChangeHeader(!changeHeader);
    console.log(changeHeader);
  };

  const navigationRoutes = [
    { to: "/", label: "Home" },
    { to: null, label: "Features" },
    { to: null, label: "Blog" },
    { to: null, label: "Check Now" },
    { to: null, label: "Contacts" },
  ];

  return (
    <>
      <Container>
        <Wrapper>
          <Logo to="/">
            <Title>
              Cab<span>Hub</span>
            </Title>
            <Text>Call and Relex</Text>
          </Logo>
          <Navigations>
            {navigationRoutes?.map((item) => (
              <Navs to={item?.to}>{item?.label}</Navs>
            ))}
          </Navigations>
          {changeHeader ? (
            <Hold onClick={Toggle} />
          ) : (
            <Holds onClick={Toggle} />
          )}
        </Wrapper>
      </Container>
      {changeHeader ? null : (
        <Div>
          <Holder>
            <Wrap>
              {navigationRoutes?.map((item) => (
                <div onClick={Toggle}>{item?.label}</div>
              ))}
            </Wrap>
          </Holder>
        </Div>
      )}
    </>
  );
};

export default Header;

const Div = style.div`
  display:none;
  div{
    cursor: pointer;
  }
  @media (min-width: 320px) and (max-width:768px){
    display:flex;
    z-index: 1;
  }
`;

const Holder = style.div`
width: 250px;
height: 430px;
background: #EF9804;
display: flex;
align-items: center;
justify-content: center;
z-index: 1;
position: absolute;
top: 0;
left: 0;
`;
const Wrap = style.div`
width: 80%;
height: 80%;
// background: white;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
font-weight: bold;
;
`;
const Container = style.div`
width: 100%;
height: 90px;
display: flex;
justify-content: center;
align-items: center;
// background: skyblue;
backdrop-filter: blur(100px);
position: fixed;
z-index: 1;
`;
const Wrapper = style.div`
width: 90%;
height: 80px;
// background: skyblue;
display: flex;
align-items: center;
justify-content: space-between;
color: white;
`;
const Logo = style.div`
text-decoration: none;
padding: 0 80px;
@media screen and (max-width: 342px){
  padding: 0 60px;
}
`;
const Title = style.div`
font-size: 32px;
font-weight: bold;
color: white;
cursor: pointer;
// font-family: poppins;
span{
text-transform: uppercase;
color: #EF9804;
cursor: pointer;
}
`;
const Text = style.div`
font-size: 15px;
font-weight: bold;
color: white;
text-transform: uppercase;
cursor: pointer;
`;
const Navigations = style.div`
width: 60%;
height: 80px;
// background: blue;
display: flex;
align-items: center;
justify-content: space-around;
text-transform: uppercase;
@media (min-width: 200px) and (max-width:768px){
    display: none;
}
`;
const Navs = style.div`
text-decoration: none;
font-weight: bold;
font-size: 15px;
cursor: pointer;
width: 130px;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
:hover{
    background: #EF9804;
    opacity: 0.9;
    border-radius: 50px;
    transition: all 500ms;
}
`;
const Hold = style(GoThreeBars)`
    display:none;
    width:40px;
    height:40px;
    color: #EF9804;
    @media (min-width: 320px) and (max-width:768px){
        display: block;
        cursor: pointer;
    }

`;

const Holds = style(FiXCircle)`
    display:none;
    width:40px;
    height:40px;
    color: #EF9804;
    @media (min-width: 320px) and (max-width:768px){
        display: flex;
        cursor: pointer;
    }

`;
// const Container = style.div``
// const Container = style.div``
// const Container = style.div``
// const Container = style.div``
// const Container = style.div``
