import React from "react";
import { Card, Grid, Paper, Typography, useTheme } from "@mui/material";
import styles from "./TransactionsChart.module.scss";
import DataChart from "@/components/DataChart/DataChart";
import { lineChartData } from "@/components/mockData";

export type Transaction = {
  title: string;
  value: string;
  changeValue: string;
};

export default function TransactionsChart() {
  const theme = useTheme();

  return (
    <Grid container gap={2}>
      <Paper className={styles.transactions}>
        <div className={styles.chart}>
          <Typography>TransActions per day</Typography>
          <DataChart type={"line"} data={lineChartData} />
        </div>
        <div className={styles.cardWrapper}>
          <Card className={styles.card} variant={"outlined"}>
            <div className={styles.cardTitle}>
              <Typography>Total Products</Typography>
            </div>
            <div className={styles.cardValue}>
              <Typography>1.275</Typography>
              <Typography color={theme.palette.success.main} fontSize={14}>
                428.7%
              </Typography>
            </div>
          </Card>
          <Card className={styles.card} variant={"outlined"}>
            <div className={styles.cardTitle}>
              <Typography>Buy-to-detail</Typography>
            </div>
            <div className={styles.cardValue}>
              <Typography>4.40%</Typography>
              <Typography color={theme.palette.success.main} fontSize={14}>
                899.4%
              </Typography>
            </div>
          </Card>
          <Card className={styles.card} variant={"outlined"}>
            <div className={styles.cardTitle}>
              <Typography>Refunds</Typography>
            </div>
            <div className={styles.cardValue}>
              <Typography>0</Typography>
              <Typography color={theme.palette.success.main} fontSize={14}>
                0
              </Typography>
            </div>
          </Card>
        </div>
      </Paper>
    </Grid>
  );
}
