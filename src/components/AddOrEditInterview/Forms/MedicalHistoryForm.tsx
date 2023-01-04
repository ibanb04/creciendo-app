import React from 'react'
import { medicalHistoryFormValues } from '../utils/medicalHistoryFormValues';
import getFormContent from '../../../shared/getFormContent';
import { Grid } from '@mui/material';
import { useFormContext } from 'react-hook-form';

const MedicalHistoryForm = () => {
  const { control, formState: { errors }, } = useFormContext();
  const key = React.useId();
  
  return (
    <>
      {
        medicalHistoryFormValues.map((item, index) => (
          <Grid key={key + index} item xs={12} sm={4}>
            {getFormContent(item, control, errors)}
          </Grid>
        ))

      }
    </>
    )
}

export default MedicalHistoryForm