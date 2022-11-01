import { useFormContext } from 'react-hook-form';
import { useId, FC } from 'react';
import { guardianFormValues } from '../utils/guardiantFormValues';
import { Grid } from '@mui/material';
import getFormContent from '../../../shared/getFormContent';

const GuardiantForm: FC = () => {
  const { control } = useFormContext();
  const key = useId();

  return (
    <>
      {
        guardianFormValues.map((item, index) => (
          <Grid key={key + index} item xs={12} sm={3}>
            {getFormContent(item, control)}
          </Grid>
        ))
      }
    </>
  )
}

export default GuardiantForm