"use client";

import type React from "react";

import Footer from "../Footer";
import Header from "../Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="text-text-color min-h-screen font-sans antialiased">
      <Header />
      <main className="flex flex-col items-center justify-start">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
