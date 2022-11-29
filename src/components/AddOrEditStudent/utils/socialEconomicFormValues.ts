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
        component: "select",
        name: "housingStratum",
        id: "housing-stratum",
        label: "Estrato de Vivienda",
        menuItem: [
            { label: "0", value: "0", },
            { label: "1", value: "1", },
            { label: "2", value: "2", },
            { label: "3", value: "3", },
            { label: "4", value: "4", },
            { label: "5", value: "5", },
            { label: "6", value: "6", },
        ]

    },
    {
        component: "select",
        name: "sisbenLevel",
        id: "sisben-level",
        label: "Nivel de Sisben",
        menuItem: [
            { label: "Grupo A", value: "grupo A", },
            { label: "Grupo B", value: "grupo B", },
            { label: "Grupo C", value: "grupo C", },
            { label: "Grupo D", value: "grupo D", },
        ]
    },
    {
        component: "textField",
        name: "sisbenCarnet",
        id: "sisben-carnet",
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
            { label: "Familias en Acción", value: "familias en acción", },
            { label: "Beneficiario Veterano fuerza pública", value: "beneficiario veterano fuerza pública", },
            { label: "Beneficiario hijo madre cabeza de familia", value: "beneficiario hijo madre cabeza de familia", },
            { label: "Beneficiario Héroe de la nación", value: "beneficiario héroe de la nación", },
            { label: "Ninguno", value: "ninguno", },
        ],
    },
    {
        component: "select",
        name: "ethnicity",
        id: "ethnicity-id",
        label: "Etnia",
        menuItem: [
            { label: "Indígena", value: "indígena", },
            { label: "Comunidad Afro", value: "comunidad afro", },
            { label: "No aplica", value: "no aplica", },
        ]
    },
    {
        component: "select",
        name: "indigenousShelter",
        id: "indigenous-shelter-id",
        label: "Resguardo",
        menuItem: [
            { label: "Resguardo Indígena", value: "resguardo indígena", },
            { label: "No aplica", value: "no aplica", },
        ]
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
        name: "ejectorDepartment",
        label: "Departamento expulsor",
        id: "expulsor-department",
        placeholder: "Selecione o escriba aqui",
        menuItem: Departamentos,
    },
    {
        component: "select",
        name: "ejectorMunicipality",
        id: "expulsor-city",
        type: "text",
        label: "Municipio expulsor",
    },
    {
        component: "datePicker",
        name: "ejectionDate",
        id: "ejection-date",
        label: "Fecha expulsión",
    },
    {
        component: "textField",
        name: "ejectionCertificate",
        id: "ejection-certificate",
        type: "text",
        label: "Certificado de expulsión",
        maxRows: 4,
        placeholder: "Escriba aqui",

    },
]