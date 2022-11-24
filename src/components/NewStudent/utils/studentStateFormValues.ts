import { GeneralFormValuesType } from "./generalFormValues";

export const studentStateFormValues: GeneralFormValuesType[] = [
    {
        component: "select",
        label: "Estado",
        name: "studentApproval",
        id: "student-state",
        menuItem: [
            { label: "Matriculado", value: "MATRICULADO", },
            { label: "Retirado", value: "RETIRADO", },
            { label: "Deserto", value: "DESERTO", },
        ],
    },
    {
        component: "checkbox",
        name: "faceToFaceAuthorization",
        id: "attend-in-alternation",
        label: "Autorizo la presencialidad del Alumno",
    },
]