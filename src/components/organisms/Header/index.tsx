"use client";

import type React from "react";
import { useState } from "react";

import { useAppContext } from "@/context";

import Button from "../../atoms/Button";

const Header: React.FC = () => {
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
      className="hover:text-primary font-semibold text-black uppercase"
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
      className={`rounded px-2 text-sm font-semibold uppercase transition-colors duration-200 ${
        l === lang ? "text-primary" : "hover:text-primary text-black"
      }`}
      size="md"
      transparent
    >
      {l}
    </Button>
  ));

  const svgProps = {
    className: "h-6 w-6",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg",
  };

  return (
    <header className="bg-secondary/90 border-primary/50 fixed top-0 left-0 z-50 w-full border-b shadow-lg backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-4 md:flex">
            {navButtons}

            <div className="ml-4 flex space-x-2">{LangButtons}</div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="text-primary hover:text-secondary inline-flex items-center justify-center rounded-md p-2 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg aria-label="Closed menu" {...svgProps}>
                  <title>Closed menu</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg aria-label="Open menu" {...svgProps}>
                  <title>Open menu</title>
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
        <div className="bg-background border-primary/50 border-t md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            {navButtons}

            <div className="border-primary/50 mt-3 flex justify-center space-x-3 border-t p-2 pt-3">
              {LangButtons}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
