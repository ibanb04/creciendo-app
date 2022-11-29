import { Button, Chip, Container, Link, Paper, Skeleton, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { Link as RouterLink } from "react-router-dom";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import React, { useEffect, useMemo, useState } from "react";
import { getStudents } from "../../firebase/providers";
import { useQuery } from "react-query";
import CustomDataGridToolbar from "./helpers/CustomDataGridToolbar";
import UserActions from "./helpers/UserActions";
import { setStudent } from "../../store/slices/student/student.slice";
import { useAppDispatch } from "../../store/useAppDispatch";
import { DocumentData } from "firebase/firestore/lite";
import FaceIcon from '@mui/icons-material/Face';
import DoDisturbOnIcon from '@mui/icons-material/DoDisturbOn';
import NotInterestedIcon from '@mui/icons-material/NotInterested';

export const RegisterStudent = () => {
  const [pageSize, setPageSize] = useState(5);
  const [students, setstudents] = useState<DocumentData[]>([]);
  const [selectedRows, setSelectedRows] = useState<any>([]);
  const [rowId, setRowId] = useState(null);
  const dispatch = useAppDispatch();
  const { data, isLoading, isFetching } = useQuery(["students"], () =>
    getStudents()
  );

  useEffect(() => {
    if (data) setstudents(data);
  }, [isFetching]);

  const RenderUserActions = (params: GridRenderCellParams) => <UserActions {...{ params }} />;
  const RenderStudentStatus = (params: GridRenderCellParams) => {
    if (params.value === "MATRICULADO") {
      return <Chip  label="Activo" color="success" size="small" icon={<FaceIcon />} />
    } else if (params.value === "DESERTO") {
      return <Chip label="Desertó"  size="small"  color="warning" icon={<NotInterestedIcon/>} />
    } else {
      return <Chip label="Retirado" size="small"  color="error" icon={<DoDisturbOnIcon/>} />
    }
  }
  const columns: GridColDef[] = useMemo(() => [
    { field: "idNumber", headerName: "ID", width: 120 },
    { field: "idType", headerName: "TIPO ", width: 60 },
    { field: "firstName", headerName: "PRIMER NOMBRE", width: 130 },
    //{ field: "middleName", headerName: "SEGUNDO NOMBRE", width: 130 },
    { field: "firstLastName", headerName: "PRIMER APELLIDO", width: 130 },
    //{ field: "secondLastName", headerName: "SEGUNDO APELLIDO", width: 130 },
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

  const handleSelectRows = (ids: any) => {
    const selectedIDs = new Set(ids);
    const selectedRows = students.filter((row) =>
      selectedIDs.has(parseInt(row.idNumber))
    );
    setSelectedRows(selectedRows?.map((row: any) => row.idNumber));
  };

  return (
    <>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Estudiantes
          </Typography>
          <Link
            underline="none"
            color="secondary.main"
            onClick={() => dispatch(setStudent(null))}
            component={RouterLink}
            to="nuevo"
          >
            <Button variant="contained">
              <AddIcon />
              &nbsp; Nuevo
            </Button>
          </Link>
        </Stack>

        {!isLoading ? (
          <Paper elevation={4}>
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                columns={columns}
                rows={students}
                getRowId={(row) => parseInt(row.idNumber)}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                rowsPerPageOptions={[5, 10, 20]}
                components={{
                  Toolbar: () => CustomDataGridToolbar(selectedRows),
                }}
                disableColumnFilter
                disableColumnMenu
                disableColumnSelector
                disableDensitySelector
                pagination
                checkboxSelection
                onRowClick={(params: any) => setRowId(params.id)}
                onSelectionModelChange={(ids) => handleSelectRows(ids)}
              />
            </div>
          </Paper>
        ) : (
          <Stack spacing={1} padding={4}>
            <Skeleton variant="text" sx={{ fontSize: "3.5rem" }} />
            <Skeleton animation="wave" variant="rounded" height={100} />
            <Skeleton animation="wave" variant="rounded" height={180} />
          </Stack>
        )}
      </Container>
    </>
  );
};
