import { useId } from 'react'
import { useFormContext } from 'react-hook-form';
import { Grid } from '@mui/material';
import getFormContent from '../../../shared/getFormContent';
import { emotionalAndFamilyRelationshipsFormValues } from '../utils/emotionalAndFamilyRelationshipsFormValues';
const EmotionalAndFamilyRelationshipsForm = () => {
  const { control } = useFormContext();
  const key = useId();
  return (
    <>
      {
        emotionalAndFamilyRelationshipsFormValues.map((item, index) => (
          <Grid key={key + index} item xs={12} sm={4}>
            {getFormContent(item, control)}
          </Grid>
        ))

      }
    </>
    )
}

export default EmotionalAndFamilyRelationshipsForm