import { FC } from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { errorMessage } from "../hooks/useErrorMessage";

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
  maxRows?: number;
  rows?: number;
  errors?: any;
  isRequired?: boolean;
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
  errors,
  rows,
  maxRows = 0,
  isRequired = false,
}) => {

  return (
    <Controller
      control={control}
      name={name}
      rules={{
        required: isRequired,
        maxLength: 65,
        pattern: {
          value: type === 'number' ? /^[0-9]+/ : /^[a-zA-Z ]+/,
          message: " Valor no permitido"
        }
      }}
      render={({ field }) => (
        <TextField
          id={id}
          maxRows={maxRows}
          label={label}
          color="secondary"
          type={type}
          multiline={type === "text"}
          placeholder={placeholder}
          inputProps={{
            maxLength: 65,
          }}
          margin={margin}
          size={size}
          rows={rows}
          sx={{
            width: { xs: "80%", sm: "90%" }
          }}
          onChange={(e) => field.onChange(e.target.value.toUpperCase())}
          value={field.value}
          helperText={errorMessage(field.value, errors, name, isRequired) || errors[name]?.message}
          error={!!errors[name]}
        />
      )}
    />
  );
};
