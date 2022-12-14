import { FormControlLabel, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import { FC } from "react";
import { Controller } from 'react-hook-form';

interface ControllerCheckboxProps {
    control: any;
    name: string;
    label: string;
}
export const ControllerCheckbox: FC<ControllerCheckboxProps> = ({
    control,
    name,
    label
}) => {
    return (
        <FormControlLabel
            sx={{ mt: 2 }}
            control={
                <Controller
                    name={name}
                    control={control}
                    render={({ field: props }) => (
                        <Checkbox
                            {...props}
                            color="secondary"
                            checked={props.value}
                            onChange={(e) => props.onChange(e.target.checked)}
                        />
                    )}
                />
            }
            color="secondary"
            label={
                <Typography variant="body2" color="inherit">
                    {label}
                </Typography>
            }
        />
    )
}
