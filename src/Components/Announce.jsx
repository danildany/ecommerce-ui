import React, { useState } from "react";
import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: #fff;
  display: ${(props) => (props.display === "clicked" ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
`;

const Announce = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(true);
  };
  return (
    <Container display={click ? "clicked" : "noClicked"}>
      <h2>Super Deal! Free Shipping on Orders Over $50</h2>
      <CloseIcon
        style={{
          position: "absolute",
          right: "5px",
          cursor: "pointer",
        }}
        onClick={handleClick}
      />
    </Container>
  );
};

export default Announce;
