import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from "react-router-dom";


const LoggedIn = () => {
  const [authenticated, setAuthenticated] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/Login")
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      {authenticated ? (
        <div>
          <Typography variant="h4" align="center">
            You are now successfully logged in!
          </Typography>
          <Button variant="contained" color="primary" onClick={handleLogout} >
            Logout
          </Button>
        </div>
      ) : (
        <Typography variant="h4" align="center">
          You are Logged Out.
        </Typography>
      )}
    </Box>
  );
};

export default LoggedIn;
