import { GeneralFormValuesType } from "../../AddOrEditStudent/utils/generalFormValues";

export const prenatalHistoryFormValues: GeneralFormValuesType[] = [
    {
        component: "textField",
        name: "pregnancySummary",
        id: "pregnancy-summary",
        type: "text",
        label: "Resumen del embarazo",
        placeholder: "Escriba aqui",
    }, {
        component: "select",
        name: 'typeOfBirth',
        id: "type-of-birth",
        label: "Tipo de Nacimiento",
        menuItem: [
            { label: "Parto natural", value: "parto natural", },
            { label: "Cesárea", value: "cesárea", },
            { label: "A término", value: "a término", },
            { label: "Prematuro", value: "prematuro", },
        ]
    }, {
        component: "checkbox",
        name: "useOfIncubator",
        id: "use-of-incubator",
        label: "¿Uso de incubadora?",
    }, {
        component: "textField",
        name: "reasonForUseOfIncubator",
        id: "reason-for-use-of-incubator",
        type: "text",
        label: "Motivo de uso de incubadora",
        placeholder: "Escriba aqui",
    }, {
        component: "textField",
        name: "congenitalDiseases",
        id: "congenital-diseases",
        type: "text",
        label: "Enfermedades congénitas",
        placeholder: "Escriba aqui",
    },
]