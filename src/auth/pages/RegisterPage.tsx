import { Link as RouterLink } from "react-router-dom";
import {
    Button,
    Grid,
    Link,
    TextField,
    Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm, SubmitHandler, Controller } from "react-hook-form";


interface IFormInputs {
    displayName: string;
    email: string;
    password: string;

}

export const RegisterPage = () => {
    const { control, handleSubmit } = useForm<IFormInputs>();
    const onSubmit: SubmitHandler<IFormInputs> = data => {
        console.log(data)
    };
    return (
        <AuthLayout title="Crear cuenta">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <Controller
                            name="displayName"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    label="Nombre completo"
                                    type="text"
                                    placeholder="Nombre completo"
                                    fullWidth
                                    {...field}
                                    //value={field.value}
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    label="Correo"
                                    type="email"
                                    placeholder="correo@google.com"
                                    fullWidth
                                    //value={email}
                                    {...field}
                                />
                            )}
                        />

                    </Grid>

                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <Controller
                            name="password"
                            control={control}
                            defaultValue=""
                            render={({ field }) => (
                                <TextField
                                    label="Contraseña"
                                    type="password"
                                    placeholder="Contraseña"
                                    fullWidth
                                    helperText=""
                                   // value={password}
                                   {...field}
                                />
                            )}
                        />

                    </Grid>
                    <Grid item xs={12} sx={{ mt: 2 }}>
                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                        >
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
        </AuthLayout >
    );
};
