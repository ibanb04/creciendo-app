import { useFormContext } from 'react-hook-form';
import { useId, FC } from 'react';
import { motherFormValues } from '../utils/motherFormValues';
import { Grid } from '@mui/material';
import getFormContent from '../../../shared/getFormContent';

const MotherForm: FC = () => {
  const { control, formState: { errors }, } = useFormContext();
  const key = useId();

  return (
    <>
      {
        motherFormValues.map((item, index) => (
          <Grid key={key + index} item xs={12} sm={3}>
            {getFormContent(item, control, errors)}
          </Grid>
        ))
      }
    </>
  )
}

export default MotherForm