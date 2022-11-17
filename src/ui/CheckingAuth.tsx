import { CircularProgress, Grid } from "@mui/material";

const CheckingAuth = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
    >
      <Grid item xs={12}>
        <CircularProgress color="secondary" />
      </Grid>
    </Grid>
  );
};

export default CheckingAuth;
