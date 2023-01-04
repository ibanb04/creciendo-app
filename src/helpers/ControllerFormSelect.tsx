import { FC, useId } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { getDepartments } from "../services/getDepartments";
import Alert from "@mui/material/Alert";
import { useAppSelector } from "../store/useAppDispatch";
import FormHelperText from "@mui/material/FormHelperText/FormHelperText";
import { errorMessage } from "../hooks/useErrorMessage";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ListItemIcon from "@mui/material/ListItemIcon";
interface ControllerFormSelectProps {
  control: any;
  name: string;
  label: string;
  defaultValue?: string;
  id: string;
  size: "medium" | "small" | undefined;
  menuItem?: string[];
  errors?: any;
  isRequired?: boolean;
}

export const ControllerFormSelect: FC<ControllerFormSelectProps> = ({
  name,
  defaultValue,
  control,
  size,
  label,
  menuItem,
  id,
  isRequired = false,
  errors
}) => {
  const key = useId();
  const { birthDepartment } = useSelector(
    (state: RootState) => state.department
  );
  const { ejectorDepartment } = useAppSelector((state) => state.ejectorDepartment);

  const { data } = useQuery(
    [birthDepartment],
    () => getDepartments(birthDepartment),
    {
      refetchOnWindowFocus: false,
    }
  );

  const { data: ejectorDepartmentData } = useQuery(
    [ejectorDepartment],
    () => getDepartments(ejectorDepartment),
    {
      refetchOnWindowFocus: false,
    }
  );
  console.log("esta monda esta", isRequired)

  const cities = data?.map((city: any) => city.municipio);
  const ejectorCities = ejectorDepartmentData?.map((city: any) => city.municipio);
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: isRequired }}
      render={({ field }) => (
        <FormControl
          variant="outlined"
          color="secondary"
          sx={{ mt: 2, width: { xs: "80%", sm: "90%" } }}
          size={size}
          error={!!errors[name]}
        >
          <InputLabel id={id}>{label}</InputLabel>
          <Select labelId={id} id={id} defaultValue="" label={label} {...field}>
            {name === "cityOfBirth" || name === "ejectorMunicipality" ? (
              birthDepartment && name === "cityOfBirth" ? (
                cities?.map((item: any, index: number) => (
                  <MenuItem key={key + index} value={item}>
                    {item}
                  </MenuItem>
                ))
              ) : ejectorDepartment && name === "ejectorMunicipality" ? (
                ejectorCities?.map((item: any, index: number) => (
                  <MenuItem key={key + index} value={item}>
                    {item}
                  </MenuItem>
                ))
              ) : (
                <MenuItem >
                  <ErrorOutlineIcon fontSize="small" sx={{ mr: 0.5}} />
                  Escoja un departamento
                </MenuItem>
              )
            ) : (
              menuItem?.map((item: any, index: number) => (
                <MenuItem key={key + index} value={item.value}>
                  {item.label}
                </MenuItem>
              ))
            )}
          </Select>
          {
            isRequired && (
              <FormHelperText>
                {errorMessage(field.value, errors, name, isRequired) || errors[name]?.message}
              </FormHelperText>
            )
          }
        </FormControl>
      )}
    />
  );
};
