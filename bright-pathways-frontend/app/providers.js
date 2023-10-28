// app/providers.tsx
"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ClerkProvider } from "@clerk/nextjs";

export function Providers({ children }) {
  return (
    <NextUIProvider>
      <ClerkProvider>{children}</ClerkProvider>
    </NextUIProvider>
  );
}
