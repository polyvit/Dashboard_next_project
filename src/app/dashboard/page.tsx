import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import styles from "./page.module.scss";

export default function Dashboard() {
  return (
    <Box>
      <Grid container gap={2} className={styles.container}>
        <Grid>
          <Paper className={styles.card}>1</Paper>
        </Grid>
        <Grid>
          <Paper className={styles.card}>2</Paper>
        </Grid>
        <Grid>
          <Paper className={styles.card}>3</Paper>
        </Grid>
      </Grid>
      <Grid xs={12} marginY={2}>
        <Paper className={styles.card}>4</Paper>
      </Grid>
    </Box>
  );
}
