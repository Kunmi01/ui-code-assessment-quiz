import { css } from "styled-components";
import { unit } from "./units";

const maxSectionWidth = "1080px";

export const sectionWrapperStyle: any = css`
  width: 100%;
  max-width: ${maxSectionWidth};
  padding: ${unit * 4}px ${unit * 4}px ${unit * 8}px;
  margin: 0 auto;
`;
