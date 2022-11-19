import { GeneralFormValuesType } from "../../NewStudent/utils/generalFormValues";

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