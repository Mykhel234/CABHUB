import React from "react";
import style from "styled-components";

const Services = () => {
  return (
    <div>
      <Container>
        <Title>
          <span>DOWNLOAD OUR APP</span>
          <div>ENJOY OUR SERVICE</div>
        </Title>
        <Wrapper>
          <Left>
            <img src={"/phone2.jpg"} />
          </Left>
          <Right>
            <img src={"/phone.jpg"} />
          </Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Services;

const Container = style.div`
width: 100%;
// height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: rgba(33,33,33, 0.95);
`;
const Wrapper = style.div`
width: 80%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
@media screen and (max-width: 562px){
  flex-direction: column;
};
`;
const Left = style.div`
width: 400px;
height: 500px;
// background: blue;
margin-bottom: 50px;
// box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
@media screen and (max-width: 1042px){
  width: 300px;
  height: 400px;
};
@media screen and (max-width: 784px){
  width: 200px;
  height: 300px;
};
img{
    width: 400px;
    height: 500px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    @media screen and (max-width: 1042px){
      width: 300px;
      height: 400px;
    };
    @media screen and (max-width: 784px){
      width: 200px;
      height: 300px;
  };
};
:hover{
  border: solid 10px #EF9804;
  border-radius: 20px;
  transition: all 350ms;
  cursor: pointer;
};
`;
const Right = style.div`
width: 400px;
height: 500px;
// background: blue;
margin-bottom: 50px;
// box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
@media screen and (max-width: 1042px){
  width: 300px;
  height: 400px;
};
@media screen and (max-width: 784px){
  width: 200px;
  height: 300px;
};
img{
    width: 400px;
    height: 500px;
    object-fit: cover;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    @media screen and (max-width: 1042px){
      width: 300px;
      height: 400px;
    };
    @media screen and (max-width: 784px){
        width: 200px;
        height: 300px;
    };
};
:hover{
  border: solid 10px #EF9804;
  border-radius: 20px;
  transition: all 350ms;
  cursor: pointer;
};
`;
const First = style.div`
display: flex;

`;
const Text = style.div`
span{
    margin-top: 30px;
    font-size: 20px;
    font-weight: bold;
    text-transform: uppercase;
};

`;
const Icon = style.div`
width: 50px;
height: 50px;
border-radius: 100%;
background: black;
`;
const Title = style.div`
margin-top: 50px;
margin-bottom: 40px;
font-size: 30px;
font-weight: bold;
color: #EF9804;
div{
    font-size: 25px;
    margin-left:  20px;
    @media screen and (max-width: 364px){
      font-size: 20px;
    };
};
span{
  @media screen and (max-width: 364px){
    font-size: 20px;
  };
}

`;
