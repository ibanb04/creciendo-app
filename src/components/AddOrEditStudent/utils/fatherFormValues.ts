import { GeneralFormValuesType } from "./generalFormValues";

export const fatherFormValues: GeneralFormValuesType[] = [
    {
        component: "textField",
        name: "fatherName",
        id: "father-name",
        type: "text",
        label: "Nombre del padre",
        placeholder: "Escriba aqui",
    },
    {
        component: "textField",
        name: "fatherId",
        id: "father-id",
        type: "text",
        label: "Cedula del padre",
        placeholder: "Escriba aqui",
    },
    {
        component: "textField",
        name: "fatherIdExpeditionPlace",
        id: "father-id-expedition-place",
        type: "text",
        label: "Lugar de expedicion",
        placeholder: "Escriba aqui",
    },
    {
        component: "textField",
        name: "fatherTel",
        id: "father-tel",
        type: "number",
        label: "Celular",
        placeholder: "Celular aqui",
    }, {
        component: "textField",
        name: "fatherProfession",
        id: "father-profession",
        type: "text",
        label: "Profesion del padre",
        placeholder: "Escriba aqui",
    }, {
        component: "textField",
        name: "fatherCompanyName",
        id: "father-company-name",
        type: "text",
        label: "Nombre de la Empresa",
        placeholder: "Escriba aqui",
    }, {
        component: "textField",
        name: "fatherJobTitle",
        id: "father-job-title",
        type: "text",
        label: "Cargo",
        placeholder: "Escriba aqui",
    },
    {
        component: "textField",
        name: 'fatherEmail',
        id: "father-email",
        type: "email",
        label: "Correo",
        placeholder: "Escriba aqui",
    }, {
        component: "checkbox",
        name: "fatherlivesWithStudent",
        id: "father-lives-with-student",
        label: "Vive con el estudiante",
    },
]