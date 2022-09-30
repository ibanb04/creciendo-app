import { Grid, TextField } from "@mui/material";
import { FC, SetStateAction, useId } from "react";
import { useFormContext } from "react-hook-form";
import { ControllerFormTextField } from "../../../helpers/ControllerFormTextField";
import { generalFormValues } from "../utils/generalFormValues";
import { ControllerFormSelect } from "../../../helpers/ControllerFormSelect";
import { ControllerAutoComplete } from "../../../helpers/ControllerAutoComplete";
import { log } from "console";
import { ControllerDatePicker } from "../../../helpers/ControllerDatePicker";
interface FormInputs {
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
  phoneNum: string;
}

function getFormContent(item: any, control: any) {
  switch (item.component) {
    case "textField":
      return (
        <ControllerFormTextField
          control={control}
          name={item.name}
          label={item.label}
          placeholder={item.placeholder}
          type={item.type}
          id={item.id}
          margin={"normal"}
          size={"small"}
          variant={"outlined"}
        />
      );
    case "select":
      return (
        <ControllerFormSelect
          control={control}
          name={item.name}
          defaultValue=""
          size="small"
          label={item.label}
          menuItem={item.menuItem}
          id={item.id}
        />
      );
    case "autocomplete":
      return (
        <ControllerAutoComplete
          control={control}
          name={item.name}
          size="small"
          id={item.id}
          label={item.label}
          placeholder={item.placeholder}
          menuItem={item.menuItem}
        />
      );
    case "datePicker":
      return (
        <ControllerDatePicker
          control={control}
          name={item.name}
          label={item.label}
          size="small"
        />
      );
    default:
      return "unknown step";
  }
}

export const GeneralForm: FC = () => {
  const { control } = useFormContext<FormInputs>();

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
