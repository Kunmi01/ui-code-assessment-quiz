import { css } from "styled-components";
import { fonts, fontSizes } from "./fonts";
import { colors } from "./colors";
import { unit } from "./units";

export const defaultButtonStyle: any = css`
  border: 0;
  border-radius: ${unit}px;
  background-color: ${colors.grey};
  font-family: ${fonts.playBold};
  font-size: ${fontSizes.m};
  color: ${colors.textDark};
  opacity: 0.8;
  padding: ${unit * 2}px ${unit * 4}px;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }

  &.disabled {
    color: ${colors.grey};
    opacity: 0.35;
    pointer-events: none;
    cursor: not-allowed;
  }
`;
