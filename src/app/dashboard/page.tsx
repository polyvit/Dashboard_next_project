import { Box, Grid } from "@mui/material";
import React from "react";
import DataRibbon from "@/components/Dashboard/DataRibbon/DataRibbon";
import TransactionsChart from "@/components/Dashboard/TransactionsChart/TransactionsChart";
import TransactionsRow from "@/components/Dashboard/TransactionsRow/TransactionsRow";

export default function Dashboard() {
  return (
    <Box>
      <Grid container gap={2} marginTop={2}>
        <DataRibbon />
        <TransactionsChart />
      </Grid>
      <TransactionsRow />
    </Box>
  );
}
