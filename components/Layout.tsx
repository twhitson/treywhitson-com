import React, { PropsWithChildren } from "react";
import useTheme from "../hooks/useTheme";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const { setTheme } = useTheme();

  return (
    <div className="flex">
      {children}

      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("dark")}>Dark</button>
    </div>
  );
};

export default Layout;
