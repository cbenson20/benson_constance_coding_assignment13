import React from "react";
import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label<LabelProps>`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => (props.disabled ? "#cccccc" : "#333333")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Label: React.FC<LabelProps> = ({ text, disabled = false, htmlFor }) => {
  return (
    <StyledLabel disabled={disabled} htmlFor={htmlFor} text={text}>
      {text}
    </StyledLabel>
  );
};
