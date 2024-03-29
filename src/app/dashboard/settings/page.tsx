"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Switch,
  Typography,
} from "@mui/material";

export default function Settings() {
  const [showRevenue, setShowRevenue] = useState<boolean>(true);
  const [showProfit, setShowProfit] = useState<boolean>(true);
  const [showOrders, setShowOrders] = useState<boolean>(true);
  const [showCustomers, setShowCustomers] = useState<boolean>(true);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Settings were changed");
  };
  const handleShowRevenueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setShowRevenue(e.target.checked);
  };
  const handleShowProfitChange = (e: ChangeEvent<HTMLInputElement>) => {
    setShowProfit(e.target.checked);
  };
  const handleShowOrdersChange = (e: ChangeEvent<HTMLInputElement>) => {
    setShowOrders(e.target.checked);
  };
  const handleShowCustomersChange = (e: ChangeEvent<HTMLInputElement>) => {
    setShowCustomers(e.target.checked);
  };

  return (
    <>
      <Box>
        <Typography variant="h4">Dashboard Features</Typography>
        <form onSubmit={handleFormSubmit}>
          <Grid container>
            <Grid item xs={12}>
              <FormControl>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={showRevenue}
                        onChange={handleShowRevenueChange}
                      />
                    }
                    label="Revenue"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={showProfit}
                        onChange={handleShowProfitChange}
                      />
                    }
                    label="Profit"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={showOrders}
                        onChange={handleShowOrdersChange}
                      />
                    }
                    label="Orders"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={showCustomers}
                        onChange={handleShowCustomersChange}
                      />
                    }
                    label="Customers"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Save
              </Button>
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
}
