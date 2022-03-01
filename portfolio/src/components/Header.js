import React, { useState } from "react";
import styled from "styled-components";

import { useMediaQuery } from "react-responsive";
import { BsList } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

const Header = ({ expand, handleExpand }) => {
  const isMobile = useMediaQuery({ query: `(max-width: 768px)` });

  const actions = [
    {
      id: "01.",
      title: "about",
    },
    {
      id: "02.",
      title: "experience",
    },
    {
      id: "03.",
      title: "projects",
    },
    {
      id: "04.",
      title: "contact",
    },
  ];

  const List = (visible) => {
    return (
      <Actions show={visible}>
        {actions.map((item) => {
          return (
            <ActionItem key={item.id}>
              <span>{item.id}</span> {item.title}
            </ActionItem>
          );
        })}
        <ResumeBtn>Resume</ResumeBtn>
      </Actions>
    );
  };

  return (
    <Container>
      <Circle>M</Circle>
      {isMobile ? (
        <>
          {!expand && (
            <CloseBtn onClick={() => handleExpand(true)}>
              <BsList size={50} color="#64ffda" />
            </CloseBtn>
          )}
          {List(expand)}
          {expand && (
            <CloseBtn onClick={() => handleExpand(false)}>
              <AiOutlineClose size={50} color="#64ffda" />
            </CloseBtn>
          )}
        </>
      ) : (
        List()
      )}
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 30px 40px;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 10;
`;

const Circle = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: ${({ theme: { colors } }) => `3px solid ${colors.green}`};
  line-height: 37px;
  text-align: center;
  color: ${({ theme: { colors } }) => colors.green};
  font-weight: 500;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    background-color: ${({ theme: { colors } }) => colors.lightNavy};
    position: fixed;
    justify-content: center;
    top: 0;
    bottom: 0;
    right: 0;
    width: min(75vw, 400px);
    height: 100vh;
    box-shadow: ${({ theme: { colors } }) =>
      `-10px 0px 30px -15px ${colors.navyShadow}`};
    z-index: 9;
    transform: ${({ show }) =>
      show ? " translateX(0vw)" : " translateX(100vw)"};
    transition: cubic-bezier(0.645, 0.045, 0.355, 1);
    visibility: ${({ show }) => (show ? "visible" : "hidden")};
  }
`;

const ActionItem = styled.div`
  margin: 0 15px;
  text-transform: capitalize;
  cursor: pointer;
  font-size: ${({ theme: { fontSizes } }) => fontSizes.xs};
  color: ${({ theme: { colors } }) => colors.lightSlate};
  font-family: "Fira Code";
  &:hover {
    color: ${({ theme: { colors } }) => colors.green};
  }
  span {
    color: ${({ theme: { colors } }) => colors.green};
  }

  @media only screen and (max-width: 768px) {
    margin: 20px 0;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
    text-align: left;
  }
`;

const ResumeBtn = styled.button`
  background-color: transparent;
  outline: none;
  border: ${({ theme: { colors } }) => `1px solid ${colors.green}`};
  color: ${({ theme: { colors } }) => colors.green};
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin: 0 0 0 20px;
  font-family: "Fira Code";
  font-size: ${({ theme: { fontSizes } }) => fontSizes.sm};
  &:hover {
    background-color: ${({ theme: { colors } }) => colors.greenTint};
  }

  @media only screen and (max-width: 768px) {
    margin: 20px 0;
    font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
  }
`;

const CloseBtn = styled.div`
  position: relative;
  z-index: 10;
  cursor: pointer;
`;
