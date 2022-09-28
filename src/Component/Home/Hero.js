import React from "react";
import style from "styled-components";

const Hero = () => {
  return (
    <Container>
      {/* <Empty></Empty> */}
      <Wrapper>
        <Content>
          <span>BOOK CAB NOW</span>
          <div>+123 4567 8900</div>
          <Email>WWW.PSDFREEBIES.COM</Email>
          <Image src={"/remove.png"} />
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Hero;

const Content = style.div`
margin: 130px 0;
display: flex;
flex-direction: column;
align-items: center;
// justify-content: center;
width: 100%;
height: 100%;
@media screen and (max-width: 400px){
  margin: 140px 0;
};
span{
    font-size: 20px;
    font-weight: bold;
    color: #EF9804;
};
div{
    font-size: 30px;
    font-weight: bold;
    color: white;
    @media screen and (max-width: 400px){
      font-size: 25px;
    };
}

`;

const Container = style.div`
width: 100%;
// height: calc(100vh - 100px);

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Wrapper = style.div`
// margin-top: 30px;
background: url("/highway.jpg");
background-position: top;
background-size: cover;
width: 100%;
height: calc(100vh - 100px);
@media screen and (max-width: 400px){
  background: url("/bg2.jpg");
  background-position: top;
  background-size: cover;
}

`;
const Email = style.div`
font-size: 5px;
color: white;
`;
const Image = style.img`
width: 600px;
height: 600px;
object-fit: contain;
// background: black;
position: absolute;
top: 20%; 
@media screen and (max-width: 836px){
  width: 550px;
  height: 550px;
};
@media screen and (max-width: 836px){
  width: 500px;
  height: 500px;
};
@media screen and (max-width: 502px){
  width: 450px;
  height: 450px;
  top: 130px;
};
@media screen and (max-width: 502px){
  width: 450px;
  height: 450px;
  top: 130px;
};
@media screen and (max-width: 470px){
  width: 400px;
  height: 400px;
  top: 180px;
};
@media screen and (max-width: 400px){
  width: 400px;
  height: 400px;
  top: 170px;
};
@media screen and (max-width: 400px){
  display: none;
};
// @media (min-width: 320px) and (max-width:768px){
  
//   z-index: -1;
// }
`;
const Empty = style.div`
width: 100%;
height: 12%;
// background: black;
`;
