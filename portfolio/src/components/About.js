import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <Intro>Hi, my name is</Intro>
      <Name>Michal Barski.</Name>
      <Title>I'm a Full stack developer</Title>
    </Container>
  );
};

export default About;

const Container = styled.div`
  width: 60%;
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Intro = styled.p`
  font-family: "Fira Code";
  color: ${({ theme: { colors } }) => colors.green};
  font-size: clamp(0.875rem, 5vw, 1rem);
`;

const Name = styled.div`
  font-size: clamp(40px, 8vw, 80px);
  font-weight: 600;
  font-family: "Calibre";
  color: ${({ theme: { colors } }) => colors.lightestSlate};
`;

const Title = styled.div`
  font-size: clamp(1.125rem, 8vw, 3rem);
  font-weight: 600;
  font-family: "Calibre";
  color: ${({ theme: { colors } }) => colors.slate};
`;
