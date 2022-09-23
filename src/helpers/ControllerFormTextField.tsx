import { FC } from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";

interface ControllerFormTextFieldProps {
  control: any;
  name: string;
  label: string;
  placeholder: string;
  id: string;
  type?: string;
  margin: "dense" | "none" | "normal";
  size: "medium" | "small" | undefined;
  variant: "filled" | "outlined" | "standard";
}

export const ControllerFormTextField: FC<ControllerFormTextFieldProps> = ({
  control,
  name,
  id,
  label,
  placeholder,
  size,
  variant,
  type,
  margin,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          id={id}
          label={label}
          variant={variant}
          type={type}
          placeholder={placeholder}
          margin={margin}
          size={size}
          sx={{ width: { xs: "80%", sm: "90%" } }}
          {...field}
        />
      )}
    />
  );
};
