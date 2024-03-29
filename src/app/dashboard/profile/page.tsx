"use client";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import {
  Box,
  Typography,
  Paper,
  Grid,
  Avatar,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";

export interface IFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  receiveEmails: boolean;
}

export default function Profile() {
  const { data: session } = useSession();

  const [formData, setFormData] = useState<IFormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    receiveEmails: false,
  });

  useEffect(() => {
    if (session && session.user && session.user.name) {
      const name = session.user.name as string;
      const email = session.user.email as string;
      setFormData((prevState) => ({
        ...prevState,
        firstName: name.split(" ")[0],
        lastName: name.split(" ")[1],
        email: email,
      }));
    }
  }, [session]);

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleFormChange = ({
    target: { name, value, checked },
  }: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "receiveEmail" ? checked : value,
    }));
  };

  return (
    <>
      <Box>
        <Typography variant="h4" sx={{ paddingBottom: 4 }}>
          Hey {session ? session?.user?.name : "User"}, welcome to your profile
        </Typography>
        <Paper sx={{ padding: "2rem 2rem" }}>
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={8} md={6}>
              <Box display="flex" justifyContent="center">
                <Avatar
                  sx={{
                    height: 100,
                    width: 100,
                    marginBottom: 2,
                  }}
                  src={session?.user?.image as string}
                />
              </Box>
              <form style={{ maxWidth: 600 }} onSubmit={handleFormSubmit}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="First name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleFormChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      fullWidth
                      label="Last name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleFormChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      label="Email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleFormChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      type="password"
                      label="Password"
                      name="password"
                      value={formData.password}
                      onChange={handleFormChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      type="password"
                      label="Confirm Password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleFormChange}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="receiveEmails"
                          color="primary"
                          checked={formData.receiveEmails}
                          onChange={handleFormChange}
                        />
                      }
                      label="Receive analytics emails"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" type="submit" color="primary">
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </>
  );
}
