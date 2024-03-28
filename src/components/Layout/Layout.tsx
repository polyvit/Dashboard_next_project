import React from "react";
import SideMenu from "../SideMenu/SideMenu";
import { useSession } from "next-auth/react";

export default function Layout({ children }) {
  const { data: session } = useSession();
  return (
    <div className="layout" style={{ padding: session ? "0 24px 0 80px" : 0 }}>
      {session && <SideMenu />}
      {children}
    </div>
  );
}
