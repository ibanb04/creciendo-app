import React, { FC, useState } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Tooltip from '@mui/material/Tooltip';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import { GridRenderCellParams } from '@mui/x-data-grid';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../../store/useAppDispatch';
import { setStudent } from '../../../store/slices/student/student.slice';
import IconButton from '@mui/material/IconButton';

interface UserEnrollmentActionsProps {
    params: GridRenderCellParams;
}

const initialState = [
    { id: 1, name: 'Matricula', checked: false },
    { id: 2, name: 'Anectotario Nuevo', checked: false },
    { id: 3, name: 'Anectotario Antiguo', checked: false },
    { id: 4, name: 'Autorización', checked: false },
]


const UserEnrollmentActions: FC<UserEnrollmentActionsProps> = ({ params }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [option, setOption] = useState(initialState);
    const navigate = useNavigate();

    const open = Boolean(anchorEl);
    const dispatch = useAppDispatch();
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMatricula = () => {
        setOption(option.map((item) => {
            if (item.id === 1) {
                return {
                    ...item,
                    checked: !item.checked
                }
            }
            return item;
        }))
    }
    const handleAnectotarioNuevo = () => {
        setOption(option.map((item) => {
            if (item.id === 2) {
                return {
                    ...item,
                    checked: !item.checked
                }
            }
            return item;
        }))
    }
    const handleAnectotarioAntiguo = () => {
        setOption(option.map((item) => {
            if (item.id === 3) {
                return {
                    ...item,
                    checked: !item.checked
                }
            }
            return item;
        }))
    }
    const handleAutorizacion = () => {
        setOption(option.map((item) => {
            if (item.id === 4) {
                return {
                    ...item,
                    checked: !item.checked
                }
            }
            return item;
        }))
    }

    const handleDownload = () => {
        console.log(option);
        dispatch(setStudent(params.row))
        navigate('/contrato-matricula');
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
                <MenuItem onClick={handleMatricula} >
                    <Checkbox color='secondary'
                        checked={option.find((item) => item.id === 1)?.checked}
                    /> Contrato de matricula
                </MenuItem>
                <MenuItem onClick={handleAnectotarioNuevo}>
                    <Checkbox color='secondary'
                        checked={option.find((item) => item.id === 2)?.checked}
                    /> Anectotario Nuevo
                </MenuItem>
                <MenuItem onClick={handleAnectotarioAntiguo}>
                    <Checkbox color='secondary'
                        checked={option.find((item) => item.id === 3)?.checked}
                    /> Anectotario Antiguo
                </MenuItem>
                <MenuItem onClick={handleAutorizacion}>
                    <Checkbox color='secondary'
                        checked={option.find((item) => item.id === 4)?.checked}
                    /> Autorizacion y concentimiento
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleDownload}>
                    <ListItemIcon>
                        <DownloadForOfflineIcon />
                    </ListItemIcon>
                    Descargar
                </MenuItem>


            </Menu>
        </>
    )
}

export default UserEnrollmentActions