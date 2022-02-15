import React from "react";

import {
  Header,
  About,
  Projects,
  SideBar,
  Contact,
  Experience,
} from "./components";

import { Theme, GlobalStyle } from "./styles";

function App() {
  return (
    <Theme>
      <GlobalStyle />
      <Header />
    </Theme>
  );
}

export default App;
