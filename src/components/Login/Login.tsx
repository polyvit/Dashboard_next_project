"use client";

import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Button from "@mui/material/Button";

export default function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <Button variant="contained" color="error" onClick={() => signOut()}>
          Sign out
        </Button>
      </>
    );
  }

  return (
    <>
      Please log in <br />
      <Button variant="contained" color="success" onClick={() => signIn()}>
        Sign in
      </Button>
    </>
  );
}
