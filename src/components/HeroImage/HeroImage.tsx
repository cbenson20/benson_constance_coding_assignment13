import React from "react";
import styled from "styled-components";
import { HeroImageProps } from "./HeroImage.types";

const HeroContainer = styled.div<{ disabled?: boolean; height?: string }>`
  position: relative;
  width: 100%;
  height: ${(props) => props.height || "400px"};
  overflow: hidden;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const HeroImg = styled.img<{ disabled?: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: ${(props) => (props.disabled ? "grayscale(100%)" : "none")};
`;

const HeroContent = styled.div<{ disabled?: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: ${(props) => (props.disabled ? "#cccccc" : "#ffffff")};
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const HeroTitle = styled.h1<{ disabled?: boolean }>`
  font-size: 3rem;
  margin: 0;
  color: ${(props) => (props.disabled ? "#cccccc" : "#ffffff")};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled.p<{ disabled?: boolean }>`
  font-size: 1.5rem;
  margin: 10px 0 0 0;
  color: ${(props) => (props.disabled ? "#cccccc" : "#ffffff")};

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const HeroImage: React.FC<HeroImageProps> = ({
  src,
  alt,
  title,
  subtitle,
  disabled = false,
  height,
}) => {
  return (
    <HeroContainer disabled={disabled} height={height}>
      <HeroImg src={src} alt={alt} disabled={disabled} />
      <HeroContent disabled={disabled}>
        <HeroTitle disabled={disabled}>{title}</HeroTitle>
        {subtitle && (
          <HeroSubtitle disabled={disabled}>{subtitle}</HeroSubtitle>
        )}
      </HeroContent>
    </HeroContainer>
  );
};
