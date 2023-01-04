import React from 'react'
import { psychoAffectivityFormValues } from '../utils/psychoAffectivityFormValues';
import { useId } from 'react';
import { useFormContext } from 'react-hook-form';
import { Grid } from '@mui/material';
import getFormContent from '../../../shared/getFormContent';

const PsychoAffectivityForm = () => {
  const { control, formState: { errors }, } = useFormContext();
  const key = useId();

  return (
    <>
      {
        psychoAffectivityFormValues.map((item, index) => (
          <Grid key={key + index} item xs={12} sm={4}>
            {getFormContent(item, control, errors)}
          </Grid>
        ))

      }
    </>
  )
}

export default PsychoAffectivityForm