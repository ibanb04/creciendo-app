import { GeneralFormValuesType } from "../../AddOrEditStudent/utils/generalFormValues";

export const additionalComentsFormValues: GeneralFormValuesType[] = [
    {
        component: "textField",
        name: "additionalComments",
        id: "additional-comments",
        type: "text",
        label: "Observaciones adicionales",
        placeholder: "Escriba aqui",
        rows: 4,
    }
]