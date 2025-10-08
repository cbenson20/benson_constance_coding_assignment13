import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) =>
    props.disabled ? "#cccccc" : props.backgroundColor || "#007bff"};
  color: ${(props) => (props.disabled ? "#666666" : "#ffffff")};
  font-size: 16px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.disabled
        ? "#cccccc"
        : props.backgroundColor
        ? "#0056b3"
        : "#0056b3"};
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px 24px;
  }
`;

export const Button: React.FC<ButtonProps> = ({
  text,
  disabled = false,
  backgroundColor,
  onClick,
}) => {
  return (
    <StyledButton
      disabled={disabled}
      backgroundColor={backgroundColor}
      onClick={onClick}
      text={text}
    >
      {text}
    </StyledButton>
  );
};
