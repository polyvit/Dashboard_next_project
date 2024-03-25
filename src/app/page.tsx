"use client";
import styles from "./page.module.css";
import Dashboard from "./dashboard/page";
import Header from "@/components/Header/Header";
import SideMenu from "@/components/SideMenu/SideMenu";
import Login from "@/components/Login/Login";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

interface Props {
  session: Session | null;
}

const Home: React.FC<Props> = ({ session }) => {
  return (
    <main>
      <SessionProvider session={session}>
        <Header />
        <SideMenu />
        <Dashboard />
        <Login />
      </SessionProvider>
    </main>
  );
};

export default Home;
