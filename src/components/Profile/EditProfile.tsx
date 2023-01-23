import { Grid, Avatar, Divider, TextField, InputLabel, Select, Skeleton } from '@mui/material';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Stack } from '@mui/system';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import { Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/useAppDispatch';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import { useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Collapse from '@mui/material/Collapse/Collapse';
import Alert from '@mui/material/Alert';
import CloseIcon from '@mui/icons-material/Close';
import { getUser, updatePhotoUrlFirebase } from '../../firebase/providers';
import { useQuery } from 'react-query';
import { FirebaseStorage } from '../../firebase/config';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { startUpdatePhotoUrl, startUpdateDisplayName } from '../../store/slices/auth/thunks';

interface IFormInputs {
    displayName?: string | null;
    email?: string;
    password?: string;
    role?: string;
}



const EditProfile = () => {
    const navigate = useNavigate();
    const { displayName, uid, photoURL } = useAppSelector(state => state.auth);
    const { status, errorMessage } = useAppSelector((state) => state.auth);
    const { data, isLoading } = useQuery(["user"], () => getUser(uid || ''));
    const { email, rol } = data || {};
    const [image, setImage] = useState<any>(null)
    const [urlImage, setUrlImage] = useState<string>(photoURL || '');
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormInputs>();
    const dispatch = useAppDispatch();

    const [open, setOpen] = useState(true);
    const onSubmit: SubmitHandler<IFormInputs> = ({
        email,
        password,
        displayName,
        role,
    }) => {
        dispatch(startUpdateDisplayName(displayName || ''));
    };

    const handleImageChange = (e: any) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };



    useEffect(() => {
        const uploadImage = () => {
            const imageRef = ref(FirebaseStorage, 'PP_' + uid);
            uploadBytes(imageRef, image).then(() => {
                getDownloadURL(imageRef).then((url) => {
                    setUrlImage(url);
                    dispatch(startUpdatePhotoUrl(url));
                    console.log(url, 'url');
                }).catch((error) => {
                    console.log(error.message, 'error getting the image url');
                });
                setImage(null);
            }).catch((error) => {
                console.log(error.message);
            }
            );
        };
        image && uploadImage();
    }, [image, photoURL]);

    return (
        <Grid container px={{ md: 30 }} pb={5}>
            <Grid item xs={12} mb={2}>
                <Stack
                    direction="row" alignItems="center"
                >
                    <IconButton
                        edge="start"
                        aria-label="Atrás"
                        color="inherit"
                        onClick={() => navigate(-1)}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography color="inherit" variant="h4" sx={{ fontSize: 30 }} >
                        Mi perfil
                    </Typography>
                </Stack>
            </Grid>
            <Grid item xs={12} >
                <Grid container direction='row' spacing={2} >
                    <Grid item xs={12} md={4} >
                        <Card
                            sx={{ alignItems: 'center', textAlign: 'center' }}
                        >
                            <CardContent>
                                {
                                    isLoading === true ? (
                                        <Stack spacing={1}  >
                                            <Skeleton variant="circular" width={80} height={80} />
                                            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                                        </Stack>
                                    ) : (
                                        <>
                                            <Avatar sx={{ width: 80, height: 80, mx: 'auto', mb: 2 }} src={urlImage} />

                                            <Typography gutterBottom variant="h6">
                                                {displayName}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {rol}
                                            </Typography>
                                            <Typography variant="body1" color="text.secondary">
                                                {email}
                                            </Typography>
                                        </>
                                    )
                                }
                            </CardContent>
                            <Divider />
                            <CardActions>
                                <Button size="small" color="secondary" component="label" fullWidth >
                                    <input hidden type="file" onChange={handleImageChange} accept="/image/*" />
                                    Cambiar foto
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={8} >
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Card >
                                <CardContent>

                                    <Typography gutterBottom variant="h5" component="div">
                                        Editar mi perfil
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        La información de tu perfil puede ser editada en cualquier momento.
                                    </Typography>
                                </CardContent>
                                <Divider />
                                <CardContent sx={{ paddingTop: 5 }}>
                                    {
                                        isLoading ? (
                                            <Grid container spacing={2}>
                                                <Grid item xs={12} md={6} >
                                                    <Skeleton variant="rectangular" height={60} />
                                                </Grid>
                                                <Grid item xs={12} md={6} >
                                                    <Skeleton variant="rectangular" height={60} />
                                                </Grid>
                                                <Grid item xs={12} md={6} >
                                                    <Skeleton variant="rectangular" height={60} />
                                                </Grid>
                                                <Grid item xs={12} md={6} >
                                                    <Skeleton variant="rectangular" height={60} />
                                                </Grid>
                                            </Grid>
                                        ) : (
                                            <>
                                                <Grid container spacing={2}>
                                                    <Grid item xs={12} md={6} >
                                                        <Controller
                                                            name="displayName"
                                                            control={control}
                                                            defaultValue={displayName}
                                                            rules={{
                                                                required: true,
                                                            }}
                                                            render={({ field }) => (
                                                                <TextField
                                                                    size='medium'
                                                                    label="Nombre completo*"
                                                                    color="secondary"
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

                                                    <Grid item xs={12} md={6} >
                                                        <Controller
                                                            name="email"
                                                            control={control}
                                                            defaultValue={email}
                                                            rules={{
                                                                required: true,
                                                                pattern: {
                                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                                    message: " Email invalido",
                                                                },
                                                            }}
                                                            render={({ field }) => (
                                                                <TextField
                                                                    size='medium'
                                                                    label="Correo*"
                                                                    color="secondary"
                                                                    type="email"
                                                                    disabled
                                                                    placeholder='example@google.com' fullWidth
                                                                    helperText={errors.email?.message}
                                                                    value={field.value}
                                                                    onChange={field.onChange}
                                                                    inputRef={field.ref}
                                                                    error={!!errors.email}
                                                                />
                                                            )}
                                                        />
                                                    </Grid>

                                                    <Grid item xs={12} md={6}>
                                                        <Controller
                                                            name="role"
                                                            control={control}
                                                            defaultValue={rol}
                                                            rules={{
                                                                required: true,
                                                            }}
                                                            render={({ field }) => (
                                                                <FormControl fullWidth disabled >
                                                                    <InputLabel color="secondary" id="user-type">Tipo de rol</InputLabel>
                                                                    <Select
                                                                        labelId="user-type"
                                                                        color="secondary"
                                                                        id="demo-simple-select"
                                                                        label="user-type"
                                                                        value={field.value}
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
                                                    <Grid item xs={12} md={6}>
                                                        <Controller
                                                            name="password"
                                                            control={control}
                                                            defaultValue="*******"
                                                            rules={{
                                                                minLength: {
                                                                    value: 6,
                                                                    message: "Debe tener almenos 6 caraacteres",
                                                                },
                                                                required: true,
                                                            }}
                                                            render={({ field }) => (
                                                                <TextField
                                                                    size='medium'
                                                                    // {...field}
                                                                    label="Contraseña*"
                                                                    color="secondary"
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


                                                    <Grid item xs={12} >
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
                                                </Grid>
                                            </>
                                        )
                                    }
                                </CardContent>
                                <Divider />
                                <CardActions>
                                    <Button type="submit" size="small" color="secondary" fullWidth>
                                        Guardar cambios
                                    </Button>
                                </CardActions>
                            </Card>
                        </form>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default EditProfile