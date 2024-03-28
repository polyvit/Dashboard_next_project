import React from "react";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Paper from "@mui/material/Paper";
import styles from "./DataCard.module.scss";

export interface IDataCardProps {
  title: string;
  value: string;
  description: string;
}

export default function DataCard({
  title,
  value,
  description,
}: IDataCardProps) {
  return (
    <Paper sx={{ padding: "1rem", height: "100%" }} className={styles.dataCard}>
      <div className={styles.header}>
        <Typography fontSize={"h6"} color={"lightslategrey"}>
          {title}
        </Typography>
        <Tooltip
          title={<Typography sx={{ fontSize: 16 }}>{description}</Typography>}
        >
          <IconButton>
            <InfoOutlinedIcon />
          </IconButton>
        </Tooltip>
      </div>
      <Typography variant="h4">{value}</Typography>
    </Paper>
  );
}
