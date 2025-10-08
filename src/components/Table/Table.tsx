import React from "react";
import styled from "styled-components";
import { TableProps } from "./Table.types";

const StyledTable = styled.table<TableProps>`
  width: 100%;
  border-collapse: collapse;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Table: React.FC<TableProps> = ({ children, disabled = false }) => {
  return <StyledTable disabled={disabled}>{children}</StyledTable>;
};
