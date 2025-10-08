import React from "react";
import styled from "styled-components";
import { ImgProps } from "./Img.types";

const StyledImage = styled.img<ImgProps>`
  max-width: 100%;
  height: auto;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  filter: ${(props) => (props.disabled ? "grayscale(100%)" : "none")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};

  @media (max-width: 768px) {
    width: ${(props) => (props.width ? "100%" : "auto")};
  }
`;

export const Img: React.FC<ImgProps> = ({
  src,
  alt,
  disabled = false,
  width,
  height,
}) => {
  return (
    <StyledImage
      src={src}
      alt={alt}
      disabled={disabled}
      width={width}
      height={height}
    />
  );
};
