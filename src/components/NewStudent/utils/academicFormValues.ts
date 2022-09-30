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
            {
                label: "Prejardin",
                value: "prejardin",
            },
            {
                label: "Jardin",
                value: "jardin",
            },
            {
                label: "Transicion",
                value: "transicion",
            },
            {
                label: "Primero",
                value: "primero",
            },
            {
                label: "Segundo",
                value: "segundo",
            },
            {
                label: "Tercero",
                value: "tercero",
            },
            {
                label: "Cuarto",
                value: "cuarto",
            },
            {
                label: "Quinto",
                value: "quinto",
            },
        ],
    },
    {
        component: "select",
        label: "Ultimo grado cursado",
        name: "lastGrade",
        id: "last-grade",
        menuItem: [
            {
                label: "Prejardin",
                value: "prejardin",
            },
            {
                label: "Jardin",
                value: "jardin",
            },
            {
                label: "Transicion",
                value: "transicion",
            },
            {
                label: "Primero",
                value: "primero",
            },
            {
                label: "Segundo",
                value: "segundo",
            },
            {
                label: "Tercero",
                value: "tercero",
            },
            {
                label: "Cuarto",
                value: "cuarto",
            },
            {
                label: "Quinto",
                value: "quinto",
            },
        ],
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
        name: "especially",
        id: "especially-id",
        label: "Especialidades Tratadas",
        menuItem: [
            {
                label: "Fisica",
                value: "fisica",
            },
            {
                label: "Cognitiva",
                value: "cognitiva",
            },
            {
                label: "Multiple",
                value: "multiple",
            },
            {
                label: "Otra",
                value: "otra",
            },
        ],
    },
]