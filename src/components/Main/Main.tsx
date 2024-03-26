import React from "react";
import Header from "../Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import Dashboard from "@/app/dashboard/page";
import Login from "../Login/Login";
import { useSession } from "next-auth/react";

function Main() {
  const { data: session } = useSession();

  return (
    <>
      <Header />
      {session && (
        <>
          <SideMenu />
          <Dashboard />
        </>
      )}
      <Login />
    </>
  );
}

export default Main;
