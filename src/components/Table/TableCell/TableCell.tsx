import React from "react";
import styled from "styled-components";
import { TableCellProps } from "../Table.types";

const StyledTableCell = styled.td.withConfig({
  shouldForwardProp: (prop) => prop !== "isHeader" && prop !== "disabled",
})<TableCellProps>`
  padding: 12px;
  border: 1px solid #dee2e6;
  color: ${(props) => (props.disabled ? "#cccccc" : "#333333")};
  background-color: ${(props) =>
    props.isHeader ? (props.disabled ? "#f5f5f5" : "#e9ecef") : "transparent"};
  font-weight: ${(props) => (props.isHeader ? "bold" : "normal")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "default")};

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

export const TableCell: React.FC<TableCellProps> = ({
  children,
  disabled = false,
  isHeader = false,
}) => {
  // ✅ Render <th> if it's a header, otherwise <td>
  const Element = isHeader ? "th" : "td";

  return (
    <StyledTableCell as={Element} isHeader={isHeader} disabled={disabled}>
      {children}
    </StyledTableCell>
  );
};
