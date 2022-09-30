import { FormControlLabel } from '@mui/material';
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

        <Controller
            name={name}
            control={control}
            render={({ field }) =>  <FormControlLabel sx={{mt:2}} control={<Checkbox defaultChecked {...field} />} label={label} />}
        />

    )
}
