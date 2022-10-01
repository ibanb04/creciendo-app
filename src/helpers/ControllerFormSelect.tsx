import { FC, useEffect, useId, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";
import { useSelector } from "react-redux";
import { useQuery } from "react-query";
import { getDepartments } from "../services/getDepartments";

interface ControllerFormSelectProps {
  control: any;
  name: string;
  label: string;
  defaultValue?: string;
  id: string;
  size: "medium" | "small" | undefined;
  menuItem?: string[];
}

export const ControllerFormSelect: FC<ControllerFormSelectProps> = ({
  name,
  defaultValue,
  control,
  size,
  label,
  menuItem,
  id,
}) => {
  const key = useId();
  const { nameDepartment } = useSelector(
    (state: RootState) => state.department
  );

  const { data } = useQuery(
    [nameDepartment],
    () => getDepartments(nameDepartment),
    {
      refetchOnWindowFocus: false,
    }
  );

  const cities = data?.map((city: any) => city.municipio);

  return (
    <Controller
      name={name}
      defaultValue={defaultValue}
      control={control}
      render={({ field }) => (
        <FormControl
          sx={{ mt: 2, width: { xs: "80%", sm: "90%" } }}
          size={size}
        >
          <InputLabel id={id}>{label}</InputLabel>
          <Select labelId={id} id={id} label={label} {...field}>
            {(name === "cityOfBirth" || name === "expulsorCity" )&&
              cities?.map((item: any, index: number) => (
                <MenuItem key={key + index} value={item}>
                  {item}
                </MenuItem>
              ))}
            {menuItem?.map((item: any, index: number) => (
              <MenuItem key={key + index} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
};
