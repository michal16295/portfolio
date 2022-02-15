import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: ${({ theme: { colors } }) => colors.slate};
    background: ${({ theme: { colors } }) => colors.darkNavy};
    font-family: "Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif;
    box-sizing: border-box;
  }

  *{
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
