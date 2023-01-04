import { GeneralFormValuesType } from "../../AddOrEditStudent/utils/generalFormValues";

export const generalInfoFormValues: GeneralFormValuesType[] = [
    {
        component: "textField",
        name: "firstName",
        id: "first-name",
        type: "text",
        label: "Primer Nombre",
        placeholder: "Escriba aqui",
        isRequired: true
    }, {
        component: "textField",
        name: "secondName",
        id: "second-name",
        type: "text",
        label: "Segundo Nombre",
        placeholder: "Escriba aqui",
    }, {
        component: "textField",
        name: "firstLastName",
        id: "first-last-name",
        type: "text",
        label: "Primer Apellido",
        placeholder: "Escriba aqui",
        isRequired: true
    }, {
        component: "textField",
        name: "secondLastName",
        id: "second-last-name",
        type: "text",
        label: "Segundo Apellido",
        placeholder: "Escriba aqui",
    },
    {
        component: "select",
        label: "Tipo de Documento",
        name: "studentIdType",
        id: "student-id-type",
        isRequired: true,
        menuItem: [
            {
                label: "Tarjeta de identidad",
                value: "TI",
            },
            {
                label: "Registro civil",
                value: "RC",
            },
        ],
    },
    {
        component: "textField",
        name: "studentId",
        id: "student-id",
        type: "number",
        label: "Numero de identificacion",
        placeholder: "Escriba aqui",
        isRequired: true
    },


    {
        component: "datePicker",
        name: "birthDate",
        id: "birth-date",
        type: "date",
        label: "Fecha de Nacimiento",
    }, {
        component: "textField",
        name: "age",
        id: "age",
        type: "number",
        label: "Edad",
        placeholder: "Escriba aqui",
    }, {
        component: "select",
        name: 'gradeToApply',
        id: "grade-to-apply",
        label: "Grado a cursar",
        menuItem: [
            { label: "Párvulo", value: "PARVULO", },
            { label: "Prejardín", value: "PREJARDIN", },
            { label: "Jardín", value: "JARDIN", },
            { label: "Transición", value: "TRANSICION", },
            { label: "Primero", value: "PRIMERO", },
            { label: "Segundo", value: "SEGUNDO", },
            { label: "Tercero", value: "TERCERO", },
            { label: "Cuarto", value: "CUARTO", },
            { label: "Quinto", value: "QUINTO", },
        ]
    }
]