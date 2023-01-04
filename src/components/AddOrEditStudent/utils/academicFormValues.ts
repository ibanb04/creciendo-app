type AcademicFormValuesType = {
    component?: string;
    id?: string;
    name?: string;
    type?: string;
    label?: string;
    placeholder?: string;
    maxRows?: number;
    rows?: number;
    isRequired?: boolean;
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
        isRequired: true,
        placeholder: "Correo electrónico",
    },
    {
        component: "select",
        label: "Grado a Cursar",
        name: "grade",
        id: "grade",
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
    },
    {
        component: "select",
        label: "Ultimo grado cursado",
        name: "lastGrade",
        id: "last-grade",
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
                value: "APROBADO",
            },
            {
                label: "Reprobado",
                value: "REPROBADO",
            },
            {
                label: "Desertó",
                value: "DESERTO",
            },
            {
                label: "Primera vez",
                value: "PRIMERA VEZ",
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
                value: "EDUCACION TRADICIONAL",
            },
            {
                label: "Inclusión",
                value: "INCLUSION",
            },
        ],
    },
    {
        component: "multipleSelect",
        name: "enterWithBehaviourRecord",
        id: "enter-with-behaviour-record",
        label: "Ingresa con acta de compromiso",
        menuItem: [
            { label: "Acta de nivelación académica", value: "ACTA DE NIVELACION ACADEMICA", },
            { label: "Acta de convivencia escolar", value: "ACTA DE CONVIVENCIA ESCOLAR", },
        ],
    },
    {
        component: "multipleSelect",
        name: "studentDisability",
        id: "student-disability-id",
        label: "Discapacidad",
        menuItem: [
            { label: "Auditiva", value: "AUDITIVA", },
            { label: "Visual", value: "VISUAL", },
            { label: "Física", value: "FISICA", },
            { label: "Cognitiva", value: "COGNITIVA", },
            { label: "Psicosocial", value: "PSICOSOCIAL", },
            { label: "Sensorial", value: "SENSORIAL", },
            { label: "Otra", value: "OTRA", },
            { label: "Ninguna", value: "NINGUNA", }

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
            { label: "ninguna", value: "NINGUNA", },
            {
                label: "Psicologia",
                value: "PSICOLOGIA",
            },
            {
                label: "Fonoaudiología",
                value: "FONOAUDIOLOGIA",
            },
            {
                label: "Terapia Ocupacional",
                value: "TERAPIA OCUPACIONAL",
            },
            {
                label: "Fisioterapia",
                value: "FISIOTERAPIA",
            },
            {
                label: "Psiquiatria",
                value: "PSIQUIATRIA",
            },
            {
                label: "Neuropsicología",
                value: "NEUROPSICOLOGIA",
            },

            {
                label: "Pediatria",
                value: "PEDIATRIA",
            },
            {
                label: "Psicopedagogía",
                value: "PSICOPEDAGOGIA",
            },
            {
                label: "Otra",
                value: "OTRA",
            },
            {
                label: "Ninguna",
                value: "NINGUNA",
            }
        ],
    },
    {
        component: "multipleSelect",
        name: "therapys",
        id: "therapy-id",
        label: "Asiste a terapias",
        menuItem: [
            {
                label: "Psicología",
                value: "PSICOLOGIA",
            },
            {
                label: "Fonoaudiología",
                value: "FONOAUDIOLOGIA",
            },
            {
                label: "Terapia ocupacional",
                value: "TERAPIA OCUPACIONAL",
            },
            {
                label: "Fisioterapia",
                value: "FISIOTERAPIA",
            },
            {
                label: "Psiquiatría",
                value: "PSIQUIATRIA INFANTIL",
            },
            {
                label: "Terapia cognitiva",
                value: "TERAPIA COGNITIVA",
            },
            {
                label: "Terapia integral",
                value: "TERAPIA INTEGRAL",
            },
            {
                label: "Otra",
                value: "OTRA",
            },
            {
                label: "Ninguna",
                value: "NINGUNA",
            }
        ],
    }, {
        component: "checkbox",
        name: "exceptionalPerformance",
        id: "exceptional-performance",
        label: "Capacidad excepcional",
    },

]