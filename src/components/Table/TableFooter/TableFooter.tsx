import React from "react";
import styled from "styled-components";
import { TableFooterProps } from "../Table.types";

const StyledTableFooter = styled.tfoot<TableFooterProps>`
  background-color: ${(props) => (props.disabled ? "#f5f5f5" : "#6c757d")};
  color: ${(props) => (props.disabled ? "#cccccc" : "#ffffff")};
  font-weight: bold;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};
`;

export const TableFooter: React.FC<TableFooterProps> = ({
  children,
  disabled = false,
}) => {
  return <StyledTableFooter disabled={disabled}>{children}</StyledTableFooter>;
};
