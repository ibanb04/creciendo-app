import { FC, useId } from "react";
import { ListItemText, MenuItem, TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import Checkbox from '@mui/material/Checkbox';



interface ControllerFormMultipleSelectProps {
  control: any;
  name: string;
  label: string;
  defaultValue?: string;
  id: string;
  size: "medium" | "small" | undefined;
  menuItem: string[];
  margin?: "dense" | "none" | "normal";
  errors?: string;
  isRequired?: boolean;
}

export const ControllerFormMultipleSelect: FC<ControllerFormMultipleSelectProps> = ({
  name,
  control,
  size,
  label,
  margin = "normal",
  menuItem,
  errors,
  isRequired,
  id,
}) => {
  const key = useId();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      render={({ field: { onChange, value } }) => {

        return (
          <TextField
            select
            id={id}
            variant="outlined"
            label={label}
            color="secondary"
            size={size}
            margin={margin}
            sx={{ width: { xs: "80%", sm: "90%" } }}
            SelectProps={{
              defaultValue: [],
              multiple: true,
              value: value,
              renderValue: (selected: any) => selected.join(", "),
              onChange: onChange
            }}
          >
            {menuItem.map((item: any, index: number) => (
              <MenuItem key={index + key} value={item.value}>
                <Checkbox color="secondary" checked={value?.includes(item.value)} />
                <ListItemText primary={item.value} />
              </MenuItem>
            ))}

          </TextField>
        );
      }}
    />
  );
};
