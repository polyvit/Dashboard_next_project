"use client";
import React from "react";
import SideMenu from "../SideMenu/SideMenu";
import { useSession } from "next-auth/react";
import Footer from "../Footer/Footer";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const { data: session } = useSession();
  const path = usePathname();

  return (
    <div className="layout" style={{ padding: session ? "0 24px 0 80px" : 0 }}>
      {session && <SideMenu />}
      {children}
      {session && <Footer />}
    </div>
  );
}
