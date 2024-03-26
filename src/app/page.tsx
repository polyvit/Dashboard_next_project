"use client";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import Main from "@/components/Main/Main";

interface Props {
  session: Session | null;
}

const Home: React.FC<Props> = ({ session }) => {
  return (
    <main>
      <SessionProvider session={session}>
        <Main />
      </SessionProvider>
    </main>
  );
};

export default Home;
