import React from "react";
import Image from "next/image";

const LayoutWithBackground: React.FC<{
  children: JSX.Element;
  source: any;
  imagePosition?: "left" | "right";
}> = ({ children, source, imagePosition }) => {
  return (
    <div className="w-[100vw] flex items-center justify-start flex-col relative">
      <div
        className={`abs-container1 ${
          imagePosition === "right" ? "justify-end" : "justify-start"
        }`}
      >
        <Image src={source} />
      </div>
      <div className="container min-w-screen-md max-w-screen-md z-10">
        {children}
      </div>
    </div>
  );
};

export default React.memo(LayoutWithBackground);
