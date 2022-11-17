import { Link as RouterLink } from "react-router-dom";
import {
  Alert,
  Collapse,
  Button,
  FormControl,
  Grid,
  InputLabel,
  Link,
  IconButton,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm, SubmitHandler, Controller } from "react-hook-form";

import { startCreatingUserWithEmailAndPassword } from "../../store/slices/auth/thunks";
import { useAppDispatch, useAppSelector } from "../../store/useAppDispatch";
import CloseIcon from '@mui/icons-material/Close';
import { resetErrorMessage } from "../../store/slices/auth/auth.slice";
import { useState, useEffect, useMemo } from 'react';

interface IFormInputs {
  displayName: string;
  email: string;
  password: string;
  role: string;
}

export const RegisterPage = () => {
  const { status, errorMessage } = useAppSelector((state) => state.auth);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();
  const dispatch = useAppDispatch();
  const isAutenticated = useMemo(() => status === "checking", [status]);

  const [open, setOpen] = useState(true);
  const onSubmit: SubmitHandler<IFormInputs> = ({
    email,
    password,
    displayName,
    role,
  }) => {
    dispatch(
      startCreatingUserWithEmailAndPassword({
        email,
        password,
        displayName,
        role,
      })
    );
  };
  /*
  useEffect(() => {
    dispatch(resetErrorMessage());
  }, []); */
  return (
    <AuthLayout title="Crear cuenta">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Controller
              name="displayName"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                pattern: { value: /^[A-Za-z]+$/i, message: " solo letras" },
              }}
              render={({ field }) => (
                <TextField
                  label="Nombre completo"
                  type="text"
                  placeholder="Nombre completo"
                  fullWidth
                  value={field.value}
                  onChange={field.onChange}
                  helperText={errors.displayName?.message}
                  error={!!errors.displayName}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: " Email invalido",
                },
              }}
              render={({ field }) => (
                <TextField
                  label="Correo"
                  type="email"
                  placeholder="correo@google.com"
                  fullWidth
                  helperText={errors.email?.message}
                  value={field.value}
                  onChange={field.onChange}
                  inputRef={field.ref}
                  error={!!errors.email}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{
                minLength: {
                  value: 6,
                  message: "Debe tener almenos 6 caraacteres",
                },
                required: true,
              }}
              render={({ field }) => (
                <TextField
                  // {...field}
                  label="Contraseña"
                  type="password"
                  placeholder="Contraseña"
                  fullWidth
                  helperText={
                    errors.password?.type === "minLength" &&
                    errors.password?.message
                  }
                  value={field.value}
                  onChange={field.onChange}
                  inputRef={field.ref}
                  error={!!errors.password}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <Controller
              name="role"
              control={control}
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <FormControl fullWidth>
                  <InputLabel id="user-type">Tipo de Usuario</InputLabel>
                  <Select
                    labelId="user-type"
                    id="demo-simple-select"
                    label="user-type"
                    value={field.value || ""}
                    onChange={field.onChange}
                    error={!!errors.role}
                  >
                    <MenuItem value="ADMIN">Administrador</MenuItem>
                    <MenuItem value="USER">Usuario</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <Collapse in={open}>
              <Alert
                severity="error"
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ display: errorMessage ? "wrap" : "none" }}
              >
                {errorMessage}
              </Alert>
            </Collapse>
          </Grid>


          <Grid item xs={12} sx={{ mt: 2 }}>
            <Button type="submit" variant="contained" fullWidth>
              Crear cuenta
            </Button>
          </Grid>
        </Grid>

        <Grid container direction="row" sx={{ mt: 2 }} justifyContent="end">
          <Typography sx={{ mr: 1 }}>¿Ya tienes cuenta?</Typography>
          <Link component={RouterLink} color="inherit" to="/auth/login">
            ingresar
          </Link>
        </Grid>
      </form>
    </AuthLayout>
  );
};
