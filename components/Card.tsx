import React, { PropsWithChildren } from "react";

type CardProps = PropsWithChildren & {
  header: string;
};

const Card: React.FC<CardProps> = ({ header, children }) => {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
      <h3 className="text-slate-900 dark:text-white text-base font-medium tracking-tight">
        {header}
      </h3>
      <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
        {children}
      </p>
    </div>
  );
};

export default Card;
