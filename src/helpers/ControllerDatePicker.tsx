import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { FC } from "react"
import { Controller } from 'react-hook-form';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import {es} from 'date-fns/locale';
import { TextField } from "@mui/material";
import moment from "moment";
import { errorMessage } from "../hooks/useErrorMessage";


interface ControllerDatePickerProps {
    control: any;
    name: string;
    label: string;
    size: "medium" | "small" | undefined;
    id?: string;
    errors?: any;
    isRequired?: boolean;
}

export const ControllerDatePicker: FC<ControllerDatePickerProps> = ({
    name,
    control,
    label,
    id,
    size,
    isRequired = false,
    errors
}
) => {
    return (
        <LocalizationProvider locale={es} dateAdapter={AdapterDateFns}>
            <Controller
                name={name}
                control={control}
                rules={{ required: isRequired }}
                render={({
                    field: { onChange, value, onBlur, name, ref },
                    fieldState,
                }) => (
                    <DatePicker
                        label={label}
                        value={value}
                        inputFormat="dd/MM/yyyy"
                        onChange={(value) =>
                            onChange(moment(value).format("YYYY/MM/DD 12:00:00"))
                        }
                        inputRef={ref}
                        renderInput={(params) => (
                            (
                                <TextField
                                    {...params}
                                    onBlur={onBlur}
                                    variant="outlined"
                                    color="secondary"
                                    label={label}
                                    size={size}
                                    name={name}
                                    sx={{ mt: 2, width: { xs: "80%", sm: "90%" } }}
                                    helperText={errorMessage(value, errors, name, isRequired) || errors[name]?.message}
                                    error={!!errors[name]}
                                />
                            )
                        )}
                    />
                )}
            />
        </LocalizationProvider>
    )
}
