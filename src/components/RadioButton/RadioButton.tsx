import React from "react";
import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

const RadioContainer = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;

const HiddenRadio = styled.input.attrs({ type: "radio" })`
  position: absolute;
  opacity: 0;
`;

const StyledRadio = styled.span<{ checked?: boolean; disabled?: boolean }>`
  width: 20px;
  height: 20px;
  border: 2px solid
    ${(props) =>
      props.disabled ? "#cccccc" : props.checked ? "#007bff" : "#666666"};
  border-radius: 50%;
  background-color: ${(props) => (props.checked ? "#007bff" : "transparent")};
  position: relative;

  &::after {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: ${(props) => (props.checked ? "block" : "none")};
  }
`;

const RadioLabel = styled.span<{ disabled?: boolean }>`
  color: ${(props) => (props.disabled ? "#cccccc" : "#333333")};
  font-size: 16px;
`;

export const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  disabled = false,
  checked = false,
  onChange,
  name,
}) => {
  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  return (
    <RadioContainer disabled={disabled}>
      <HiddenRadio
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        name={name}
      />
      <StyledRadio checked={checked} disabled={disabled} />
      <RadioLabel disabled={disabled}>{label}</RadioLabel>
    </RadioContainer>
  );
};
