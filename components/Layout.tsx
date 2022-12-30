import React, { PropsWithChildren } from "react";
import Sidebar from "./Sidebar";

const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <>
    <Sidebar />

    <div className="mt-16 py-4 px-8 lg:mt-0 lg:ml-96">{children}</div>
  </>
);

export default Layout;
