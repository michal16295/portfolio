import React from "react";
import styled from "styled-components";

import Wrapper from "./Wrapper";

const Experience = () => {
  return <Wrapper index="02." title="Where I've Worked"></Wrapper>;
};

export default Experience;
const Container = styled.div`
  width: 50%;
  margin: auto;
  height: 40vh;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  color: ${({ theme: { colors } }) => colors.lightestSlate};
  font-size: clamp(22px, 5vw, 26px);
  display: flex;
  align-items: center;

  div {
    color: ${({ theme: { colors } }) => colors.green};
    font-family: "Fira Code";
  }
`;

const Line = styled.div`
  background-color: ${({ theme: { colors } }) => colors.darkSlate};
  width: 40%;
  height: 1px;
  margin-left: 10px;
  margin-top: 10px;
`;
