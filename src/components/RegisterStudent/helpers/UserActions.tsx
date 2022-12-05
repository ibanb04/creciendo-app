import IconButton from '@mui/material/IconButton';
import React, { FC, useState } from 'react';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from '../../../store/useAppDispatch';
import { setStudent } from '../../../store/slices/student/student.slice';
import { useNavigate } from 'react-router-dom';
import { setDepartment } from '../../../store/slices/department/department.slice';
import { setEjectorDepartment } from '../../../store/slices/department/ejectorDepartment.slice';
import { deleteStudent } from '../../../firebase/providers';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Snackbar } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { setInterview } from '../../../store/slices/interview/interview.slice';


interface UserActionsProps {
    params: any;
    redirectRoute?: string;
}
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});


const UserActions: FC<UserActionsProps> = ({ params, redirectRoute }) => {
    const [open, setOpen] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpenAlert(false);
        setOpen(false);
    };

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleEdit = () => {
        if (redirectRoute === '/estudiantes/editar') {
            dispatch(setStudent(params.row));
            dispatch(setDepartment(params.row.birthDepartment));
            dispatch(setEjectorDepartment(params.row.ejectorDepartment));
            navigate(redirectRoute);
        } else if (redirectRoute === '/entrevistas/editar') {
            dispatch(setStudent(null));
            dispatch(setInterview(params.row));
            navigate(redirectRoute);
        }
    };

    const handleDelete = () => {
        if (redirectRoute === '/estudiantes/editar') {
            deleteStudent(params.row.idNumber);
            setOpenAlert(true);
            setOpen(false);
            //window.location.reload();
        } else {
            console.log("No se ha implementado la eliminación de entrevistas");
        }
    };
    return (
        <>
            <Stack direction="row" spacing={1}  >
                <IconButton aria-label="edit" onClick={handleEdit}  >
                    <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" color="error" onClick={handleClickOpen} >
                    <DeleteIcon />
                </IconButton>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                        ¿Está seguro que desea eliminar a "{params.row.firstName} {params.row.firstLastName}"?

                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Al eliminar a este(a) estudiante, se eliminaran todos los datos asociados a el.
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancelar</Button>
                        <Button onClick={handleDelete} color="error" autoFocus>
                            Confirmar
                        </Button>
                    </DialogActions>
                </Dialog>
            </Stack>
            <Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "center" }} open={openAlert} autoHideDuration={3000} sx={{ position: 'absolute' }} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Estudiante eliminado correctamente!
                </Alert>
            </Snackbar>
        </>
    )
}

export default UserActions