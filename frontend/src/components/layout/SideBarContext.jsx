import React, { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const toggleSidebar = () => setIsMobileOpen(!isMobileOpen);
    const closeSidebar = () => setIsMobileOpen(false);

    return (
        <SidebarContext.Provider value={{ isMobileOpen, toggleSidebar, closeSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebar = () => useContext(SidebarContext);