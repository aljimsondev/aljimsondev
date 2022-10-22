import React from "react";
import Switch from "../Switch";
import Logo from "../Logo";
import Link from "./Link";
import AnimatedMenuIcon from "../AnimatedIcon/MenuIcon";
import MenuButton from "../Button/Menu";
import { Context } from "../../Context/Store";

export type NavbarProps = {
  aboutActive?: boolean;
  projectsActive?: boolean;
  blogsActive?: boolean;
  artworksActive?: boolean;
};

const Navbar: React.FC<NavbarProps> = ({
  aboutActive = false,
  artworksActive = false,
  blogsActive = false,
  projectsActive = false,
}) => {
  const { dark, toogleTheme, openMenu, toogleMenu } = React.useContext(Context);

  const links = [
    {
      name: "About AL",
      link: "/about",
      active: aboutActive,
    },
    {
      name: "Projects",
      link: "/projects",
      active: projectsActive,
    },
    {
      name: "Blogs",
      link: "/blogs",
      active: blogsActive,
    },
    {
      name: "Artworks",
      link: "/artworks",
      active: artworksActive,
    },
  ];

  const toogleSwitch = () => {
    toogleTheme((prevState) => !prevState);
  };
  const toogleMainMenu = () => {
    toogleMenu((prevState) => !prevState);
  };

  React.useEffect(() => {
    const root = window.document.documentElement;
    if (dark) {
      if (root?.classList.contains("light")) {
        root.classList.remove("light");
      }
      root.classList.add("dark");
    } else {
      if (root?.classList.contains("dark")) {
        root.classList.remove("dark");
      }
      root.classList.add("light");
    }
  }, [dark]);

  return (
    <nav className="navbar-base">
      <div className="flex items-center justify-center">
        <Logo />
      </div>
      <div className="navbar-content">
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
        <div className="hidden xs:block">
          <Switch active={dark} toogle={toogleSwitch} />
        </div>
        <div className="block xs:hidden">
          <MenuButton
            onClick={toogleMainMenu}
            icon={<AnimatedMenuIcon active={!openMenu} />}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
