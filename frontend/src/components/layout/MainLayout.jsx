import React from "react";
import Sidebar from "../generali/Sidebar";

import { useSidebar } from "./SideBarContext";

const DashboardLayout = ({ children }) => {
  const { isMobileOpen, closeSidebar } = useSidebar();

  return (
    <div className="flex h-screen w-full bg-slate-50 overflow-hidden">
      <Sidebar isOpen={isMobileOpen} onClose={closeSidebar} />
      <main className="flex-1 flex flex-col h-full relative overflow-hidden overflow-y-auto">
        <div className="p-4 md:p-8 pb-20">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;