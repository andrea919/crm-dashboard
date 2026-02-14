import React, { createContext, useContext, useState } from "react";

// In questa pagina creiamo un contesto per gestire lo stato della sidebar, 
// in modo che sia accessibile da qualsiasi componente senza dover passare props manualmente a ogni livello.
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