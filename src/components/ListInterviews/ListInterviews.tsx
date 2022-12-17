import { Skeleton } from '@mui/material';
import { getInterviews } from '../../firebase/providers';
import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { DocumentData } from 'firebase/firestore/lite';
import Stack from '@mui/material/Stack';
import { useInterviewColumns } from './helpers/useInterviewColumns';
import CustomDataGrid from '../../helpers/CustomDataGrid';
import CustomDataGridSkeleton from '../../helpers/CustomDataGridSkeleton';

export const ListInterviews = () => {

  const [interviews, setInterviews] = useState<DocumentData[]>([]);
  const { data, isLoading, isFetching } = useQuery(["interviews"], () =>
    getInterviews()
  );

  const columns = useInterviewColumns();

  useEffect(() => {
    if (data) setInterviews(data);
  }, [isFetching]);

  return (
    <>
      {!isLoading ? (
        <CustomDataGrid columns={columns} data={interviews} idType="interview" />
      ) : (
        <CustomDataGridSkeleton />
      )}
    </>
  )
}
