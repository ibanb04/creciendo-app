import { getStudents } from "../../firebase/providers";
import { useEffect, useState } from "react";
import { DocumentData } from "firebase/firestore/lite";
import { useQuery } from "react-query";
import { useStudentColumns } from "./helpers/useStudentColumns";
import CustomDataGrid from "../../helpers/CustomDataGrid";
import CustomDataGridSkeleton from '../../helpers/CustomDataGridSkeleton';
import { useResetStudentAndInterviewState } from "../../hooks/useResetStudentAndInterviewState";
import CustomAlert from '../../helpers/CustomAlert';
import { useAppSelector, useAppDispatch } from '../../store/useAppDispatch';

export const ListStudents = () => {
  const dispatch = useAppDispatch();
  const resetStudentAndInterviewSelected = useResetStudentAndInterviewState();
  const [students, setstudents] = useState<DocumentData[]>([]);
  const { open, message, severity, type } = useAppSelector(state => state.alert);
  const columns = useStudentColumns();
  const { data, isLoading, isFetching } = useQuery(["students"], () =>
    getStudents()
  );

  useEffect(() => {
    resetStudentAndInterviewSelected();
    if (data) setstudents(data);
  }, [isFetching,]);

  return (
    <>
      {!isLoading ? (
        <>
          <CustomDataGrid columns={columns} data={students} idType="student" />
          {type === 'student' && <CustomAlert open={open} message={message} severity={severity} />}

        </>
      ) : (
        <CustomDataGridSkeleton />
      )}
    </>
  )
}
