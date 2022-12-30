import Link from "next/link";
import React, { PropsWithChildren } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import useTheme from "../hooks/useTheme";

const Sidebar: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <aside className="w-96 overflow-y-auto border-r border-zinc-200 px-6 pt-4 pb-12 dark:border-zinc-800 lg:block lg:min-h-screen xl:w-80">
      <div className="flex h-full flex-row justify-between lg:flex-col">
        <div>
          <SidebarAction href="mailto:trey.whitson@protonmail.com">
            trey.whitson@protonmail.com
          </SidebarAction>

          <SidebarAction href="/resume">Resume</SidebarAction>
        </div>

        <div className="flex justify-between">
          <a
            href="https://github.com/twhitson/treywhitson-com"
            target="_blank"
            rel="noreferrer"
            className="rounded border-2 border-zinc-300 p-4 dark:border-zinc-800"
          >
            <FiGithub />
          </a>
          <button
            className="rounded border-2 border-zinc-300 p-4 dark:border-zinc-800"
            onClick={toggleTheme}
          >
            {theme === "dark" ? <BiMoon /> : <BiSun />}
          </button>
        </div>
      </div>
    </aside>
  );
};

const SidebarAction: React.FC<PropsWithChildren<{ href: string }>> = ({
  href,
  children,
}) => {
  return (
    <Link href={href} className="">
      {children}
    </Link>
  );
};

export default Sidebar;
