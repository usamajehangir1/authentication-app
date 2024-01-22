import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bg from "../images/signin.jpg";
import bgimg from "../images/backimg.jpg";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useState, forwardRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { v4 as uuidv4 } from 'uuid';

const onSubmit = async (data) => {
    console.log(data);
    // Object.assign(data, { gender: gender });
    const {email, password} = data;
    // setOpen(true);

    
 
const url = 'https://jwt-bearer-auth1.p.rapidapi.com/register';


const options = {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
    'Content-Type': 'application/json',
    'X-RapidAPI-Key': 'bd61944afdmsh6605bfe1720e716p1bed45jsn5bdf57fe32dc',
    'X-RapidAPI-Host': 'jwt-bearer-auth1.p.rapidapi.com'
  },
  body: JSON.stringify({
    email,
    password,
    role: uuidv4()
})
  
};
try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
};
const schema = yup
  .object({
    username: yup.string().min(3).max(10).required(),
    password: yup.string().min(3).required(),
    confirmpassword: yup.string().required(),
    email: yup.string().email().required(),
    mobile: yup.number().positive().min(6).required(),
  })
  .required();

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const newcenter = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundSize: "cover",
    height: "70vh",
    minHeight: "500px",
    backgroundColor: "#000000",
    transition: "opacity 0.5s ease-in-out",
    opacity: 1,
}

const boxstyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  height: "70%",
  bgcolor: "background.paper",
  boxShadow: 24,
};

const center = {
  position: "relative",
  top: "50%",
  left: "30%",
};

export default function Register() {
  const [open, setOpen] = useState(false);
  const vertical = "top";
  const horizontal = "right";
  const navigate = useNavigate();
  const [gender, setGender] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleChange = (event) => {
    setGender(event.target.value);
  };

  function TransitionLeft(props) {
    return <Slide {...props} direction="left" />;
  }

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        TransitionComponent={TransitionLeft}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Failed! Enter correct username and password.
        </Alert>
      </Snackbar>
      <div
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5",
        }}
      >
        <Box sx={boxstyle}>
          <Grid container>
            <Grid item xs={12} sm={12} lg={6}>
            <Container>
                    <Box height={-10} />
                    <Box sx={newcenter} 
                                    style={{
                                        backgroundSize: "cover",
                                        height: "70vh",
                                        minHeight: "500px",
                                        backgroundColor: "#000000",
                                      }}>
                    <Slide direction="down" in={true} timeout={500}>
                      <Typography component="h1" variant="h1" style={{ color: "#ffffff", fontSize: "48px" }} >
                        Welcome New Users!
                      </Typography>
                      </Slide>
                    </Box>
            </Container>
            </Grid>
            <Grid item xs={12} sm={12} lg={6}>
              <Box
                style={{
                  backgroundSize: "cover",
                  height: "70vh",
                  minHeight: "500px",
                  backgroundColor: "#000000",
                }}
              >
                <ThemeProvider theme={darkTheme}>
                  <Container>
                    <Box height={25} />
                    <Box sx={center}>
                      <Typography component="h1" variant="h4">
                        Create Account
                      </Typography>
                    </Box>
                    <Box sx={{ mt: 2 }} />
                    <form onSubmit={handleSubmit(onSubmit)} >
                      <Grid container spacing={1}>
                        <Grid item xs={12}>
                          <TextField
                            {...register("username")}
                            fullWidth
                            label="Username"
                            size="small"
                            name="username"
                          />
                          {errors.username && (
                            <span style={{ color: "#f7d643", fontSize: "12px" }}>
                              {errors.username?.message}
                            </span>
                          )}
                        </Grid>
                        <Grid item xs={12}>
                          <TextField
                            fullWidth
                            id="email"
                            label="Email"
                            type="email"
                            name="email"
                            size="small"
                            {...register("email")}
                            aria-invalid={errors.email ? "true" : "false"}
                          />
                          {errors.email && (
                            <span style={{ color: "#f7d643", fontSize: "12px" }}>
                              {errors.email?.message}
                            </span>
                          )}
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            {...register("password")}
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            size="small"
                            id="password"
                            autoComplete="new-password"
                          />
                          {errors.password && (
                            <span style={{ color: "#f7d643", fontSize: "12px" }}>
                              {errors.password?.message}
                            </span>
                          )}
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            fullWidth
                            {...register("confirmpassword")}
                            name="confirmpassword"
                            label="Confirm Password"
                            type="password"
                            size="small"
                            id="confirmpassword"
                            autoComplete="new-password"
                          />
                          {errors.password && (
                            <span style={{ color: "#f7d643", fontSize: "12px" }}>
                              {errors.confirmpassword?.message}
                            </span>
                          )}
                        </Grid>
                        <Grid item xs={6}>
                          <TextField
                            {...register("mobile")}
                            fullWidth
                            name="mobile"
                            label="Contact Number"
                            type="number"
                            size="small"
                          />
                          {errors.mobile && (
                            <span style={{ color: "#f7d643", fontSize: "12px" }}>
                              {errors.mobile?.message}
                            </span>
                          )}
                        </Grid>
                        <Grid item xs={6}>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">
                              Gender
                            </InputLabel>
                            <Select
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={gender}
                              label="Gender"
                              size="small"
                              onChange={handleChange}
                            >
                              <MenuItem value="male">Male</MenuItem>
                              <MenuItem value="Female">Female</MenuItem>
                              <MenuItem value="Other">Other</MenuItem>
                            </Select>
                          </FormControl>
                          {errors.gender && (
                            <span style={{ color: "#f7d643", fontSize: "12px" }}>
                              {errors.gender?.message}
                            </span>
                          )}
                        </Grid>
                        <Grid item xs={12} sx={{ ml: "5em", mr: "5em" }}>
                          <Button 
                            type="submit"
                            variant="contained"
                            fullWidth="true"
                            size="large"
                            sx={{
                              mt: "15px",
                              mr: "20px",
                              borderRadius: 28,
                              color: "#ffffff",
                              minWidth: "170px",
                              backgroundColor: "#FF9A01",
                            }}
                          >
                            Register
                          </Button>
                        </Grid>
                        <Grid item xs={12}>
                          <Stack direction="row" spacing={2}>
                            <Typography
                              variant="body1"
                              component="span"
                              style={{ marginTop: "10px" }}
                            >
                              Already have an Account?{" "}
                              <span
                                style={{ color: "#beb4fb", cursor: "pointer" }}
                                onClick={() => {
                                  navigate("/login");
                                }}
                              >
                                Sign In
                              </span>
                            </Typography>
                          </Stack>
                          <Typography
                              variant="body1"
                              component="span"
                              style={{ marginTop: "10px" }}
                            >
                              Go back to Homepage -- 
                              <span
                                style={{ color: "#beb4fb", cursor: "pointer" }}
                                onClick={() => {
                                  navigate("/");
                                }}
                              >
                                {" "}
                                Homepage
                              </span>
                            </Typography>
                        </Grid>
                      </Grid>
                    </form>
                  </Container>
                </ThemeProvider>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
}
