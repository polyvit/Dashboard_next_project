"use client";
import { useTheme } from "@mui/material/styles";
import styled from "@emotion/styled";
import { Paper, Button } from "@mui/material";
import { useSession, signOut, signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";
import styles from "./Footer.module.scss";
import { ROUTES } from "@/helpers/routes";

export default function Footer() {
  const { data: session } = useSession();
  const theme = useTheme();

  const FooterLink = styled(Link)`
    color: ${theme.palette.text.primary};
  `;

  return (
    <footer className={styles.footer}>
      <Paper sx={{ width: "100%" }} color={"#262626"}>
        <ul role="menu">
          <li>
            <FooterLink href={ROUTES.HOME}>Home</FooterLink>
          </li>
          <li>
            <FooterLink href={ROUTES.ANALYTICS}>Analytics</FooterLink>
          </li>
          <li>
            <FooterLink href={ROUTES.PROFILE}>Profile</FooterLink>
          </li>
          <li>
            <FooterLink href={ROUTES.SETTINGS}>Settings</FooterLink>
          </li>
          <li>
            <FooterLink href={ROUTES.TC}>Terms & Conditions</FooterLink>
          </li>
          <li>
            <FooterLink href={ROUTES.ACCESSIBILITY}>
              Accessibility statement
            </FooterLink>
          </li>
          <li>
            <Button
              variant={"text"}
              color={session ? "error" : "success"}
              onClick={() => (session ? signOut() : signIn())}
            >
              {session ? "Sign Out" : "Sign In"}
            </Button>
          </li>
        </ul>
      </Paper>
    </footer>
  );
}
