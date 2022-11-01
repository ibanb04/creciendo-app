import { GeneralFormValuesType } from "./generalFormValues";

export const studentStateFormValues: GeneralFormValuesType[] = [
    {
        component: "select",
        label: "Estado",
        name: "studentState",
        id: "student-state",
        menuItem: [
            { label: "Matriculado", value: "registered", },
            { label: "Retirado", value: "retired", },
        ],
    },
    {
        component: "checkbox",
        name: "AttendInAlternation",
        id: "attend-in-alternation",
        label: "¿Asistira en Alternancia?",
    },
]