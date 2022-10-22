import React from "react";

const MenuButton: React.FC<{ onClick: () => void; icon: JSX.Element }> = ({
  onClick,
  icon,
}) => {
  return (
    <div className="menu-button" role="button" onClick={onClick}>
      {icon}
    </div>
  );
};
export default MenuButton;
