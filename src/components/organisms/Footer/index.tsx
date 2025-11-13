"use client";

import type React from "react";
import { useAppContext } from "@/context";

import Container from "../../atoms/Container";
import Button from "../../atoms/Button";

const Footer: React.FC<{}> = () => {
  const { content, getLocalizedContent, lang } = useAppContext();
  const djName = content.settings.djName;
  const contactEmail = content.contact.email;
  const localizedContent = getLocalizedContent(lang);
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <footer className="w-full bg-background border-t border-primary/50 mt-12 py-6">
        <div className="container mx-auto px-4 text-center text-sm">
          <p className="mb-2">{localizedContent.sections.contactPrompt}</p>
          <Button
            href={`mailto:${contactEmail}`}
            className="bg-transparent hover:bg-transparent text-primary font-semibold transition-colors duration-200 text-lg"
          >
            {contactEmail}
          </Button>

          <p className="mt-6 text-gray-500">
            &copy; {currentYear} {djName}. All Rights Reserved.
          </p>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
