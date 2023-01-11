import { studentStateFormValues } from "../utils/studentStateFormValues";
import { useFormContext } from 'react-hook-form';
import { useId, FC } from 'react';
import getFormContent from "../../../shared/getFormContent";
import { Grid } from '@mui/material';

export const StudentStateForm: FC = () => {
  const { control, formState: { errors }, } = useFormContext();
  const key = useId();

  return (
   <>
      {
        studentStateFormValues.map((item, index) => (
          <Grid key={key + index} item xs={12} sm={3}>
            {getFormContent(item, control, errors)}
          </Grid>
        ))
      }
   </>
  )
}
