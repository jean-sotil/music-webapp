"use client";

import type React from "react";

import { useAppContext } from "@/context";

import Button from "../../atoms/Button";
import Container from "../../atoms/Container";

const Footer: React.FC = () => {
  const { content, getLocalizedContent, lang } = useAppContext();
  const { name } = content.settings;
  const contactEmail = content.contact.email;
  const localizedContent = getLocalizedContent(lang);
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <footer className="bg-background border-primary/50 mt-12 w-full border-t py-6">
        <div className="container mx-auto px-4 text-center text-sm">
          <p className="mb-2">{localizedContent.sections.contactPrompt}</p>
          <Button
            href={`mailto:${contactEmail}`}
            className="text-primary bg-transparent text-lg font-semibold transition-colors duration-200 hover:bg-transparent"
          >
            {contactEmail}
          </Button>

          <p className="mt-6 text-gray-500">
            &copy; {currentYear} {name}. All Rights Reserved.
          </p>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
