import React, { useState } from "react";

import {
  Header,
  About,
  Projects,
  SideBar,
  Contact,
  Experience,
} from "./components";

import { Theme, GlobalStyle } from "./styles";
import styled from "styled-components";

function App() {
  const [expand, setExpand] = useState(false);

  return (
    <Theme>
      <GlobalStyle />
      <Header expand={expand} handleExpand={setExpand} />
      <SideBar />
      <Main expand={expand}>
        <About />
        <Experience />
        <Projects />
      </Main>
    </Theme>
  );
}

export default App;

const Main = styled.div`
  filter: ${({ expand }) => expand && "blur(4px)"};
`;
