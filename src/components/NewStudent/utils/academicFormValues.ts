type AcademicFormValuesType = {
    component?: string;
    id?: string;
    name?: string;
    type?: string;
    label?: string;
    placeholder?: string;
    maxRows?: number;
    menuItem?: menuItem[] | string[];
};
type menuItem = {
    label?: string;
    value?: string;
};

export const academicFormValues: AcademicFormValuesType[] = [
    {
        component: "select",
        label: "Grado a Cursar",
        name: "grade",
        id: "grade",
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
    },
    {
        component: "select",
        label: "Ultimo grado cursado",
        name: "lastGrade",
        id: "last-grade",
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
    },
    {
        component: "textField",
        name: "school",
        id: "school",
        type: "text",
        label: "Colegio",
        placeholder: "Colegio aqui",
    },
    {
        component: "textField",
        name: "schoolCity",
        id: "school-city",
        type: "text",
        label: "Ciudad",
        placeholder: "Ciudad aqui",
    },
    {
        component: "select",
        label: "Situacion Academica",
        name: "academicSituation",
        id: "academic-situation",
        menuItem: [
            {
                label: "Aprobado",
                value: "aprobado",
            },
            {
                label: "Reprobado",
                value: "reprobado",
            },
            {
                label: "Primera vez",
                value: "nuevo",
            },
        ],
    },
    {
        component: "textField",
        name: "reason",
        id: "reason",
        type: "text",
        label: "Motivo de retiro",
        maxRows: 4,
        placeholder: "¿Cual?",

    }, {
        component: "select",
        label: "Discapacidad",
        name: "disability",
        id: "disability",
        menuItem: [
            {
                label: "fisica",
                value: "fisica",
            },
            {
                label: "cognitiva",
                value: "cognitiva",
            },
            {
                label: "multiple",
                value: "multiple",
            },
            {
                label: "otra",
                value: "otra",
            },
        ],
    },
    {
        component: "textField",
        name: "disabilityDescription",
        id: "disability-description",
        type: "text",
        label: "Descripcion de la discapacidad",
        maxRows: 4,
        placeholder: "¿Cual?",
    },
    {
        component: "textField",
        name: "diagnosis",
        id: "diagnosis",
        type: "text",
        label: "Diagnotico",
        maxRows: 4,
        placeholder: "¿Cual?",
    },

    {
        component: "multipleSelect",
        name: "especiallys",
        id: "especially-id",
        label: "Especialidades Tratadas",
        menuItem: [
            {
                label: "Psicologia",
                value: "psicologia",
            },
            {
                label: "Fonoaudiologia",
                value: "fonoaudiologia",
            },
            {
                label: "Terapia Ocupacional",
                value: "terapiaOcupacional",
            },
            {
                label: "Fisioterapia",
                value: "fisioterapia",
            },
            {
                label: "Psiquiatria",
                value: "psiquiatria",
            },
            {
                label: "Neuropsicologia",
                value: "neuropsicologia",
            },
            {
                label: "Medicina interna",
                value: "medicinaInterna",
            },
            {
                label: "Pediatria",
                value: "pediatria",
            },
            {
                label: "Psicopedagogia",
                value: "psicopedagogia",
            },
            {
                label: "Otra",
                value: "otra",
            },
        ],
    },
    {
        component: "multipleSelect",
        name: "therapys",
        id: "therapy-id",
        label: "Asiste a terapias",
        menuItem: [
            {
                label: "Psicologia",
                value: "psicologia",
            },
            {
                label: "Fonoaudiologia",
                value: "fonoaudiologia",
            },
            {
                label: "Terapia Ocupacional",
                value: "terapiaOcupacional",
            },
            {
                label: "Fisioterapia",
                value: "fisioterapia",
            },
            {
                label: "Psiquiatria",
                value: "psiquiatria",
            },
            {
                label: "Terapia integral",
                value: "terapiaIntegral",
            }
        ],
    }, {
        component: "checkbox",
        name: "exceptionalAbility",
        id: "exceptional-ability",
        label: "Capacidad excepcional",
    },

]