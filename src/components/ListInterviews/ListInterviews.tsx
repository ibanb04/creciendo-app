import { Paper, Skeleton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { getInterviews } from '../../firebase/providers';
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { DocumentData } from 'firebase/firestore/lite';
import CustomDataGridToolbar from '../../helpers/CustomDataGridToolbar';
import Stack from '@mui/material/Stack';
import { useInterviewColumns } from './helpers/useInterviewColumns';

export const ListInterviews = () => {

  const [pageSize, setPageSize] = useState(5);
  const [interviews, setInterviews] = useState<DocumentData[]>([]);
  const [selectedRows, setSelectedRows] = useState<any>([]);
  const [rowId, setRowId] = useState(null);
  const { data, isLoading, isFetching } = useQuery(["interviews"], () =>
    getInterviews()
  );

  const columns = useInterviewColumns();

  useEffect(() => {
    if (data) setInterviews(data);
  }, [isFetching]);

  const handleSelectRows = (ids: any) => {
    const selectedIDs = new Set(ids);
    const selectedRows = interviews.filter((row) =>
      selectedIDs.has(parseInt(row.studentId))
    );
    setSelectedRows(selectedRows?.map((row: any) => row.studentId));
  };

  return (
    <>
      {!isLoading ? (
        <Paper elevation={4}>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              columns={columns}
              rows={interviews}
              getRowId={(row) => parseInt(row.studentId)}
              pageSize={pageSize}
              onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
              rowsPerPageOptions={[5, 10, 20]}
              components={{
                Toolbar: () => CustomDataGridToolbar(selectedRows, "Buscar "),
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
