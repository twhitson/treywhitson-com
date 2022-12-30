import React, { PropsWithChildren } from "react";
import Sidebar from "./Sidebar";

const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <>
    <Sidebar />

    <div className="mt-16 p-8 print:mt-0 print:ml-80 lg:mt-0 lg:ml-80 lg:px-32">
      {children}
    </div>
  </>
);

export default Layout;
