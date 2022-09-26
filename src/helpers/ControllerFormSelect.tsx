import { FC, useId } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Controller } from "react-hook-form";

interface ControllerFormSelectProps {
  control: any;
  name: string;
  label: string;
  defaultValue?: string;
  id: string;
  size: "medium" | "small" | undefined;
  menuItem: string[];
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

  const handleSubmit = (data: string) => {
    console.log(data);
  };
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
            {menuItem.map((item: any, index: number) => (
              <MenuItem
                key={key + index}
                value={item.value}
                onClick={() => handleSubmit(item.value)}
              >
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
};
