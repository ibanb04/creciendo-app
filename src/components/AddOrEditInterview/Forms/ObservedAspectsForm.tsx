import React from 'react'
import { observedAspectsFormValues } from '../utils/observedAspectsFormValues';
import { useFormContext } from 'react-hook-form';
import { useId } from 'react';
import getFormContent from '../../../shared/getFormContent';
import { Grid } from '@mui/material';

const ObservedAspectsForm = () => {
  const { control } = useFormContext();
  const key = useId();
  return (
    <>
    {
      observedAspectsFormValues.map((item, index) => (
        <Grid key={key + index} item xs={12} sm={4}>
          {getFormContent(item, control)}
        </Grid>
      ))
    }
    </>
    )
}

export default ObservedAspectsForm