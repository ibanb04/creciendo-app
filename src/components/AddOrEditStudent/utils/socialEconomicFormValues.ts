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
            { label: "Grupo A", value: "GRUPO A", },
            { label: "Grupo B", value: "GRUPO B", },
            { label: "Grupo C", value: "GRUPO C", },
            { label: "Grupo D", value: "GRUPO D", },
            { label: "No aplica", value: "NO APLICA", },
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
            { label: "Familias en Acción", value: "FAMILIAS EN ACCION", },
            { label: "Beneficiario Veterano fuerza pública", value: "BENEFICIARIO VETERANO FUERZA PUBLICA", },
            { label: "Beneficiario hijo madre cabeza de familia", value: "BENEFICIARIO HIJO MADRE CABEZA DE FAMILIA", },
            { label: "Beneficiario Héroe de la nación", value: "BENEFICIARIO HEROE DE LA NACION", },
            { label: "No aplica", value: "NO APLICA", },
        ],
    },
    {
        component: "select",
        name: "ethnicity",
        id: "ethnicity-id",
        label: "Etnia",
        menuItem: [
            { label: "Indígena", value: "INDIGENA", },
            { label: "Comunidad Afro", value: "COMUNIDAD AFRO", },
            { label: "No aplica", value: "NO APLICA", },
        ]
    },
    {
        component: "select",
        name: "indigenousShelter",
        id: "indigenous-shelter-id",
        label: "Resguardo",
        menuItem: [
            { label: "Resguardo Indígena", value: "RESGUARDO INDIGENA", },
            { label: "No aplica", value: "NO APLICA", },
        ]
    },
    {
        component: "select",
        label: "Victima del conflicto",
        name: "conflictVictim",
        id: "conflict-victim",
        menuItem: [
            { label: "Hijo desplazado", value: "DESPLAZADO", },
            { label: "Hijo desmovilizado", value: "DESMOVILIZADO", },
            { label: "Victimas minas", value: "VICTIMA MINAS", },
            { label: "No aplica", value: "NO APLICA", },
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