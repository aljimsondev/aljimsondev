import React from "react";
import { HiMoon, HiSun } from "react-icons/hi";
import switchBorder from "../../../../public/Assets/rounded-border.svg";
import thumbBorder from "../../../../public/Assets/round-full.svg";
import Image from "next/image";

const Switch: React.FC<{
  active: boolean;
  toogle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ active, toogle }) => {
  const switchRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!switchRef.current?.classList.contains("switch-active") && active) {
      switchRef.current?.classList.add("switch-active");
    } else {
      switchRef.current?.classList.remove("switch-active");
    }
    return () => {
      //clean up
      switchRef.current?.classList.remove("switch-active");
    };
  }, [active]);

  return (
    <div ref={switchRef} className="switch-base relative select-none">
      <div className="flex absolute w-full h-full items-center">
        <Image src={switchBorder} layout="fixed" />
      </div>
      <span className="switch-thumb">
        <i className="absolute">
          {active ? <HiSun size={20} /> : <HiMoon size={20} />}
        </i>
        <Image src={thumbBorder} layout="fixed" width="100%" height="100%" />
      </span>
      <div className="switch-input-base">
        <input onChange={toogle} className="switch" type="checkbox" />
      </div>
    </div>
  );
};

export default Switch;
