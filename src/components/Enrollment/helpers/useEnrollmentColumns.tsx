import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useMemo } from 'react';
import UserEnrollmentActions from './UserEnrollmentActions';

const RenderUserActions = (params: GridRenderCellParams) => <UserEnrollmentActions {...{ params }} />;

export const useEnrollmentColumns = () => {
    const columns: GridColDef[] = useMemo(() => [
        { field: "idNumber", headerName: "ID", width: 120 },
        { field: "idType", headerName: "TIPO ", width: 55 },
        { field: "firstName", headerName: "PRIMER NOMBRE", width: 130 },
        { field: "firstLastName", headerName: "PRIMER APELLIDO", width: 130 },
        { field: "grade", headerName: "GRADO", width: 88 },
        { field: "guardiantTel", headerName: "CONTACTO", width: 102 },
        { field: "guardianName", headerName: "ACUDIENTE", width: 108 },
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
