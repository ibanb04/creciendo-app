type AcademicFormValuesType = {
    component?: string;
    id?: string;
    name?: string;
    type?: string;
    label?: string;
    placeholder?: string;
    maxRows?: number;
    rows?: number;
    menuItem?: menuItem[] | string[];
};
type menuItem = {
    label?: string;
    value?: string;
};

export const academicFormValues: AcademicFormValuesType[] = [
    {
        component: "textField",
        id: "studentEmail",
        name: "studentEmail",
        type: "email",
        label: "Correo electrónico",
        placeholder: "Correo electrónico",

    },
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
                label: "Desertó",
                value: "desertó",
            },
            {
                label: "Primera vez",
                value: "primera vez",
            },
        ],
    },
    {
        component: "textField",
        name: "reason",
        id: "reason",
        type: "text",
        label: "Motivo de retiro",
        maxRows: 5,
        placeholder: "¿Cual?",

    },
    {
        component: "select",
        label: "Modalidad Educativa",
        name: "educationalModality",
        id: "educational-modality",
        menuItem: [
            {
                label: "Educación Tradicional",
                value: "educación tradicional",
            },
            {
                label: "Inclusión",
                value: "inclusión",
            },
        ],
    },
    {
        component: "multipleSelect",
        name: "enterWithBehaviourRecord",
        id: "enter-with-behaviour-record",
        label: "Ingresa con acta de compromiso",
        menuItem: [
            { label: "Acta de nivelación académica", value: "Acta de nivelación académica ", },
            { label: "Acta de convivencia escolar", value: "Acta de convivencia escolar", },
        ],
    },
    {
        component: "multipleSelect",
        name: "studentDisability",
        id: "student-disability-id",
        label: "Discapacidad",
        menuItem: [
            { label: "Auditiva", value: "auditiva", },
            { label: "Visual", value: "visual", },
            { label: "Física", value: "física", },
            { label: "Cognitiva", value: "cognitiva", },
            { label: "Psicosocial", value: "psicosocial", },
            { label: "Sensorial", value: "sensorial", },
            { label: "Otra", value: "otra", },

        ],
    },
    {
        component: "textField",
        name: "disabilityDescription",
        id: "disability-description",
        type: "text",
        label: "Descripcion de la discapacidad(si aplica)",
        maxRows: 8,
        placeholder: "¿Cual?",
    },
    {
        component: "textField",
        name: "diagnosis",
        id: "diagnosis",
        type: "text",
        label: "Diagnotico",
        maxRows: 8,
        placeholder: "Escriba aqui",
    },

    {
        component: "multipleSelect",
        name: "especiallys",
        id: "especially-id",
        label: "Especialidades Tratadas",
        menuItem: [
            { label: "ninguna", value: "ninguna", },
            {
                label: "Psicologia",
                value: "psicologia",
            },
            {
                label: "Fonoaudiología",
                value: "fonoaudiología",
            },
            {
                label: "Terapia Ocupacional",
                value: "terapia ocupacional",
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
                label: "Neuropsicología",
                value: "neuropsicología",
            },

            {
                label: "Pediatria",
                value: "pediatria",
            },
            {
                label: "Psicopedagogía",
                value: "psicopedagogía",
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
            { label: "ninguna", value: "ninguna", },
            {
                label: "Psicología",
                value: "psicología",
            },
            {
                label: "Fonoaudiología",
                value: "fonoaudiología",
            },
            {
                label: "Terapia ocupacional",
                value: "terapia ocupacional",
            },
            {
                label: "Fisioterapia",
                value: "fisioterapia",
            },
            {
                label: "Psiquiatría",
                value: "psiquiatría infantil",
            },
            {
                label: "Terapia cognitiva",
                value: "terapia cognitiva",
            },
            {
                label: "Terapia integral",
                value: "terapia integral",
            },
            {
                label: "Otra",
                value: "otra",
            }
        ],
    }, {
        component: "checkbox",
        name: "exceptionalPerformance",
        id: "exceptional-performance",
        label: "Capacidad excepcional",
    },

]