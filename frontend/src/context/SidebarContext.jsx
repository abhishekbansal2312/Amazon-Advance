import React, { createContext, useState, useContext } from "react";

// Create Context
const SidebarContext = createContext();

// Provider Component
export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Hook to use Sidebar Context
export const useSidebar = () => useContext(SidebarContext);
