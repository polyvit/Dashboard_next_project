import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import styles from "./page.module.scss";
import DataRibbon from "@/components/Dashboard/DataRibbon/DataRibbon";

export default function Dashboard() {
  return (
    <Box>
      <DataRibbon />
    </Box>
  );
}
