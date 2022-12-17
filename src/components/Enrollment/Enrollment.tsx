import { getStudents } from "../../firebase/providers";
import { useEffect, useState } from "react";
import { DataGrid, } from "@mui/x-data-grid";
import { DocumentData } from "firebase/firestore/lite";
import { useQuery } from "react-query";
import { Paper, Stack, Skeleton, Container } from '@mui/material';
import CustomDataGridToolbar from "../../helpers/CustomDataGridToolbar";
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { useEnrollmentColumns } from './helpers/useEnrollmentColumns';
import CustomDataGrid from "../../helpers/CustomDataGrid";
import CustomDataGridSkeleton from '../../helpers/CustomDataGridSkeleton';

export const Enrollment = () => {


  const [students, setstudents] = useState<DocumentData[]>([]);
  const columns = useEnrollmentColumns();

  const { data, isLoading, isFetching } = useQuery(["students"], () =>
    getStudents()
  );

  useEffect(() => {
    if (data) setstudents(data);
  }, [isFetching]);



  return (
    <>
      <Container>
        <Typography variant="h4" mb={4} fontWeight={500} >
          Gestión de Matriculas
        </Typography>
        {!isLoading ? (
          <CustomDataGrid columns={columns} data={students} idType="student" />
        ) : (
          <CustomDataGridSkeleton />
        )}
      </Container>
    </>
  );
};
