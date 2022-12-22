import { GeneralFormValuesType } from "./generalFormValues";

export const anotherContactFormValues: GeneralFormValuesType[] = [
    {
        component: "textField",
        name: "anotherContactName",
        id: "another-contact-name",
        type: "text",
        label: "Nombre",
        placeholder: "Escriba aqui",
    }, {
        component: "textField",
        name: "anotherContactTel",
        id: "another-contact-tel",
        type: "tel",
        label: "Celular",
        placeholder: "Celular aqui",
    }, {
        component: "textField",
        name: "anotherContactRelationship",
        id: "another-contact-relationship",
        type: "text",
        label: "Parentesco",
        placeholder: "Escriba aqui",
    },
    {
        component: "checkbox",
        name: "anotherContactlivesWithStudent",
        id: "another-contact-lives-with-student",
        label: "Vive con el estudiante",
        
    }
]

