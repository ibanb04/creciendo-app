import { GeneralFormValuesType } from "../../NewStudent/utils/generalFormValues";

export const generalInfoFormValues: GeneralFormValuesType[] = [
    {
        component: "textField",
        name: "firstName",
        id: "first-name",
        type: "text",
        label: "Primer Nombre",
        placeholder: "Escriba aqui",
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
        name: 'degreeToApply',
        id: "degree-to-apply",
        label: "Grado a cursar",
        menuItem: [
            { label: "Párvulo", value: "párvulo", },
            { label: "Prejardín", value: "prejardín", },
            { label: "Jardín", value: "jardín", },
            { label: "Transición", value: "transición", },
            { label: "Primero", value: "primero", },
            { label: "Segundo", value: "segundo", },
            { label: "Tercero", value: "tercero", },
            { label: "Cuarto", value: "cuarto", },
            { label: "Quinto", value: "quinto", },
        ]
    }
]