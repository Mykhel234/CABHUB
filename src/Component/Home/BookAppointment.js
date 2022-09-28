import React from "react";
import style from "styled-components";

const BookAppointment = () => {
  return (
    <Container>
      <Holder>
        <Hcontent>
          <Cheading>
            <span>BEST IN CITY</span>
            <div>
              TRUSTED CAB SERVICES
              <br />
              IN NEW YORK
            </div>
          </Cheading>
          <CText>
            Dispute resolution financial crime insurance and reinsurance
            intellectual property maritime and financialconstruction
            www.i-legalteam.com i-law.com construction dispute resolution
            financial crime insurance and reinsurance intellectual property
            maritime and financial The afforementione organization will be
            hosting their annual tech forumn schheduled to hold on the 9th of
            April 2022 at the Chairman's Chamber of ajeromi local Government
            council by 9am set05-report.web.app.
            <Button>READ MORE</Button>
          </CText>
        </Hcontent>
        <Hform>
          <Form>
            <Heading>BOOK A CAB</Heading>
            <Inputs>
              <First>
                <Input1 placeholder="Name" />
                <Input1 placeholder="Phone" />
              </First>
              <First>
                <Input1 placeholder="When" />
                <Input1 placeholder="Time" />
              </First>
              <First>
                <Input1 placeholder="Start" />
                <Input1 placeholder="End" />
              </First>
              <LastInput placeholder="Choose Vehicle" />
            </Inputs>
            <InputButton>SUBMIT</InputButton>
          </Form>
        </Hform>
      </Holder>
    </Container>
  );
};

export default BookAppointment;

const Container = style.div`
width: 100%;
// height: 90vh;
background: #EF9804;
display: flex;
justify-content: space-around;
align-items: center;
`;

const Holder = style.div`
width: 85%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
@media screen and (max-width: 1024px){
    flex-direction: column;
};
`;

const Hcontent = style.div`
border-radius: 10px;
width: 50%;
height: 80vh;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
// background: red;
@media screen and (max-width: 1024px){
    width: 100%;
}
`;

const CText = style.p`
width: 100%;
font-size: small;
line-height: 23px;
`;
const Cheading = style.div`
// background: green;
width: 100%;
div{
    width: 100%;
    font-size: 30px;
    font-weight: bold;
    line-height: 30px;
    @media screen and (max-width: 404px){
        font-size: 25px;
        line-height: 28px;
      };
      @media screen and (max-width: 336px){
        font-size: 20px;
        line-height: 20px;
      };
};
span{
    font-size: 20px;
    font-weight: bold;
    
}
`;

const Button = style.div`
margin-top: 20px;
padding: 2px 10px;
cursor: pointer;
width: 100px;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
background: black;
color: white;
border-radius: 5px;
border: 0;
:hover{
    transform: scale(0.96);
    transition: all 350ms;
    cursor: pointer;
}
`;
const Hform = style.div`
width: 50%;
height: 80vh;
// background: pink;
display: flex;
align-items: center;
justify-content: center;
@media screen and (max-width: 1024px){
    width: 100%;
}
`;
const Heading = style.div`
width: 100%;
height: 20%;
background: black;
color: white;
display: flex;
align-items: center;
justify-content: center;
`;
const Form = style.div`
width: 80%;
height: 80%;
background: white;
display: flex;
flex-direction: column;
align-items: center;
`;
const Inputs = style.div`
width: 100%;
height: 60%;
// background: lightgrey;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const First = style.div`
width: 100%;
height: 20%;
// background: green;
display: flex;
align-items: center;
justify-content: space-around;
`;
const Input1 = style.input`
border: 0;
border-bottom: double 2px grey;
width: 40%;
padding: 10px 10px;
background: transparent;
outline: none;
::placeholder{
    font-weight: bold;
}
`;
const LastInput = style.input`
border: 0;
border-bottom: double 2px grey;
width: 90%;
padding: 10px 10px;
background: transparent;
outline: none;
::placeholder{
    font-weight: bold;
}
`;
const InputButton = style.button`
width: 90%;
padding: 25px 15px;
background: black;
color: white;
border-radius: 5px;
border: 0;
:hover{
    transform: scale(0.96);
    transition: all 350ms;
    cursor: pointer;
}
`;
