import { getStudents } from "../../firebase/providers";
import { useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore/lite";
import { useQuery } from "react-query";
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useEnrollmentColumns } from './helpers/useEnrollmentColumns';
import CustomDataGrid from "../../helpers/CustomDataGrid";
import CustomDataGridSkeleton from '../../helpers/CustomDataGridSkeleton';
import { useResetStudentAndInterviewState } from '../../hooks/useResetStudentAndInterviewState';

export const Enrollment = () => {
  const resetStudentAndInterviewSelected = useResetStudentAndInterviewState();
  const [students, setstudents] = useState<DocumentData[]>([]);
  const columns = useEnrollmentColumns();

  const { data, isLoading, isFetching } = useQuery(["students"], () =>
    getStudents()
  );

  useEffect(() => {
    resetStudentAndInterviewSelected();
    if (data) setstudents(data);
  }, [isFetching]);



  return (
    <>
      <Container sx={{ paddingLeft: 0 }}>
        <Typography variant="h4" mb={4} fontWeight={500} >
          Gestión de Matrículas
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
