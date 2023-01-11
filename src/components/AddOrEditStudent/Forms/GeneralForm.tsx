import { Box, Grid } from "@mui/material";
import { FC, SetStateAction, useId } from "react";
import { useFormContext } from "react-hook-form";
import { generalFormValues } from "../utils/generalFormValues";
import getFormContent from '../../../shared/getFormContent';
import Paper from "@mui/material/Paper/Paper";

interface GeneralFormInputs {
  firstName: string;
  middleName: string;
  firstLastName: string;
  secondLastName: string;
  idType: string;
  idNumber: string;
  birthDate: SetStateAction<Date>;
  age: string;
  gender: string;
  placeOfBirth: string;
  cityOfBirth: string;
  expeditionPlace: string;
  address: string;
  neighborhood: string;
  studentPhoneNumber: string;
}

export const GeneralForm: FC = () => {
  const { control, formState: { errors }, } = useFormContext();
  const key = useId();
  return (
    <>

        {generalFormValues.map((item, index) => (
          <Grid key={key + index} item xs={12} sm={3}>
            {getFormContent(item, control, errors)}
          </Grid>
        ))}
    </>
  );
};
