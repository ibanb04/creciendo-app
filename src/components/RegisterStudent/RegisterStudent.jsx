import {
  Button,
  Container,
  Link,
  Paper,
  Skeleton,
  Stack,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { Link as RouterLink } from "react-router-dom";
import {
  DataGrid,
} from "@mui/x-data-grid";
import { useEffect, useMemo, useState } from "react";
import { getStudents } from "../../firebase/providers";
import { useQuery } from "react-query";
import Label from "../../ui/label";
import CustomDataGridToolbar from "./helpers/CustomDataGridToolbar";
import UserActions from "./helpers/UserActions";

export const RegisterStudent = () => {
  const [pageSize, setPageSize] = useState(5);
  const [students, setstudents] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [rowId, setRowId] = useState(null);

  const { data, isLoading, isFetching } = useQuery(["students"], () =>
    getStudents()
  );

  useEffect(() => {
    if (data) setstudents(data);
  }, [isFetching]);

  const columns = useMemo(() => [
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
      renderCell: (params) => {
        if (params.value === "MATRICULADO") {
          return <Label color={"success"}>{params.value}</Label>;
        } else if (params.value === "DESERTO") {
          return <Label color={"warning"}>{params.value}</Label>;
        } else {
          return <Label color={"error"}>{params.value}</Label>;
        }
      },
    },
    { field: "guardiantTel", headerName: "CONTACTO", width: 105 },
    { field: "guardianName", headerName: "ACUDIENTE", width: 130 },
    { field: "actions", headerName: "OPCIONES", width: 130, type: "actions", renderCell: params =>  <UserActions {...{params} } /> },

  ]);

  const handleSelectRows = (ids) => {
    const selectedIDs = new Set(ids);
    const selectedRows = students.filter((row) =>
      selectedIDs.has(parseInt(row.idNumber))
    );
    setSelectedRows(selectedRows?.map((row) => row.idNumber));
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
                onRowClick={(params) => setRowId(params.id)}
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
