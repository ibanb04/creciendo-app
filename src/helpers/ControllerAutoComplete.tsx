import { Autocomplete, TextField } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { Controller } from "react-hook-form";

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
  const [dataAutocomplete, setDataAutocomplete] = useState<string | null>("");
  console.log(dataAutocomplete);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange } }) => (
        <Autocomplete
          id={id}
          options={menuItem.map((option) => option)}
          sx={{ mt: 2, width: { xs: "80%", sm: "90%" } }}
          size={size}
          renderInput={(params) => (
            <TextField {...params} label={label} placeholder={placeholder} />
          )}
          onChange={(_, data) => {
            onChange(data);
            setDataAutocomplete(data);
            return data;
          }}
        />
      )}
    />
  );
};
