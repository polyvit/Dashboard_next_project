"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Box from "@mui/material/Box";
import Login from "@/components/Login/Login";

export default function SignIn() {
  const { data: session } = useSession();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <h2>
        {session
          ? "Thank you for logging in. Use sidebar menu to see the main content."
          : "Please log in"}
      </h2>
      <Login />
    </Box>
  );
}
