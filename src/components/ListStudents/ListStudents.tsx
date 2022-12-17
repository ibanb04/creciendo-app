import { getStudents } from "../../firebase/providers";
import { useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore/lite";
import { useQuery } from "react-query";
import { useStudentColumns } from "./helpers/useStudentColumns";
import CustomDataGrid from "../../helpers/CustomDataGrid";
import CustomDataGridSkeleton from '../../helpers/CustomDataGridSkeleton';

export const ListStudents = () => {

  const [students, setstudents] = useState<DocumentData[]>([]);
  const columns = useStudentColumns();
  const { data, isLoading, isFetching } = useQuery(["students"], () =>
    getStudents()
  );

  useEffect(() => {
    if (data) setstudents(data);
  }, [isFetching]);

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
