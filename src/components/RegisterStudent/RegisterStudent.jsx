import { Button, Container, Link, Paper, Skeleton, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { Link as RouterLink } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { useMemo, useState } from "react";
import { getStudents } from "../../firebase/providers";
import { useQuery } from "react-query";
import Label from "../../ui/label";
import SchoolIcon from "@mui/icons-material/School";

export const RegisterStudent = () => {
  const [pageSize, setPageSize] = useState(10);
  const columns = useMemo(
    () => [
      { field: "idNumber", headerName: "ID", type: "number", width: 120 },
      { field: "idType", headerName: "TIPO ", width: 60 },
      { field: "firstName", headerName: "PRIMER NOMBRE", width: 130 },
      { field: "middleName", headerName: "SEGUNDO NOMBRE", width: 130 },
      { field: "lastName", headerName: "PRIMER APELLIDO", width: 130 },
      { field: "secondSurname", headerName: "SEGUNDO APELLIDO", width: 130 },
      {
        field: "studentState",
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
    ],
    []
  );
  const { data, isLoading } = useQuery(["students"], () => getStudents());

  console.log(data);
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
            <SchoolIcon fontSize="large" /> Estudiantes
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
          <Paper>
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                columns={columns}
                rows={data}
                getRowId={(row) => parseInt(row.idNumber)}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                rowsPerPageOptions={[10, 15, 20]}
                pagination
                checkboxSelection
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
