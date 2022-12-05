import { getStudents } from "../../firebase/providers";
import { useEffect, useState } from "react";
import { DataGrid, } from "@mui/x-data-grid";
import { DocumentData } from "firebase/firestore/lite";
import { useQuery } from "react-query";
import { Paper, Stack, Skeleton } from '@mui/material';
import CustomDataGridToolbar from "../../helpers/CustomDataGridToolbar";
import { useStudentColumns } from "./helpers/useStudentColumns";

export const ListStudents = () => {

  const [pageSize, setPageSize] = useState(5);
  const [students, setstudents] = useState<DocumentData[]>([]);
  const [selectedRows, setSelectedRows] = useState<any>([]);
  const [rowId, setRowId] = useState(null);
  const columns = useStudentColumns();
  const { data, isLoading, isFetching } = useQuery(["students"], () =>
    getStudents()
  );

  useEffect(() => {
    if (data) setstudents(data);
  }, [isFetching]);



  const handleSelectRows = (ids: any) => {
    const selectedIDs = new Set(ids);
    const selectedRows = students.filter((row) =>
      selectedIDs.has(parseInt(row.idNumber))
    );
    setSelectedRows(selectedRows?.map((row: any) => row.idNumber));
  };

  return (
    <>
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
                Toolbar: () => CustomDataGridToolbar(selectedRows, "Buscar Estudiantes"),
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
    </>
  )
}
