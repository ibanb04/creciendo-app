import { useId } from 'react';
import { useFormContext } from 'react-hook-form';
import { Grid } from '@mui/material';
import getFormContent from '../../../shared/getFormContent';
import { additionalComentsFormValues } from '../utils/additionalComentsFormValues';

const AdditionalCommetsForm = () => {
  const { control } = useFormContext();
  const key = useId();
  return (
    <>
      {
        additionalComentsFormValues.map((item, index) => (
          <Grid key={key + index} item xs={12} sm={8}>
            {getFormContent(item, control)}
          </Grid>
        ))
        
      }
    </>
    )
}

export default AdditionalCommetsForm