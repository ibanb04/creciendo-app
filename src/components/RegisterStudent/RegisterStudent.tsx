import { Button, Grid, Link } from "@mui/material";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { Link as RouterLink } from "react-router-dom";

export const RegisterStudent = () => {
  return (
    <>
      <Grid item xs={8} sm={10}>
        <Typography variant="h5"> Estudiantes</Typography>
      </Grid>
      <Grid item xs={4} sm={2}>
        <Link
          underline="none"
          color="secondary.main"
          component={RouterLink}
          to="nuevo"
        >
          <Button variant="contained">
            <AddIcon />
            &nbsp; Nuevo
          </Button>
        </Link>
      </Grid>
    </>
  );
};
