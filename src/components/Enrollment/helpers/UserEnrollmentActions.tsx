import React, { FC, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../store/useAppDispatch';
import { setStudent } from '../../../store/slices/student/student.slice';
import IconButton from '@mui/material/IconButton';
import DescriptionIcon from '@mui/icons-material/Description';
import DownloadingIcon from '@mui/icons-material/Downloading';
interface UserEnrollmentActionsProps {
    params: GridRenderCellParams;
}


const UserEnrollmentActions: FC<UserEnrollmentActionsProps> = ({ params }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const navigate = useNavigate();

    const open = Boolean(anchorEl);
    const dispatch = useAppDispatch();
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleGenerateMatricula = () => {
        dispatch(setStudent(params.row))
        navigate('/contrato-matricula');
    }
    const handleGenerateAnectotarioNuevo = () => {
        dispatch(setStudent(params.row))
        navigate('/anecdotario-nuevo');
    }
    const handleGenerateAnectotarioAntiguo = () => {
        dispatch(setStudent(params.row))
        navigate('/anecdotario-antiguo');
    }
    const handleGenerateAutorizacion = () => {
        dispatch(setStudent(params.row))
        navigate('/autorizacion');
    }


    return (
        <>
            <Tooltip title="Account settings">
                <IconButton
                    onClick={handleClick}
                    size="small"
                    aria-controls={open ? 'options-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <MoreVertIcon />
                </IconButton>
            </Tooltip>
            <Menu
                anchorEl={anchorEl}
                id="options-menu"
                open={open}
                onClose={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    <ListItemIcon>
                        <DescriptionIcon />
                    </ListItemIcon>
                    Generar Documentos
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleGenerateMatricula}>
                    <ListItemIcon >
                        <DownloadingIcon />
                    </ListItemIcon>
                    Contrato de matricula
                </MenuItem>
                <MenuItem onClick={handleGenerateAnectotarioNuevo} >
                    <ListItemIcon>
                        <DownloadingIcon />
                    </ListItemIcon>
                    Anectotario Nuevo
                </MenuItem>
                <MenuItem onClick={handleGenerateAnectotarioAntiguo} >
                    <ListItemIcon>
                        <DownloadingIcon />
                    </ListItemIcon>
                    Anectotario Antiguo
                </MenuItem>
                <MenuItem onClick={handleGenerateAutorizacion} >
                    <ListItemIcon>
                        <DownloadingIcon />
                    </ListItemIcon>
                    Autorización y consentimiento
                </MenuItem>
            </Menu>
        </>
    )
}

export default UserEnrollmentActions