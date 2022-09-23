import { Button, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import AddIcon from '@mui/icons-material/Add';


export const RegisterStudent = () => {
  return (
    <>
      <Grid item xs={8} sm={10}>
        <Typography variant="h5"> Estudiantes</Typography>
      </Grid>
      <Grid item xs={4} sm={2}>
        <Button  href="estudiantes/nuevo" variant="contained"><AddIcon/>&nbsp; Nuevo</Button>
      </Grid>
    </>
  );
};
