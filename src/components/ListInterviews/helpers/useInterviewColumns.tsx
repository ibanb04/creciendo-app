import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import UserActions from '../../RegisterStudent/helpers/UserActions';
import { useMemo } from 'react';


const RenderUserActions = (params: GridRenderCellParams) => <UserActions {...{ params, redirectRoute: '/entrevistas/editar' }} />;

export const useInterviewColumns = () => {
    const columns: GridColDef[] = useMemo(() => [
        { field: "studentId", headerName: "ID", width: 120 },
        { field: "studentIdType", headerName: "TIPO ", width: 60 },
        { field: "firstName", headerName: "PRIMER NOMBRE", width: 130 },
        { field: "firstLastName", headerName: "PRIMER APELLIDO", width: 130 },
        { field: "gradeToApply", headerName: "GRADO A APLICAR", width: 88 },
        { field: "guardianName", headerName: "ACUDIENTE", width: 130 },
        { field: "guardiantPhone", headerName: "CELULAR", width: 130 },
        {
            field: "actions",
            headerName: "OPCIONES",
            width: 130,
            type: "actions",
            renderCell: RenderUserActions,
        },
    ], []);
    return columns;
}
