import Image from "next/image";
import styles from "./page.module.css";
import Dashboard from "./dashboard/page";
import Header from "@/components/Header/Header";
import SideMenu from "@/components/SideMenu/SideMenu";

export default function Home() {
  return (
    <main>
      <Header />
      <SideMenu />
      <Dashboard />
    </main>
  );
}
