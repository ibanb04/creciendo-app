import { Departamentos } from "./departamentos";



export const socialEconomicFormValues: object[] = [
    {
        component: "textField",
        name: "eps",
        id: "eps",
        type: "text",
        label: "EPS",
        placeholder: "Escriba aqui",
    },
    {
        component: "textField",
        name: "socioeconomicLevel",
        id: "socioeconomic-level",
        type: "text",
        label: "Estrato de vivienda",
        placeholder: "Escriba aqui",
    },
    {
        component: "textField",
        name: "sisbenLevel",
        id: "sisben-level",
        type: "text",
        label: "Nivel de Sisben",
        placeholder: "Escriba aqui",
    },
    {
        component: "textField",
        name: "sisbenId",
        id: "sisben-id",
        type: "text",
        label: "Carnet de sisben",
        placeholder: "Escriba aqui",
    },
    {
        component: "select",
        label: "Beneficiario de programa",
        name: "beneficiaryPrograms",
        id: "beneficiary-programs",
        menuItem: [
            { label: "Familias en Accion", value: "familiasEnAccion", },
            { label: "Veterano Fuerza Publica", value: "fuerzaPulica", },
            { label: "Madre Cabeza Familia", value: "cabezaFamilia", },
            { label: "Ninguno", value: "ninguno", },
        ],
    },
    {
        component: "textField",
        name: "etnia",
        id: "etnia",
        type: "text",
        label: "Etnia",
        placeholder: "Escriba aqui",
    },
    {
        component: "textField",
        name: "resguardo",
        id: "resguardo",
        type: "text",
        label: "Resguardo",
        placeholder: "Escriba aqui",
    },
    {
        component: "select",
        label: "Victima del conflicto",
        name: "conflictVictim",
        id: "conflict-victim",
        menuItem: [
            { label: "Hijo desplazado", value: "desplazado", },
            { label: "Hijo desmovilizado", value: "desmovilizado", },
            { label: "Victimas minas", value: "victimaMinas", },
            { label: "Ninguno", value: "ninguno", },
        ],
    },
    {
        component: "autocomplete",
        name: "ExpulsorDepartment",
        label: "Departamento expulsor",
        id: "expulsor-department",
        placeholder: "Selecione o escriba aqui",
        menuItem: Departamentos,
    },
    {
        component: "select",
        name: "expulsorCity",
        id: "expulsor-city",
        type: "text",
        label: "Municipio expulsor",
    },
    {
        component: "datePicker",
        name: "expulsionDate",
        label: "Fecha expulsión",
    },
    {
        component: "textField",
        name: "certificate",
        id: "certificate",
        type: "text",
        label: "Certificado de expulsión",
        maxRows: 4,
        placeholder: "Escriba aqui",

    },
]