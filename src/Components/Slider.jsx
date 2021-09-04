import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState } from "react";
import styled from "styled-components";

import { sliderItems } from "../data/data";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;
const Slide = styled.div`
  display: ${(props) => (props.muestra === "active" ? "flex" : "none")};
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.bg};
`;
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
  transform: translateX(200px);
`;
const InfoContainer = styled.div`
  flex: 1;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  letter-spacing: 3px;
  font-weight: 500;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const [current, setCurrent] = useState(0);
  const length = sliderItems.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(sliderItems) || sliderItems.length <= 0) {
    return null;
  }
  return (
    <Container>
      <Arrow direction="left" onClick={prevSlide}>
        <ArrowLeftOutlined />
      </Arrow>
      {sliderItems.map((item, index) => (
        <Wrapper key={index}>
          <Slide
            bg={item.bg}
            muestra={index === current ? "active" : "inactive"}
          >
            {index === current && (
              <>
                <ImageContainer>
                  <Image src={item.img} />
                </ImageContainer>
                <InfoContainer>
                  <Title>{item.title}</Title>
                  <Desc>{item.desc}</Desc>
                  <Button>SHOW NOW</Button>
                </InfoContainer>
              </>
            )}
          </Slide>
        </Wrapper>
      ))}
      <Arrow direction="right" onClick={nextSlide}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
