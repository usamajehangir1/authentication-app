import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Slide from "@mui/material/Slide";




function Mainpage()  {


    return (

        <Grid 
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center" >
        <Slide direction="left" in={true} timeout={500}>
           <Typography variant="h1" gutterBottom>
              Welcome to My Portal
           </Typography>
        </Slide>
      </Grid>
    )
}


export default Mainpage;
