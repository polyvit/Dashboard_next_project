import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import DataRibbon from "@/components/Dashboard/DataRibbon/DataRibbon";
import TransactionsChart from "@/components/Dashboard/TransactionsChart/TransactionsChart";

export default function Dashboard() {
  return (
    <Box>
      <DataRibbon />
      <TransactionsChart />
    </Box>
  );
}
