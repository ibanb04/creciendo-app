import { useFormContext } from 'react-hook-form';
import { guardianFormValues } from '../utils/guardiantFormValues';
import getFormContent from '../../../shared/getFormContent';
import { Grid } from "@mui/material";
import { FC, useId } from "react";


const GuardiantForm: FC  = () => {
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