import React from "react";

const Octagon: React.FC<{
  width?: number;
  height?: number;
  fill?: any;
  strokeColor?: any;
  strokeWidth?: number;
}> = ({
  width = 209,
  height = 204,
  fill = "none",
  strokeColor = "#181718",
  strokeWidth = 17,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 209 204"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M137.313 9H72.6667L9 68.1385V133L72.1769 195H137.313L200 133.954V69.0923L137.313 9Z"
        stroke={strokeColor}
        stroke-width={strokeWidth}
      />
    </svg>
  );
};

export default Octagon;
