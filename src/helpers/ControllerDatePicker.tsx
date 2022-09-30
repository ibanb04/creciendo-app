import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { FC, useState } from "react"
import { Controller } from 'react-hook-form';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { TextField } from "@mui/material";

interface ControllerDatePickerProps {
    control: any;
    name: string;
    label: string;
    size: "medium" | "small" | undefined;
}

export const ControllerDatePicker: FC<ControllerDatePickerProps> = ({
    name,
    control,
    label,
    size, }
) => {

    const [reqDate, setreqDate] = useState(new Date());
    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, ...restField } }) => (
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label={label}
                        onChange={(event) => {
                            onChange(event);
                            setreqDate(event);
                        }}
                        renderInput={(params) => <TextField type="date" {...params} sx={{ mt: 2, width: { xs: "80%", sm: "90%" } }} size={size} />}
                        {...restField}
                    />
                </LocalizationProvider>
            )}
        />
    )
}
