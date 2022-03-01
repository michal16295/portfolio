import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <Intro>Hi, my name is</Intro>
      <Name>Michal Barski.</Name>
      <Title>Full stack developer</Title>
      <Description>
        I’m a software engineer.
        <br /> Currently, working on building accessible, patient-centered
        products at <strong>Gistmd</strong>.
      </Description>
    </Container>
  );
};

export default About;

const Container = styled.div`
  width: 50%;
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
  font-size: clamp(25px, 8vw, 50px);
  font-weight: 600;
  font-family: "Calibre";
  color: ${({ theme: { colors } }) => colors.slate};
`;

const Description = styled.p`
  line-height: 1.5;
  font-smooth: antialiased;
  font-size: 20px;

  strong {
    cursor: pointer;
    color: ${({ theme: { colors } }) => colors.green};
  }
`;
