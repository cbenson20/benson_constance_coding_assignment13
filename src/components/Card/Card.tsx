import React from "react";
import styled from "styled-components";
import { CardProps } from "./Card.types";

const CardContainer = styled.div<{ disabled?: boolean }>`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => (props.disabled ? "#f5f5f5" : "#ffffff")};
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${(props) =>
      props.disabled
        ? "0 2px 4px rgba(0,0,0,0.1)"
        : "0 4px 8px rgba(0,0,0,0.2)"};
    transform: ${(props) => (props.disabled ? "none" : "translateY(-2px)")};
  }

  @media (max-width: 768px) {
    margin: 10px;
  }
`;

const CardImage = styled.img<{ disabled?: boolean }>`
  width: 100%;
  height: 200px;
  object-fit: cover;
  filter: ${(props) => (props.disabled ? "grayscale(100%)" : "none")};
`;

const CardContent = styled.div<{ disabled?: boolean }>`
  padding: 20px;
  color: ${(props) => (props.disabled ? "#cccccc" : "#333333")};
`;

const CardTitle = styled.h3<{ disabled?: boolean }>`
  margin: 0 0 10px 0;
  font-size: 1.5rem;
  color: ${(props) => (props.disabled ? "#cccccc" : "#333333")};
`;

const CardText = styled.p<{ disabled?: boolean }>`
  margin: 0;
  font-size: 1rem;
  line-height: 1.5;
  color: ${(props) => (props.disabled ? "#cccccc" : "#666666")};
`;

export const Card: React.FC<CardProps> = ({
  title,
  content,
  imageUrl,
  disabled = false,
  onClick,
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <CardContainer disabled={disabled} onClick={handleClick}>
      {imageUrl && <CardImage src={imageUrl} alt={title} disabled={disabled} />}
      <CardContent disabled={disabled}>
        <CardTitle disabled={disabled}>{title}</CardTitle>
        <CardText disabled={disabled}>{content}</CardText>
      </CardContent>
    </CardContainer>
  );
};
