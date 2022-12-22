import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import UserActions from '../../RegisterStudent/helpers/UserActions';
import { useMemo } from 'react';
import GeneratingInterviewDocument from "./GeneratingInterviewDocument";
const RenderUserActions = (params: GridRenderCellParams) => <UserActions {...{ params, redirectRoute: '/entrevistas/editar' }} />;
const RenderDownloadInterview = (params: GridRenderCellParams) => <GeneratingInterviewDocument {...{ params }} />;
export const useInterviewColumns = () => {
    const columns: GridColDef[] = useMemo(() => [
        { field: "studentId", headerName: "ID", width: 120 },
        { field: "studentIdType", headerName: "TIPO ", width: 60 },
        { field: "firstName", headerName: "PRIMER NOMBRE", width: 130 },
        { field: "firstLastName", headerName: "PRIMER APELLIDO", width: 130 },
        { field: "gradeToApply", headerName: "GRADO A APLICAR", width: 88 },
        { field: "guardianName", headerName: "ACUDIENTE", width: 108 },
        {
            field: "download",
            headerName: "DOCUMENTO",
            width: 130,
            type: "actions",
            renderCell: RenderDownloadInterview,
        },
        {
            field: "actions",
            headerName: "OPCIONES",
            width: 130,
            type: "actions",
            renderCell: RenderUserActions,
        },
        { field: "guardiantTel", headerName: "CONTACTO", width: 102 },
    ], []);
    return columns;
}
