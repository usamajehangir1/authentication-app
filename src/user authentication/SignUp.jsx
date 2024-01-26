import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { loadStripe } from "@stripe/stripe-js";
import {
  TextField,
  Button,
  Typography,
  CircularProgress,
  Container,
  Grid,
  Box,
  Avatar,
} from "@mui/material";
import { LockOutlined } from "@mui/icons-material";

const SignupForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const stripe = await loadStripe(
        "pk_test_51ObKHJKtMZDHrwRuZeUnnHEPk2YVOiULNUya2iRp7flNyeboDcxojifgs4XeYQSitB7HQYYlY9BVjkhAJEpSJm8K00IVqLlNSe"
      );
      const response = await fetch("https://api.stripe.com/v1/customers", {
        method: "POST",
        headers: {
          Authorization:
            "Bearer sk_test_51ObKHJKtMZDHrwRuYGMuTA9PtN9HHUe6S49TtO0bJSNVfjcOLGIq9f3ksl59qM2VPX6RXopTDSpJl46bWhjj1uIb00G67Csk2B",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(data).toString(),
      });

      const customer = await response.json();
      console.log(customer); 
      setLoading(false);
    } catch (error) {
      console.error("Error creating customer:", error);
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ bgcolor: "secondary.main" }}>
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          sx={{ mt: 1 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="name"
                {...register("name", { required: true })}
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                type="email"
                {...register("email", { required: true })}
                autoComplete="email"
              />
            </Grid>
          </Grid>
          {errors.email && <span>Email is required</span>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : "Sign Up"}
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignupForm;
