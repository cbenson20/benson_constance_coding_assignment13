import React, { useState } from "react";
import styled from "styled-components";
import { DropdownProps } from "./Dropdown.types";

const StyledSelect = styled.select<{ disabled?: boolean }>`
  padding: 10px;
  border: 2px solid ${(props) => (props.disabled ? "#cccccc" : "#007bff")};
  border-radius: 4px;
  background-color: ${(props) => (props.disabled ? "#f5f5f5" : "#ffffff")};
  color: ${(props) => (props.disabled ? "#666666" : "#333333")};
  font-size: 16px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  width: 100%;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 12px;
  }
`;

export const Dropdown: React.FC<DropdownProps> = ({
  options,
  disabled = false,
  selectedValue,
  onSelect,
}) => {
  const [value, setValue] = useState(selectedValue || options[0]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    onSelect?.(newValue);
  };

  return (
    <StyledSelect disabled={disabled} value={value} onChange={handleChange}>
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};
