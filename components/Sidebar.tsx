import Link from "next/link";
import React, { PropsWithChildren, useState } from "react";
import {
  FiFileText,
  FiGithub,
  FiHome,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMenu,
  FiMoon,
  FiSun,
  FiX,
} from "react-icons/fi";
import { ReactElement } from "react-markdown/lib/react-markdown";
import useTheme from "../hooks/useTheme";

const Sidebar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  return (
    <>
      <div className="absolute top-0 left-0 z-20 flex content-center justify-center p-4 lg:hidden">
        <button
          aria-controls="sidebar"
          onClick={() => setShowSidebar(!showSidebar)}
          className="rounded border-2 border-zinc-300 p-4 dark:border-zinc-700"
        >
          {showSidebar ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <aside
        id="sidebar"
        aria-hidden={!showSidebar}
        className={`max-w-96 absolute top-0 z-10 h-full overflow-y-auto border-r border-zinc-200 bg-zinc-100 p-6 pt-24 transition-[margin] duration-300 ease-in-out dark:border-zinc-800 dark:bg-zinc-900 lg:fixed lg:left-0 lg:ml-0 lg:block lg:h-screen lg:min-h-screen lg:w-96 lg:pt-4 xl:w-80 ${
          showSidebar ? "" : "-ml-96"
        }`}
      >
        <div className="flex h-full flex-col justify-between">
          <div>
            <ul>
              <SidebarAction href="/" icon={<FiHome size={20} />}>
                About
              </SidebarAction>
              <SidebarAction href="/resume" icon={<FiFileText size={20} />}>
                Résumé
              </SidebarAction>
            </ul>

            <h4 className="mt-16 mb-2 font-semibold">Contact</h4>
            <ul>
              <SidebarAction
                href="mailto:trey.whitson@protonmail.com"
                icon={<FiMail size={20} />}
              >
                trey.whitson@protonmail.com
              </SidebarAction>
              <SidebarAction
                href="https://www.google.com/maps/place/Seattle,+WA"
                icon={<FiMapPin size={20} />}
              >
                Seattle, WA
              </SidebarAction>
              <SidebarAction
                href="https://github.com/twhitson"
                icon={<FiGithub size={20} />}
              >
                twhitson
              </SidebarAction>
              <SidebarAction
                href="https://www.linkedin.com/in/trey-whitson"
                icon={<FiLinkedin size={20} />}
              >
                trey-whitson
              </SidebarAction>
            </ul>
          </div>

          <div className="flex justify-between">
            <a
              href="https://github.com/twhitson/treywhitson-com"
              target="_blank"
              rel="noreferrer"
              className="rounded border-2 border-zinc-300 p-4 dark:border-zinc-700 print:hidden"
            >
              <FiGithub />
            </a>
            <button
              className="rounded border-2 border-zinc-300 p-4 dark:border-zinc-700 print:hidden"
              onClick={toggleTheme}
            >
              {theme === "dark" ? <FiMoon /> : <FiSun />}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

const SidebarAction: React.FC<
  PropsWithChildren<{ href: string; icon?: ReactElement }>
> = ({ href, icon, children }) => {
  return (
    <li>
      <Link
        href={href}
        target={href.startsWith("http") ? "_blank" : ""}
        className="flex h-12 items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap rounded py-4 px-2 text-sm transition duration-300 ease-in-out hover:bg-zinc-500/25"
      >
        <div>{icon}</div>
        <div>{children}</div>
      </Link>
    </li>
  );
};

export default Sidebar;
