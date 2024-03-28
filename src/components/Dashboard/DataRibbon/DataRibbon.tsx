import React from "react";
import { Grid } from "@mui/material";
import DataCard from "../DataCard/DataCard";
import styles from "./DataRibbon.module.scss";

export default function DataRibbon() {
  return (
    <Grid container gap={2} className={styles.dataRibbon}>
      <Grid>
        <DataCard
          title={"Total sales"}
          value={"462"}
          description="The totals of all products which is 462"
        />
      </Grid>
      <Grid>
        <DataCard
          title={"Total value"}
          value={"$15,000"}
          description="The total sales"
        />
      </Grid>
      <Grid>
        <DataCard
          title={"Avg. order value"}
          value={"$132"}
          description="The average order value for all sales"
        />
      </Grid>
      <Grid>
        <DataCard
          title={"Conversion rate"}
          value={"57%"}
          description="How many pitches become sales"
        />
      </Grid>
    </Grid>
  );
}
