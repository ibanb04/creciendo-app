import { Grid, MenuItem, Select, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import Typography from "@mui/material/Typography";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";

export const GeneralForm = () => {
  const [reqDate, setreqDate] = useState(new Date());
  const { control } = useFormContext();

  return (
    <>
      <Grid item xs={12} sm={3}>
        <Controller
          control={control}
          name="firstName"
          render={({ field }) => (
            <TextField
              id="first-name"
              label="Primer Nombre"
              variant="outlined"
              placeholder="Primer Nombre aqui"
              margin="normal"
              size="small"
              sx={{ width: "80%" }}
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Controller
          control={control}
          name="middleName"
          render={({ field }) => (
            <TextField
              id="middle-name"
              label="Segundo Nombre"
              variant="outlined"
              placeholder="Segundo Nombre aqui"
              sx={{ width: "80%" }}
              margin="normal"
              size="small"
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Controller
          control={control}
          name="lastName"
          render={({ field }) => (
            <TextField
              id="last-name"
              label="Primer Apellido "
              variant="outlined"
              placeholder="Primer Apellido aqui"
              margin="normal"
              sx={{ width: "80%" }}
              size="small"
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Controller
          control={control}
          name="secondSurname"
          render={({ field }) => (
            <TextField
              id="second-surname"
              label="Segundo Apellido"
              variant="outlined"
              placeholder=" Segundo Apellido aqui"
              margin="normal"
              sx={{ width: "80%" }}
              size="small"
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Typography variant="subtitle2" gutterBottom>
          Tipo de Documento
        </Typography>
        <Controller
          name="idType"
          defaultValue="T"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              size="small"
              label="Tipo de Documento"
              sx={{ width: "80%" }}
            >
              <MenuItem value="T">T.I</MenuItem>
              <MenuItem value="R">Registro civil</MenuItem>
            </Select>
          )}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Controller
          control={control}
          name="idNumber"
          render={({ field }) => (
            <TextField
              id="id-number"
              label="Numero de Documento"
              variant="outlined"
              type="number"
              placeholder="Numero de Documento aqui"
              margin="normal"
              sx={{ width: "80%" }}
              size="small"
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Controller
          control={control}
          name="age"
          render={({ field }) => (
            <TextField
              id="age"
              label="Edad"
              variant="outlined"
              type="number"
              placeholder="Edad aqui"
              margin="normal"
              sx={{ width: "80%" }}
              size="small"
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Typography variant="subtitle2" gutterBottom>
          Genero
        </Typography>
        <Controller
          name="gender"
          defaultValue="M"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              size="small"
              label="Genero"
              sx={{ width: "80%" }}
            >
              <MenuItem value="F">Femenino</MenuItem>
              <MenuItem value="M">Masculino</MenuItem>
            </Select>
          )}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Typography variant="subtitle2" gutterBottom>
          Departamento de nacimiento
        </Typography>
        <Controller
          name="gender"
          defaultValue="M"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              size="small"
              label="Departamento de nacimiento"
              sx={{ width: "80%" }}
            >
              <MenuItem value="magdalena">Magdalena</MenuItem>
              <MenuItem value="altlantico">Atlantico</MenuItem>
            </Select>
          )}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Typography variant="subtitle2" gutterBottom>
          Municipio de nacimiento
        </Typography>
        <Controller
          name="gender"
          defaultValue="M"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              size="small"
              label="Departamento de nacimiento"
              sx={{ width: "80%" }}
            >
              <MenuItem value="magdalena">Magdalena</MenuItem>
              <MenuItem value="altlantico">Atlantico</MenuItem>
            </Select>
          )}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Typography variant="subtitle2" gutterBottom>
          Lugar de expedicion	
        </Typography>
        <Controller
          name="expeditionPlace"
          defaultValue="M"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              size="small"
              label="Lugar de expedicion"
              sx={{ width: "80%" }}
            >
              <MenuItem value="magdalena">Magdalena</MenuItem>
              <MenuItem value="altlantico">Atlantico</MenuItem>
            </Select>
          )}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Controller
          name="reqDate"
          defaultValue={reqDate}
          control={control}
          render={({ field: { onChange, ...restField } }) => (
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Fecha de Nacimiento"
                onChange={(event) => {
                  onChange(event);
                  setreqDate(event);
                }}
                renderInput={(params) => <TextField {...params} sx={{ mt: 3 , width: "80%" }}  size="small"/>}
                {...restField}
              />
            </LocalizationProvider>
          )}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Controller
          control={control}
          name="address"
          render={({ field }) => (
            <TextField
              id="address"
              label="Direccion"
              variant="outlined"
              placeholder=" Direccion aqui"
              margin="normal"
              sx={{ width: "80%" }}
              size="small"
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Controller
          control={control}
          name="barrio"
          render={({ field }) => (
            <TextField
              id="barrio"
              label="barrio"
              variant="outlined"
              placeholder=" Barrio Apellido aqui"
              margin="normal"
              sx={{ width: "80%" }}
              size="small"
              {...field}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Controller
          control={control}
          name="cellphoneNum"
          render={({ field }) => (
            <TextField
              id="cellphoneNum"
              label="Numero de celular"
              variant="outlined"
              placeholder=" Numero de celular aqui"
              margin="normal"
              sx={{ width: "80%" }}
              size="small"
              {...field}
            />
          )}
        />
      </Grid>

    </>
  );
};
