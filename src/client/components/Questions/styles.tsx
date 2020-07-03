import styled from "styled-components";
import {
  unit,
  colors,
  sectionWrapperStyle,
  defaultButtonStyle,
} from "../../styleUtils";

export const Container = styled.div`
  ${sectionWrapperStyle}
  display: block;
  text-align: center;
  padding: ${unit * 3}px;
`;

export const NextButton = styled.button`
  ${defaultButtonStyle}
  background-color: ${colors.blue};
  color: ${colors.white};
`;
