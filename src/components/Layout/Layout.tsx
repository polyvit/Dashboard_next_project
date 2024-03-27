import React from "react";
import SideMenu from "../SideMenu/SideMenu";
import { useSession } from "next-auth/react";

export default function Layout({ children }) {
  const { data: session } = useSession();
  return (
    <div className="layout">
      {session && <SideMenu />}
      {children}
    </div>
  );
}
