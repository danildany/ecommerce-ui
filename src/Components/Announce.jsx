import styled from "styled-components";
import React from "react";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
`;

const Announce = () => {
  return (
    <Container>
      <h2>2 kilos de salamin /400$</h2>
    </Container>
  );
};

export default Announce;
