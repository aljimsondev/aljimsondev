import React from "react";
import { ContextProps } from "./types";

const defaultValues = {
  dark: false,
  toogleTheme: () => {},
  openMenu: false,
  toogleMenu: () => {},
};

export const Context = React.createContext<ContextProps>(defaultValues);

const Store: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [dark, setMode] = React.useState(false);
  const [openMenu, setMenuMode] = React.useState(false);

  return (
    <Context.Provider
      value={{
        dark: dark,
        toogleTheme: setMode,
        openMenu: openMenu,
        toogleMenu: setMenuMode,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Store;
