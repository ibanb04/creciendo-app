import IconButton from '@mui/material/IconButton';
import { FC } from 'react';
import Stack from '@mui/material/Stack';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from '../../../store/useAppDispatch';
import { setStudent } from '../../../store/slices/student/student.slice';
import { useNavigate } from 'react-router-dom';
import { setDepartment } from '../../../store/slices/department.slice';

interface UserActionsProps {
    params: any;
}

const UserActions: FC<UserActionsProps> = ({ params }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const handleEdit = () => {
        dispatch(setStudent(params.row));
        dispatch(setDepartment({nameDepartment:params.row.birthDepartment, ejectorDepartment: params.row.ejectorDepartment}));
        navigate('/estudiantes/nuevo');
    };

    const handleDelete = () => {

    };
    return (
        <>
            <Stack direction="row" spacing={1} >
                <IconButton aria-label="edit" color="secondary"  onClick={handleEdit}  >
                    <EditIcon />
                </IconButton>
                <IconButton aria-label="delete" color="error" onClick={handleDelete} >
                    <DeleteIcon />
                </IconButton>
            </Stack>
        </>
    )
}

export default UserActions