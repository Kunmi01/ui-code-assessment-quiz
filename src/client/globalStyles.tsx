import { createGlobalStyle } from "styled-components";
import { colors, fontFace, fonts, fontSizes } from "./styleUtils";

const GlobalStyle: any = createGlobalStyle`
  /***** CSS Reset START *****/
  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  b,
  a,
  img,
  strike,
  strong,
  sub,
  sup,
  ol,
  ul,
  li,
  form,
  label,
  legend,
  menu,
  nav,
  section {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /***** CSS Reset END *****/

  /***** Typography START *****/
  ${fontFace("PlayRegular", "./assets/fonts/play-regular/play-regular")}
  ${fontFace("PlayBold", "./assets/fonts/play-bold/play-bold")}

  h1 {
    font-size: ${fontSizes.xxxl};
  }

  h2 {
    font-size: ${fontSizes.xxl};
  }

  h3 {
    font-size: ${fontSizes.xl};
  }

  h4 {
    font-size: ${fontSizes.l};
  }
  /***** Typography END *****/

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    background-color: ${colors.backgroundLight};
    font-family: ${fonts.playRegular};
    font-size: ${fontSizes.m};
    color: ${colors.textDark};
    line-height: 1;
  }
`;

export default GlobalStyle;
