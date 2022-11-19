import { ControllerAutoComplete } from "../helpers/ControllerAutoComplete";
import { ControllerCheckbox } from "../helpers/ControllerCheckbox";
import { ControllerDatePicker } from "../helpers/ControllerDatePicker";
import { ControllerFormMultipleSelect } from "../helpers/ControllerFormMultipleSelect";
import { ControllerFormSelect } from "../helpers/ControllerFormSelect";
import { ControllerFormTextField } from "../helpers/ControllerFormTextField";

const getFormContent = (item: any, control: any) => {
    switch (item.component) {
        case "textField":
            return (
                <ControllerFormTextField
                    control={control}
                    name={item.name}
                    label={item.label}
                    placeholder={item.placeholder}
                    type={item.type}
                    id={item.id}
                    margin={"normal"}
                    size={"small"}
                    variant={"outlined"}
                    rows={item.rows}
                    maxRows={item.maxRows}
                />
            );
        case "select":
            return (
                <ControllerFormSelect
                    control={control}
                    name={item.name}
                    defaultValue=""
                    size="small"
                    label={item.label}
                    menuItem={item.menuItem}
                    id={item.id}
                />
            );
        case "autocomplete":
            return (
                <ControllerAutoComplete
                    control={control}
                    name={item.name}
                    size="small"
                    id={item.id}
                    label={item.label}
                    placeholder={item.placeholder}
                    menuItem={item.menuItem}
                />
            );
        case "datePicker":
            return (
                <ControllerDatePicker
                    control={control}
                    name={item.name}
                    label={item.label}
                    size="small"
                />
            );
        case "multipleSelect":
            return (
                <ControllerFormMultipleSelect
                    control={control}
                    name={item.name}
                    id={item.id}
                    label={item.label}
                    size="small"
                    menuItem={item.menuItem}
                />
            );
        case "checkbox":
            return (
                <ControllerCheckbox
                    control={control}
                    name={item.name}
                    label={item.label}
                />
            );
        default:
            return "unknown step";
    }
};


export default getFormContent;