import { GeneralFormValuesType } from "../../AddOrEditStudent/utils/generalFormValues";

export const guardianFormValues: GeneralFormValuesType[] = [

    {
        component: "textField",
        name: "guardianName",
        id: "guardian-name",
        type: "text",
        label: "Entrevistado",
        placeholder: "Escriba aqui",
        isRequired: true
    }, {
        component: "textField",
        name: "guardiantId",
        id: "guardiant-id",
        type: "number",
        label: "Cedula",
        placeholder: "Escriba aqui",
        isRequired: true
    }, {
        component: "textField",
        name: "guardiantRelationship",
        id: "guardiant-relationship",
        type: "text",
        label: "Parentesco",
        isRequired: true,
        placeholder: "Escriba aqui",
    }, {
        component: "textField",
        name: "guardiantPhone",
        id: "guardiant-phone",
        type: "number",
        label: "Telefono",
        placeholder: "Escriba aqui",
    },
    {

        component: "textField",
        name: "interviewerName",
        id: "interviewer-name",
        type: "text",
        label: "Entrevistador",
        isRequired: true,
        placeholder: "Escriba aqui",
    },
    {
        component: "datePicker",
        name: "interviewDate",
        id: "interview-date",
        type: "text",
        label: "Fecha de entrevista",
        placeholder: "Escriba aqui",
    },

]