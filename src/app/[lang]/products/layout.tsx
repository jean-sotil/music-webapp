import type React from "react";

import Container from "@/components/molecules/Container";

interface ProductsRootLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function ProductsRootLayout({
  children,
  modal,
}: ProductsRootLayoutProps) {
  return (
    <Container className="relative">
      {children}
      {modal}
    </Container>
  );
}
