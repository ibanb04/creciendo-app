import { Autocomplete, TextField } from "@mui/material";
import { FC } from "react";
import { Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setDepartment } from "../store/slices/department.slice";

interface ControllerAutoCompleteProps {
  control: any;
  name: string;
  label: string;
  size: "medium" | "small" | undefined;
  menuItem: string[];
  id: string;
  placeholder: string;
}
export const ControllerAutoComplete: FC<ControllerAutoCompleteProps> = ({
  name,
  control,
  menuItem,
  size,
  label,
  id,
  placeholder,
}) => {
  const dispatch = useDispatch();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Autocomplete
          id={id}
          options={menuItem.map((option) => option)}
          sx={{ mt: 2, width: { xs: "80%", sm: "90%" } }}
          size={size}
          onChange={(_, data) => {
            onChange(data);
            dispatch(setDepartment(data));
            return data;
          }}
          renderInput={(params) => (
            <TextField {...params} label={label} placeholder={placeholder} />
          )}
        />
      )}
    />
  );
};
