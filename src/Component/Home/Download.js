import React from "react";
import style from "styled-components";

const Download = () => {
  return (
    <div>
      <Container></Container>
    </div>
  );
};

export default Download;

const Container = style.div`
width: 100%;
height: 100vh;
background: url("/taxi.jpg");
background-position: center;
background-size: cover;
background-repeat: no-repeat;
`;
