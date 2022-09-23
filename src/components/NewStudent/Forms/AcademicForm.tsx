import { Grid, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

export const AcademicForm = () => {
  const { control } = useFormContext();
  return (
    <>
      <Grid item xs={12} sm={3}>
        <Controller
          control={control}
          name="colegio"
          render={({ field }) => (
            <TextField
              id="colegio"
              label="colegio"
              variant="outlined"
              placeholder="Colegio aqui"
              margin="normal"
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Controller
          control={control}
          name="ciudad"
          render={({ field }) => (
            <TextField
              id="ciudad"
              label="Ciudad"
              variant="outlined"
              placeholder="Ciudad aqui"
              margin="normal"
              {...field}
            />
          )}
        />
      </Grid>
    </>
  );
};
