import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Slide from "@mui/material/Slide";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Mainpage() {
  const handleLogout = () => {
    // Clear the token from localStorage and update isLoggedIn state
    localStorage.removeItem("token");
    // setIsLoggedIn(false);
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <Slide direction="left" in={true} timeout={500}>
        <Typography variant="h1" gutterBottom>
          Welcome to Services Portal
        </Typography>
      </Slide>
    </Grid>
  );
}

export default Mainpage;
