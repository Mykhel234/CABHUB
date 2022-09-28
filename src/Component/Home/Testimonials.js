import React from "react";
import style from "styled-components";

const Testimonials = () => {
  return (
    <div>
      <Container>
        <Title>
          <span>WE DO OUR BEST</span>
          <div>THAN YOU WISH</div>
        </Title>
        <Wrapper>
          <Left>
            <First>
              <Icon />
              <Text>
                <span>Home PICKUP</span>
                <div>
                  financial crime insurance and reinsurance intellectual
                  property maritime and financialconstruction financial crime
                  insurance and reinsurance
                </div>
              </Text>
            </First>
          </Left>
          <Right></Right>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Testimonials;

const Container = style.div`
width: 100%;
// height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background: white;
`;
const Wrapper = style.div`
width: 70%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
`;
const Left = style.div`
width: 600px;
height: 600px;
background: lavender;
margin-bottom: 50px;
`;
const Right = style.div`
width: 600px;
height: 600px;
background: blue;
margin-bottom: 50px;
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
}
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
`;
