import React from "react";
import styled from "styled-components";
import { TableRowProps } from "../Table.types";

const StyledTableRow = styled.tr<TableRowProps>`
  background-color: ${(props) => (props.disabled ? "#f9f9f9" : "transparent")};
  color: ${(props) => (props.disabled ? "#cccccc" : "inherit")};

  &:nth-child(even) {
    background-color: ${(props) => (props.disabled ? "#f5f5f5" : "#f8f9fa")};
  }

  &:hover {
    background-color: ${(props) => (props.disabled ? "#f5f5f5" : "#e9ecef")};
  }

  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
`;

export const TableRow: React.FC<TableRowProps> = ({
  children,
  disabled = false,
}) => {
  return <StyledTableRow disabled={disabled}>{children}</StyledTableRow>;
};
