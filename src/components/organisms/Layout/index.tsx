"use client";

import type React from "react";

import Footer from "../Footer";
import Header from "../Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen text-text-color font-sans antialiased">
      <Header />
      <main className="flex flex-col items-center justify-start">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
