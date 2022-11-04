import React from "react";
import { Context } from "../../Context/Store";
import AnimatedMenuIcon from "../AnimatedIcon/MenuIcon";
import MenuButton from "../Button/Menu";
import Logo from "../Logo";
import Link from "../Navbar/Link";
import Stroke from "../Stroke";
import Switch from "../Switch";

const Menu: React.FC<{
  aboutActive?: boolean;
  projectsActive?: boolean;
  blogsActive?: boolean;
  artworksActive?: boolean;
}> = ({ aboutActive, artworksActive, blogsActive, projectsActive }) => {
  const { openMenu, toogleMenu } = React.useContext(Context);

  const handleToogleMenu = () => {
    toogleMenu((prevMenu) => !prevMenu);
  };
  const links = [
    {
      name: "About AL",
      link: "/about",
      active: aboutActive || false,
    },
    {
      name: "Projects",
      link: "/projects",
      active: projectsActive || false,
    },
    {
      name: "Blogs",
      link: "/blogs",
      active: blogsActive || false,
    },
    {
      name: "Artworks",
      link: "/artworks",
      active: artworksActive || false,
    },
  ];
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
        <div className="relative">
          <div className="flex items-start flex-col my-3">
            <div className="flex justify-start items-center">
              <p className="app-text-color text-base">Theme:</p>
              <h1 className="app-text-color text-base font-semibold">Light</h1>
            </div>
            <div className="flex items-start my-4 ">
              <Switch active={true} toogle={() => {}} />
            </div>
            <Stroke />
            <ul className="my-2">
              {links.map((data, index) => {
                return (
                  <Link
                    link={data.link}
                    name={data.name}
                    active={data.active}
                    key={index + data.name}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
