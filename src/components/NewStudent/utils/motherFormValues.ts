import { GeneralFormValuesType } from "./generalFormValues";

export const motherFormValues: GeneralFormValuesType[] = [
    {
        component: "textField",
        name: "motherName",
        id: "mother-name",
        type: "text",
        label: "Nombre de la Madre",
        placeholder: "Escriba aqui",
    },
    {
        component: "textField",
        name: "motherTel",
        id: "mother-tel",
        type: "tel",
        label: "Celular",
        placeholder: "Celular aqui",
    }, {
        component: "textField",
        name: "motherProfession",
        id: "mother-profession",
        type: "text",
        label: "Profesion de la Madre",
        placeholder: "Escriba aqui",
    }, {
        component: "textField",
        name: "motherCompanyName",
        id: "mother-company-name",
        type: "text",
        label: "Nombre de la Empresa",
        placeholder: "Escriba aqui",
    }, {
        component: "textField",
        name: "motherJobTitle",
        id: "mother-job-title",
        type: "text",
        label: "Cargo",
        placeholder: "Escriba aqui",
    },
    {
        component: "textField",
        name: 'motherEmail',
        id: "mother-email",
        type: "email",
        label: "Correo",
        placeholder: "Escriba aqui",
    }, {
        component: "checkbox",
        name: "motherlivesWithStudent",
        id: "mother-lives-with-student",
        label: "Vive con el estudiante",
    },
]