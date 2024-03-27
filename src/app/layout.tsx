"use client";
import React from "react";
import { createContext, useMemo, useState, ReactNode } from "react";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import darkTheme from "@/theme/darkTheme";
import lightTheme from "@/theme/lightTheme";
import Header from "@/components/Header/Header";
import SideMenu from "@/components/SideMenu/SideMenu";
import Layout from "@/components/Layout/Layout";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Data Dashboard",
//   description: "Data Dashboard",
// };

const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function RootLayout({
  children,
  session,
}: Readonly<{
  children: ReactNode;
  session: Session | null;
}>) {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const darkThemeChosen = useMemo(
    () =>
      createTheme({
        ...darkTheme,
      }),
    [mode]
  );

  const lightThemeChosen = useMemo(
    () =>
      createTheme({
        ...lightTheme,
      }),
    [mode]
  );

  return (
    <html lang="en">
      <body className={inter.className}>
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider
            theme={mode === "dark" ? darkThemeChosen : lightThemeChosen}
          >
            <SessionProvider session={session}>
              <CssBaseline />
              <Header ColorModeContext={ColorModeContext} />
              <Layout>{children}</Layout>
            </SessionProvider>
          </ThemeProvider>
        </ColorModeContext.Provider>
      </body>
    </html>
  );
}
