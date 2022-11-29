import { Grid } from "@mui/material";
import { useId, FC } from 'react';
import { useFormContext } from "react-hook-form";
import getFormContent from "../../../shared/getFormContent";
import { socialEconomicFormValues } from "../utils/socialEconomicFormValues";

export const SocialEconomicForm: FC = () => {
  const { control } = useFormContext();
  const key = useId();

  return (
    <>
      {
        socialEconomicFormValues.map((item, index) => (
          <Grid key={key + index} item xs={12} sm={3}>
            {getFormContent(item, control)}
          </Grid>
        ))}
    </>
  )
}
