import ScrollTop from './ScrollTop';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from '@mui/material/IconButton';
import PrintIcon from '@mui/icons-material/Print';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: React.ReactElement;
    handlePrint: any;
    handleDownload?: any;
    title: string;
}

export const CustomNavBar = (props: Props) => {
    const { handlePrint, title } = props;

    return (
        <>
            <AppBar color='secondary' position='static' >
                <Toolbar>
                    <IconButton
                        size="large"
                        color="inherit"
                        sx={{ mr: 1 }}
                        onClick={() => window.history.back()}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
                        {title}
                    </Typography>

                    <IconButton
                        size="large"
                        color="inherit"
                        onClick={handlePrint}
                    >
                        <PrintIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Toolbar id="back-to-top-anchor"
                sx={{
                    position: 'absolute',
                }}
            />

            <ScrollTop {...props}>
                <Fab size="medium" color='secondary' aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </>
    );
}
