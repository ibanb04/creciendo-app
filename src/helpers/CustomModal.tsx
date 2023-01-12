import React from 'react'
import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import { FC, useEffect } from 'react';
import { useAppDispatch } from '../store/useAppDispatch';
import { setModalState } from '../store/slices/modal/modal.slice';

const style = {
    position: 'absolute' as 'absolute',
    left: { xs: '5%', md: "20%" },
    top: "5%",
    width: { xs: '90%', md: "60%" },
    height: '100%',
    bgcolor: '#ffffff',
    border: '1px solid #000',
    boxShadow: 24,
    //px: 4,
    overflow: 'auto' as 'auto',

};

interface CustomModalProps {
    open: boolean;
    handleClose: () => void;
    children: React.ReactNode;
}
const CustomModal: FC<CustomModalProps> = ({ open, handleClose, children }) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (open) dispatch(setModalState(true))
        else dispatch(setModalState(false))
    }, [open])

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {children}
            </Box>
        </Modal>
    )
}

export default CustomModal