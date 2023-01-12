import Fab from '@mui/material/Fab';
import PrintIcon from '@mui/icons-material/Print';
import { FC } from 'react';

interface Props {
    handlePrint: any;
}

export const CustomFab: FC<Props> = ({ handlePrint }) => {

    return (
        <>
            <Fab
                onClick={handlePrint}
                aria-label="scroll back to top"
                sx={{ position: 'fixed', bottom: 16, right: 30, backgroundColor: '#FBFACD' }}
            >
                <PrintIcon />
            </Fab>

        </>
    );
}
