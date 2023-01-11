import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import UserActions from '../../RegisterStudent/helpers/UserActions';
import { Chip } from '@mui/material';
import { useMemo } from 'react';

import FaceIcon from '@mui/icons-material/Face';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';

const RenderUserActions = (params: GridRenderCellParams) => <UserActions {...{ params, redirectRoute: '/estudiantes/editar' }} />;
const RenderStudentStatus = (params: GridRenderCellParams) => {
  if (params.value === "MATRICULADO") {
    return <Chip label="Activo" color="success" size="small" icon={< FaceIcon />} />
  } else if (params.value === "DESERTO") {
    return <Chip label="Desertó" size="small" color="warning" icon={< NotInterestedIcon />} />
  } else {
    return <Chip label="Retirado" size="small" color="error" icon={< DoDisturbOnIcon />} />
  }
}


export const useStudentColumns = () => {
  const columns: GridColDef[] = useMemo(() => [
    { field: "idNumber", headerName: "ID", width: 120 },
    { field: "idType", headerName: "TIPO ", width: 60 },
    { field: "firstName", headerName: "PRIMER NOMBRE", width: 130 },
    { field: "firstLastName", headerName: "PRIMER APELLIDO", width: 130 },
    { field: "grade", headerName: "GRADO", width: 88 },
    {
      field: "studentApproval",
      headerName: "ESTADO",
      width: 130,
      renderCell: RenderStudentStatus
    },
    { field: "guardiantTel", headerName: "CONTACTO", width: 105 },
    { field: "guardianName", headerName: "ACUDIENTE", width: 130 },
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
