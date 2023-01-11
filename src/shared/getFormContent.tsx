import { ControllerAutoComplete } from "../helpers/ControllerAutoComplete";
import { ControllerCheckbox } from "../helpers/ControllerCheckbox";
import { ControllerDatePicker } from "../helpers/ControllerDatePicker";
import { ControllerFormMultipleSelect } from "../helpers/ControllerFormMultipleSelect";
import { ControllerFormSelect } from "../helpers/ControllerFormSelect";
import { ControllerFormTextField } from "../helpers/ControllerFormTextField";

const getFormContent = (item: any, control: any, errors: any) => {
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
                    errors={errors}
                    isRequired={item.isRequired}
                />
            );
        case "select":
            return (
                <ControllerFormSelect
                    control={control}
                    name={item.name}
                    size="small"
                    label={item.label}
                    menuItem={item.menuItem}
                    isRequired={item.isRequired}
                    id={item.id}
                    errors={errors}
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
                    isRequired={item.isRequired}
                    errors={errors}
                />
            );
        case "datePicker":
            return (
                <ControllerDatePicker
                    control={control}
                    name={item.name}
                    label={item.label}
                    size="small"
                    id={item.id}
                    isRequired={item.isRequired}
                    errors={errors}
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
                    isRequired={item.isRequired}
                    menuItem={item.menuItem}
                    errors={errors}
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