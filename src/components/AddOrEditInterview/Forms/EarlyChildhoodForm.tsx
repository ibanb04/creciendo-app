import React from 'react'
import { useFormContext } from 'react-hook-form';
import { earlyChildhoodFormValues } from '../utils/earlyChildhoodFormValues'
import getFormContent from '../../../shared/getFormContent';
import { Grid } from '@mui/material';

const EarlyChildhoodForm = () => {
  const { control } = useFormContext();
  const key = React.useId();
  return (
    <>
      {
        earlyChildhoodFormValues.map((item, index) => (
          <Grid key={key + index} item xs={12} sm={3}>
            {getFormContent(item, control)}
          </Grid>
        ))
      }
    </>
  )
}

export default EarlyChildhoodForm