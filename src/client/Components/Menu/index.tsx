import React from "react";
import { Context } from "../../Context/Store";
import AnimatedMenuIcon from "../AnimatedIcon/MenuIcon";
import MenuButton from "../Button/Menu";
import Logo from "../Logo";

const Menu: React.FC = () => {
  const { openMenu, toogleMenu } = React.useContext(Context);

  const handleToogleMenu = () => {
    toogleMenu((prevMenu) => !prevMenu);
  };

  return (
    <div className="menu-base">
      <div className="menu">
        <Logo />
        <div className="menu-head">
          <div className="absolute right-0 top-0 m-4 mr-[2.5rem]">
            <MenuButton
              onClick={handleToogleMenu}
              icon={<AnimatedMenuIcon active={!openMenu} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
