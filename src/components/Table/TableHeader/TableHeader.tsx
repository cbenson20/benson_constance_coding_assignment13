import React from "react";
import styled from "styled-components";
import { TableHeaderProps } from "../Table.types";

const StyledTableHeader = styled.thead<TableHeaderProps>`
  background-color: ${(props) => (props.disabled ? "#f5f5f5" : "#007bff")};
  color: ${(props) => (props.disabled ? "#cccccc" : "#ffffff")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
`;

export const TableHeader: React.FC<TableHeaderProps> = ({
  children,
  disabled = false,
}) => {
  return <StyledTableHeader disabled={disabled}>{children}</StyledTableHeader>;
};
