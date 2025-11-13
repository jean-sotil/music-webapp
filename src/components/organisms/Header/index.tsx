"use client";

import React, { useState } from "react";
import { useAppContext } from "@/context";

import Button from "../../atoms/Button";

const Header: React.FC<{}> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { content, getLocalizedContent } = useAppContext();

  const lang = content.settings.defaultLang;
  const localizedContent = getLocalizedContent(lang);

  const headerProps = {
    lang: lang,
    name: content.settings.name,
    navItems: [
      { name: localizedContent.navigation.releases, href: "#releases" },
      { name: localizedContent.navigation.listen, href: "#music" },
      { name: localizedContent.navigation.contact, href: "#contact" },
    ],
    availableLangs: ["en", "es"],
  };

  const { name, navItems, availableLangs } = headerProps;

  const navButtons = navItems.map((item) => (
    <Button
      key={item.name}
      href={item.href}
      className="text-black hover:text-primary uppercase font-semibold"
      onClick={() => setIsOpen(false)}
      transparent
      size="md"
    >
      {item.name}
    </Button>
  ));

  const LangButtons = availableLangs.map((l) => (
    <Button
      key={l}
      // TODO:
      // Temporary handler: change the route/state
      onClick={() => console.log(`Switching language to ${l}`)}
      className={`px-2 text-sm font-semibold rounded transition-colors duration-200 uppercase ${
        l === lang
          ? "text-primary"
          : "text-black hover:text-primary"
      }`}
      size="md"
      transparent
    >
      {l}
    </Button>
  ));

  return (
    <header className="fixed top-0 left-0 w-full bg-secondary/90 backdrop-blur-sm z-50 shadow-lg border-b border-primary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            {navButtons}

            {/* Language Switcher (Desktop) */}
            <div className="flex space-x-2 ml-4">{LangButtons}</div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-secondary focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {/* Toggle Icon (Simple Menu/Close based on state) */}
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Logo */}
          <div className="shrink-0">
            {/* Link to the top of the page */}
            <Button
              href="/"
              className="font-extrabold tracking-wider text-black"
              transparent
              size="lg"
            >
              {name}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-primary/50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navButtons}

            {/* Language Switcher (Mobile) */}
            <div className="flex justify-center p-2 space-x-3 border-t border-primary/50 mt-3 pt-3">
              {LangButtons}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
