import React from 'react'
import { useFormContext } from 'react-hook-form';
import { prenatalHistoryFormValues } from '../utils/prenatalHistoryFormValues';
import { Grid } from '@mui/material';
import getFormContent from '../../../shared/getFormContent';

const PrenatalHistoryForm = () => {
  const { control, formState: { errors }, } = useFormContext();
  const key = React.useId();
  return (
    <>
      {
        prenatalHistoryFormValues.map((item, index) => (
          <Grid key={key + index} item xs={12} sm={4}>
            {getFormContent (item, control, errors)}
          </Grid>
        ))

      }
    </>
    )
}

export default PrenatalHistoryForm