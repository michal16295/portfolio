import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SideBar = () => {
  return (
    <Container>
      <Icon>
        <FaGithub
          size={25}
          onMouseOver={({ target }) => (target.style.color = "#64ffda")}
          onMouseOut={({ target }) => (target.style.color = "#a8b2d1")}
        />
      </Icon>
      <Icon>
        <FaLinkedin
          size={25}
          onMouseOver={({ target }) => (target.style.color = "#64ffda")}
          onMouseOut={({ target }) => (target.style.color = "#a8b2d1")}
        />
      </Icon>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  margin-left: 40px;
  position: fixed;
  bottom: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:after {
    content: "";
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: ${({ theme: { colors } }) => colors.lightSlate};
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Icon = styled.div`
  margin: 10px 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
