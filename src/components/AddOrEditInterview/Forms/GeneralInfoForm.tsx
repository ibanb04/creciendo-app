import { useId } from 'react'
import { useFormContext } from 'react-hook-form';
import { generalInfoFormValues } from '../utils/generalInfoFormValues';
import { Grid } from '@mui/material';
import getFormContent from '../../../shared/getFormContent';
const GeneralInfoForm = () => {
  const { control } = useFormContext();
  const key = useId();
  return (
    <>
      {generalInfoFormValues.map((item, index) => (
        <Grid key={key + index} item xs={12} sm={3}>
          {getFormContent(item, control)}
        </Grid>
      ))}
    </>
  )
}

export default GeneralInfoForm