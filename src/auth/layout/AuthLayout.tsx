import { Grid, Typography } from "@mui/material";
import { FC } from 'react'
import wave_bg from '../../assets/wave_bg.svg'
import { Link as RouterLink } from "react-router-dom";
import Box from '@mui/material/Box';
import logo from '../../assets/img/logo.png'
import { keyframes } from '@emotion/react'


type Props = {
    title: string,
    children?: JSX.Element,
};
export const AuthLayout: FC<Props> = ({ title = "", children }) => {

    const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } })

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
                minHeight: "100vh",
                backgroundImage: `url(${wave_bg})`,
                backgroundPosition: "center",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                padding: 4,
                animation: `${fadeIn} 1s backwards`

            }}
        >
            <Grid item
                className="box-shadow"
                xs={3}
                sx={{
                    width: { sm: 450 },
                    backgroundColor: "white",
                    padding: 3,
                    borderRadius: 2,
                    boxShadow: 4
                }}

            >
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <RouterLink to="/">
                        <Box
                            component="img"
                            sx={{
                                height: 100,
                                width: 100,
                                maxHeight: { xs: 167, md: 167 },
                                maxWidth: { xs: 167, md: 167 },
                                boxShadow: "0 5px 14px 0 rgba(128,128,128, 0.5)",
                                borderRadius: "50%",
                            }}
                            alt="Colegio Creciendo"
                            src={logo}
                        />
                    </RouterLink>
                    <Typography variant="h5" sx={{ mt: 2 }}>
                        {title}
                    </Typography>
                </Grid>

                {children}
            </Grid>
        </Grid>
    );
};
