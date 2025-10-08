import React from "react";
import logo from "../assets/logo.png";

interface LogoProps {
  width?: number | string;
  height?: number | string;
  className?: string;
  alt?: string;
}

export const Logo: React.FC<LogoProps> = ({
  width = 120,
  height = "auto",
  className = "",
  alt = "App Logo",
}) => {
  return (
    <img
      src={logo}
      alt={alt}
      width={width}
      height={height}
      className={className}
      style={{ objectFit: "contain" }}
    />
  );
};