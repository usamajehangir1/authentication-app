import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Slide from "@mui/material/Slide";

function Mainpage() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-evenly"
      alignItems="center"
    >
      <Slide direction="left" in={true} timeout={500}>
        <Typography variant="h1" gutterBottom>
          Welcome to Cars Hub
        </Typography>
      </Slide>
    </Grid>
  );
}

export default Mainpage;
