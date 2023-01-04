import { Grid, TextField } from "@mui/material";
import { FC, useId } from "react";
import { Controller, useFormContext } from "react-hook-form";
import getFormContent from "../../../shared/getFormContent";
import { academicFormValues } from "../utils/academicFormValues";


export const AcademicForm: FC = () => {
  const { control, formState: { errors }, } = useFormContext();

  const key = useId();
  return (
    <>
      {
        academicFormValues.map((item, index) => (
          <Grid key={key + index} item xs={12} sm={3}>
            {getFormContent (item, control, errors)}
          </Grid>
        ))}

    </>
  );
};
