import { GeneralFormValuesType } from "./generalFormValues";

export const studentStateFormValues: GeneralFormValuesType[] = [
    {
        component: "select",
        label: "Estado",
        name: "studentState",
        id: "student-state",
        menuItem: [
            { label: "Matriculado", value: "MATRICULADO", },
            { label: "Retirado", value: "RETIRADO", },
            { label: "Deserto", value: "DESERTO", },
        ],
    },
    {
        component: "checkbox",
        name: "AttendInAlternation",
        id: "attend-in-alternation",
        label: "¿Asistira en Alternancia?",
    },
]