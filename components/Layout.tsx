import React, { PropsWithChildren } from "react";
import Sidebar from "./Sidebar";

const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="flex flex-col lg:flex-row">
    <Sidebar />

    <div className="w-full py-4 px-8">{children}</div>
  </div>
);

export default Layout;
