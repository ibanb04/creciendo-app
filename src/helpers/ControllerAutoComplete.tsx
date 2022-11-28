import { Autocomplete, TextField } from "@mui/material";
import { FC } from "react";
import { Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setDepartment } from "../store/slices/department/department.slice";
import { setEjectorDepartment } from "../store/slices/department/ejectorDepartment.slice";
import {
  resetDepartmentValue,
  setStudent,
} from "../store/slices/student/student.slice";
import { useAppDispatch, useAppSelector } from "../store/useAppDispatch";

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
  const dispatch = useAppDispatch();
  const { selectetStudent } = useAppSelector((state) => state.student);
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
          value={
            selectetStudent?.birthDepartment ? selectetStudent[name] : value
          }
          onChange={(_, data) => {
            onChange(data);
            selectetStudent?.birthDepartment && dispatch(resetDepartmentValue());
            name === 'ejectorDepartment' && dispatch(setEjectorDepartment(data));
            name === 'birthDepartment' && dispatch(setDepartment(data));
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
