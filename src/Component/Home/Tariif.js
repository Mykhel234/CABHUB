import React from "react";
import style from "styled-components";

const Tariif = () => {
  return (
    <Container>
      <Title>Our Tarrifs</Title>
      <Wrapper>
        <Card>
          <img src={"/remove.png"} />
          <Wrap>
            <span>ECONOMY CLASS</span>
            <p>
              Dispute resolution financial crime insurance and reinsurance
              intellectual property maritime and
              financialconstructionwww.i-legalteam.com i-law.com construction
              dispute resolutio financial crime insurance and reinsurance
              intellectual property maritime.
            </p>
            <div>$1,5/MI</div>
            <button>READ MORE</button>
          </Wrap>
        </Card>
        <Card>
          <img src={"/remove.png"} />
          <Wrap>
            <span>STANDARD CLASS</span>
            <p>
              Dispute resolution financial crime insurance and reinsurance
              intellectual property maritime and
              financialconstructionwww.i-legalteam.com i-law.com construction
              dispute resolutio financial crime insurance and reinsurance
              intellectual property maritime.
            </p>
            <div>$5,5/MI</div>
            <button>READ MORE</button>
          </Wrap>
        </Card>
        <Card>
          <img src={"/remove.png"} />
          <Wrap>
            <span>BUSINESS CLASS</span>
            <p>
              Dispute resolution financial crime insurance and reinsurance
              intellectual property maritime and
              financialconstructionwww.i-legalteam.com i-law.com construction
              dispute resolutio financial crime insurance and reinsurance
              intellectual property maritime.
            </p>
            <div>$2,5/MI</div>
            <button>READ MORE</button>
          </Wrap>
        </Card>
      </Wrapper>
    </Container>
  );
};

export default Tariif;

const Container = style.div`
width: 100%;
// height: 90vh;
background: lavender;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;
const Wrapper = style.div`
// margin-top: 10px;
width: 100%;
// height: 90vh;
display: flex;
align-items: center;
justify-content: space-evenly;
@media screen and (max-width: 938px){
  flex-wrap: wrap;
};
`;
const Title = style.div`
margin-top: 30px;
margin-bottom: 40px;
font-size: 45px;
font-weight: bold;
text-transform: uppercase;
@media screen and (max-width: 364px){
  font-size: 35px;
  
};
`;
const Card = style.div`
width: 300px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
// background: blue;
// margin-top: 20px;
margin-bottom: 50px;

img{
  margin-bottom: -10px;
  height: 200px;
  // background: red;
  z-index: 1;
  @media screen and (max-width: 1056px){
    height: 150px;
  };
}

`;

const Wrap = style.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: 270px;
border-radius: 10px;
background: silver;
// background: red;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
:hover{
  background: #EF9804;
  transition: all 350ms;
  cursor: pointer;
  transform: scale(0.95)
};
span{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
    font-size: 20px;
    font-weight: bold;
    margin-top: 10px;
};
p{
  font-size: small;
  line-height: 20px;
  width: 90%;
  opacity: 0.7;
  // background: red;
};
div{
    font-size: 25px;
    font-weight: bold;
    width: 100%;
    // height: 50px;
    // background: white;
    display: flex;
    justify-content: center;
};
button{
padding: 10px 10px;
cursor: pointer;
// height: 60px;
display: flex;
align-items: center;
justify-content: center;
background: black;
color: white;
border-radius: 5px;
// margin-top: 20px;
justify-content: center;
:hover{
    transition: all 400ms;
    transform: scale(1.1)
}
`;

// const Container = style.div``
// const Container = style.div``
