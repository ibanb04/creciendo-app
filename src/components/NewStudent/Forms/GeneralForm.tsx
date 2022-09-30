import { Grid } from "@mui/material";
import { FC, SetStateAction, useId } from "react";
import { useFormContext } from "react-hook-form";
import { generalFormValues } from "../utils/generalFormValues";
import getFormContent from '../../../shared/getFormContent';

interface GeneralFormInputs {
  firstName: string;
  middleName: string;
  lastName: string;
  secondSurname: string;
  colegio: string;
  ciudad: string;
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
  tel: string;
}

export const GeneralForm: FC = () => {
  const { control } = useFormContext<GeneralFormInputs>();

  const key = useId();
  return (
    <>
      {generalFormValues.map((item, index) => (
        <Grid key={key + index} item xs={12} sm={3}>
          {getFormContent(item, control)}
        </Grid>
      ))}
    </>
  );
};
