import React from "react";
import styled from "styled-components";
import { TextProps } from "./Text.types";

const StyledText = styled.p<TextProps>`
  margin: 0;
  color: ${(props) => (props.disabled ? "#cccccc" : "#333333")};
  font-size: ${(props) => {
    switch (props.size) {
      case "small":
        return "14px";
      case "large":
        return "18px";
      default:
        return "16px";
    }
  }};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};

  @media (max-width: 768px) {
    font-size: ${(props) => {
      switch (props.size) {
        case "small":
          return "12px";
        case "large":
          return "16px";
        default:
          return "14px";
      }
    }};
  }
`;

export const Text: React.FC<TextProps> = ({
  content,
  disabled = false,
  size = "medium",
}) => {
  return (
    <StyledText disabled={disabled} size={size} content={content}>
      {content}
    </StyledText>
  );
};
