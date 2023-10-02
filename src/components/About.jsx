import React, { Suspense } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const WhatIDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #66c7a7;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  font-size: 15px;
  padding: 10px;
  background-color: #66c7a7;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const About = () => {
  return (
    <Section className="about" id='about'>
      <Container>
        <Left>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </Left>
        <Right>
          <Title>My studies</Title>
          <WhatIDo>
            <Line src="./img/line.png" />
            <Subtitle>What certificates I have</Subtitle>
          </WhatIDo>
          <Desc>
            I started with a certificate in Python and now
            I have two more, in JavaScript and one in a Full-Stack
            Web Developer course
          </Desc>
          <form action="https://certificates-40288.web.app" target="_blank">
            <Button type="submit">See my certificates</Button>
          </form>
        </Right>
      </Container>
    </Section>

  );
};

export default About;