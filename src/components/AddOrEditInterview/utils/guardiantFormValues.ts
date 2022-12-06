import { GeneralFormValuesType } from "../../AddOrEditStudent/utils/generalFormValues";

export const guardianFormValues: GeneralFormValuesType[] = [

    {
        component: "textField",
        name: "guardianName",
        id: "guardian-name",
        type: "text",
        label: "Entrevistado",
        placeholder: "Escriba aqui",
    }, {
        component: "textField",
        name: "guardiantId",
        id: "guardiant-id",
        type: "text",
        label: "Cedula",
        placeholder: "Escriba aqui",
    }, {
        component: "textField",
        name: "guardiantRelationship",
        id: "guardiant-relationship",
        type: "text",
        label: "Parentesco",
        placeholder: "Escriba aqui",
    }, {
        component: "textField",
        name: "guardiantPhone",
        id: "guardiant-phone",
        type: "text",
        label: "Telefono",
        placeholder: "Escriba aqui",
    },
    {

        component: "textField",
        name: "interviewerName",
        id: "interviewer-name",
        type: "text",
        label: "Entrevistador",
        placeholder: "Escriba aqui",
    },
]