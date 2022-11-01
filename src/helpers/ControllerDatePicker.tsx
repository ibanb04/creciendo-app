import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { FC } from "react"
import { Controller } from 'react-hook-form';
import type { DefaultValues } from "react-hook-form";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { TextField } from "@mui/material";

interface ControllerDatePickerProps {
    control: any;
    name: string;
    label: string;
    size: "medium" | "small" | undefined;
}
type FormValues = {
    date: Date;
};

const defaultValues: DefaultValues<FormValues> = {
    date: new Date()
};

export const ControllerDatePicker: FC<ControllerDatePickerProps> = ({
    name,
    control,
    label,
    size, }
) => {

    return (
        <Controller
            control={control}
            name={name}
            render={({ field: { ref, onBlur, name, ...field }, fieldState }) => (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        {...field}
                        inputRef={ref}
                        renderInput={(inputProps) => (
                            <TextField
                                {...inputProps}
                                onBlur={onBlur}
                                label={label}
                                size={size}
                                name={name}
                                sx={{ mt: 2, width: { xs: "80%", sm: "90%" } }}
                                error={!!fieldState.error}
                                helperText={fieldState.error?.message}
                            />
                        )}
                    />
                </LocalizationProvider>
            )}
        />
    )
}
