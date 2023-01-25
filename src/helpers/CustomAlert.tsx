import Alert from '@mui/material/Alert';
import { FC } from 'react';
import { Stack } from '@mui/system';
import { Snackbar } from '@mui/material';
import { useAppDispatch } from '../store/useAppDispatch';
import { resetAlert } from '../store/slices/alert/alert.slice';

interface CustomAlertProps {
    open: boolean;
    message: string | undefined;
    severity: 'error' | 'warning' | 'info' | 'success';
}
const CustomAlert: FC<CustomAlertProps> = ({ open, message, severity }) => {
    const dispatch = useAppDispatch();

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(resetAlert());
    };

    return (
        <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }} open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                    {message}
                </Alert>
            </Snackbar>
        </Stack>
    );
}

export default CustomAlert;