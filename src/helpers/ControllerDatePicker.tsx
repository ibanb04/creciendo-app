import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { FC } from "react"
import { Controller } from 'react-hook-form';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { TextField } from "@mui/material";
import moment from "moment";


interface ControllerDatePickerProps {
    control: any;
    name: string;
    label: string;
    size: "medium" | "small" | undefined;
    id?: string;
}

export const ControllerDatePicker: FC<ControllerDatePickerProps> = ({
    name,
    control,
    label,
    id,
    size, }
) => {

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Controller
                name={name}
                control={control}
                render={({
                    field: { onChange, value, onBlur, name, ref },
                    fieldState,
                }) => (
                    <DatePicker
                        label={label}
                        value={value}
                        inputFormat="dd-MMM-yyyy"
                        onChange={(value) =>
                            onChange(moment(value).format("YYYY-MM-DD 12:00:00"))
                        }
                        inputRef={ref}
                        renderInput={(params) => (
                            (
                                <TextField
                                    {...params}
                                    onBlur={onBlur}
                                    label={label}
                                    size={size}
                                    name={name}
                                    sx={{ mt: 2, width: { xs: "80%", sm: "90%" } }}
                                    error={!!fieldState.error}
                                    helperText={fieldState.error?.message}
                                />
                            )
                        )}
                    />
                )}
            />
        </LocalizationProvider>
    )
}
