import { Grid } from '@mui/material'
import React, { useId } from 'react'
import { useFormContext } from 'react-hook-form'
import getFormContent from '../../../shared/getFormContent'
import { psychoPedagogicalHistoryFormValues } from '../utils/psychoPedagogicalHistoryFormValues'

const PsychoPedagogicalHistoryForm = () => {
  const { control, formState: { errors }, } = useFormContext();
  const key = useId();
  return (
    <>
      {
        psychoPedagogicalHistoryFormValues.map((item, index) => (
          <Grid key={key + index} item xs={12} sm={3}>
            {getFormContent(item, control, errors)}
          </Grid>
        ))

      }
    </>
  )
}

export default PsychoPedagogicalHistoryForm