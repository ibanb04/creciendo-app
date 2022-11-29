import { GeneralFormValuesType } from "../../AddOrEditStudent/utils/generalFormValues";

export const psychoAffectivityFormValues: GeneralFormValuesType[] = [
    {
        component: "textField",
        name: "peopleStudentLivesWith",
        id: "people-student-lives-with",
        type: "text",
        label: "Personas con quien convive",
        placeholder: "Escriba aqui",
    }, {
        component: "textField",
        name: "peopleStudentDontLivesWith",
        id: "not-people-student-lives-with",
        type: "text",
        label: " ¿qué relación tienes? En caso de no convivir con sus padres",
        placeholder: "Escriba aqui",
    }, {
        component: "textField",
        name: "legalGuardian",
        id: "legal-guardian",
        type: "text",
        label: "Tutor legal",
        placeholder: "Escriba aqui",
    }, {
        component: "textField",
        name: "numberOfSiblings",
        id: "number-of-siblings",
        type: "number",
        label: "Número de hermanos",
        placeholder: "Escriba aqui",
    }, {
        component: "select",
        name: "siblingsPosition",
        id: "siblings-position",
        label: "Posición entre los hermanos",
        menuItem: [
            { label: "Menor", value: "menor", },
            { label: "Intermedio", value: "intermedio", },
            { label: "Mayor", value: "mayor", },
            { label: "Único", value: "único", },
        ]
    }, {
        component: "textField",
        name: "fathersBrothers",
        id: "fathers-brothers",
        type: "number",
        label: "Hermanos padre",
        placeholder: "Escriba aqui",
    }, {
        component: "textField",
        name: "mothersBrothers",
        id: "mothers-brothers",
        type: "number",
        label: "Hermanos madre",
        placeholder: "Escriba aqui",
    }, {
        component: "textField",
        name: "bothParents",
        id: "both-parents",
        type: "number",
        label: "Hermanos ambos",
        placeholder: "Escriba aqui",
    }, {
        component: "textField",
        name: "studentLivesWithBrothers",
        id: "student-lives-with-brothers",
        type: "text",
        label: "¿Convive con sus hermanos?",
        placeholder: "Escriba aqui",
    }, {
        component: "textField",
        name: "otherKidsInFamily",
        id: "other-kids-in-family",
        type: "text",
        label: "¿Hay otros niños en casa?",
    }

]