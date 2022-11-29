import { useFormContext } from "react-hook-form";
import { useId, FC } from 'react';
import { Grid } from '@mui/material';
import { fatherFormValues } from "../utils/fatherFormValues";
import getFormContent from "../../../shared/getFormContent";

const FatherForm: FC = () => {
  const { control } = useFormContext();
  const key = useId();
  return (
    <>
      {
        fatherFormValues.map((item, index) => (
          <Grid key={key + index} item xs={12} sm={3}>
            {getFormContent(item, control)}
          </Grid>
        ))
      }
    </>
  )
}

export default FatherForm