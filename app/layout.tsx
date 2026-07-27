import "@mantine/core/styles.css";
import "../styles/globals.css";
import type { Metadata } from "next";
import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from "@mantine/core";
import { ColorSchemeToggle } from "./components/ColorSchemeToggle";

export const metadata: Metadata = {
  title: "Zachary Pelkey",
  description: "The Homepage of Zachary Pelkey and all things code.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <MantineProvider defaultColorScheme="auto">
          <ColorSchemeToggle />
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
