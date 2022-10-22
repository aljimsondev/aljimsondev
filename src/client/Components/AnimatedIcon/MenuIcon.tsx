import React from "react";

const AnimatedMenuIcon: React.FC<{ active: boolean }> = ({ active }) => {
  const thisRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!active) {
      thisRef.current?.classList.add("active-menu");
      return;
    }
    thisRef.current?.classList.remove("active-menu");
  }, [active]);

  return (
    <div className="menu-icon-base" ref={thisRef}>
      <div className="menu-line" />
      <div className="menu-line" />
      <div className="menu-line" />
      <div className="menu-line" />
    </div>
  );
};

export default AnimatedMenuIcon;
