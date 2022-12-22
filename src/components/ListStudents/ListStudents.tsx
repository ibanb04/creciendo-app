import { getStudents } from "../../firebase/providers";
import { useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore/lite";
import { useQuery } from "react-query";
import { useStudentColumns } from "./helpers/useStudentColumns";
import CustomDataGrid from "../../helpers/CustomDataGrid";
import CustomDataGridSkeleton from '../../helpers/CustomDataGridSkeleton';
import { useResetStudentAndInterviewState } from "../../hooks/useResetStudentAndInterviewState";

export const ListStudents = () => {
  const resetStudentAndInterviewSelected =  useResetStudentAndInterviewState();  
  const [students, setstudents] = useState<DocumentData[]>([]);
  const columns = useStudentColumns();
  const { data, isLoading, isFetching } = useQuery(["students"], () =>
    getStudents()
  );

  useEffect(() => {
    resetStudentAndInterviewSelected();
    if (data) setstudents(data);
  }, [isFetching, ]);

  return (
    <>
      {!isLoading ? (
        <CustomDataGrid columns={columns} data={students} idType="student" />
      ) : (
        <CustomDataGridSkeleton />
      )}
    </>
  )
}
