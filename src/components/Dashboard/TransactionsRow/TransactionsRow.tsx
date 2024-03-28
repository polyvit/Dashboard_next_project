import React from "react";
import { Grid, Paper } from "@mui/material";
import styles from "./TransactionsRow.module.scss";
import DataChart from "@/components/DataChart/DataChart";
import { doughnutChartData } from "@/components/mockData";

export default function TransactionsRow() {
  return (
    <Grid container gap={2} className={styles.wrapper}>
      <Grid>
        <Paper className={styles.card}>
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={styles.card}>
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={styles.card}>
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid>
      <Grid>
        <Paper className={styles.card}>
          <p>Transactions per user type</p>
          <DataChart type={"doughnut"} data={doughnutChartData} />
        </Paper>
      </Grid>
    </Grid>
  );
}
