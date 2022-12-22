import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import {
  Alert,
  Button,
  Collapse,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { FC } from 'react'
import { useMemo, useState } from "react";
import { AuthLayout } from "../../layout/AuthLayout";
import { useAppDispatch, useAppSelector } from "../../../store/useAppDispatch";
import { Controller, useForm } from "react-hook-form";
import { startSingInWithEmailAndPassword } from "../../../store/slices/auth/thunks";
import { resetErrorMessage } from "../../../store/slices/auth/auth.slice";

interface IFormInputs {
  displayName: string;
  email: string;
  password: string;
  role: string;
}


export const Login: FC = () => {
  const { status, errorMessage } = useAppSelector((state) => state.auth);
  const [open, setOpen] = useState(true);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  const isAutenticated = useMemo(() => status === "checking", [status]);

  const onSubmit = ({ email, password }: IFormInputs) => {
    dispatch(startSingInWithEmailAndPassword(email, password));
  };

  const handleClick = () => {
    dispatch(resetErrorMessage());
    navigate('/auth/register');
  };
  /*
    useEffect(() => {
      dispatch(resetErrorMessage());
    }, []);*/
  return (
    <AuthLayout title="Iniciar Sesión">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container>
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
                  color="secondary"
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
                  color="secondary"
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
          <Grid container spacing={2} sx={{ mb: 2, mt: 0.5 }}>
            <Grid item xs={12} >
              <Button
                disabled={isAutenticated}
                type="submit"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            direction="row"
            justifyContent="end"
            sx={{ cursor: "pointer", textDecoration: 'underline' }}
            onClick={handleClick}
          >
            Crear una cuenta
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
