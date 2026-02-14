import React from "react";
import { Menu, Plus } from "lucide-react";
import { useSidebar } from "./SideBarContext";

export const PageHeader = ({
  title,
  description,
  onMenuClick,
  onActionClick,
  actionLabel = "Nuovo"
}) => {
  const { toggleSidebar } = useSidebar();

  return (
    <>
      {/* VERSIONE MOBILE */}
      <div className="flex items-center justify-between py-4 mb-2 md:hidden relative">
        {/* Tasto Hamburger */}
        <button
          onClick={toggleSidebar}
          className="p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-xl"
        >
          <Menu size={24} />
        </button>

        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-slate-900">
          {title}
        </h1>

        <button onClick={onActionClick} className="p-2 -mr-2 text-blue-600">
          <Plus size={26} />
        </button>
      </div>

      {/* VERSIONE DESKTOP (uguale a prima) */}
      <div className="hidden md:flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">{title}</h1>
          <p className="text-slate-500 mt-1">{description}</p>
        </div>
        <button onClick={onActionClick} className="bg-slate-900 text-white px-5 py-2.5 rounded-lg flex gap-2">
          <Plus size={20} />
          {actionLabel}
        </button>
      </div>
    </>
  );
};