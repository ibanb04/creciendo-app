import { GeneralFormValuesType } from "../../NewStudent/utils/generalFormValues";

export const earlyChildhoodFormValues: GeneralFormValuesType[] = [
    {
        component: "textField",
        name: "headControl",
        id: "head-control",
        type: "text",
        label: "Control cefálico",
        placeholder: "Escriba aqui",
    }, {
        component: "textField",
        name: "dorsalControl",
        id: "dorsal-control",
        type: "text",
        label: "Control dorsal",
        placeholder: "Escriba aqui",
    }, {
        component: "textField",
        name: "crawl",
        id: "crawl",
        type: "text",
        label: "Gateo",
        placeholder: "Escriba aqui",
    }, {
        component: "textField",
        name: "walk",
        id: "walk",
        type: "text",
        label: "Caminó",
        placeholder: "Escriba aqui",
    }, {
        component: "textField",
        name: "babbling",
        id: "babbling",
        type: "text",
        label: "Balbuceo",
        placeholder: "Escriba aqui",
    }, {
        component: "textField",
        name: "firstWords",
        id: "first-words",
        type: "text",
        label: "Primeras palabras",
        placeholder: "Escriba aqui",
    }, {
        component: "textField",
        name: "firstSentences",
        id: "first-sentences",
        type: "text",
        label: "Primeras frases",
        placeholder: "Escriba aqui",
    }, {
        component: "select",
        name: "sphincterControl",
        id: "sphincter-control",
        label: "Control de esfínteres",
        menuItem: [
            { label: "No", value: "no", },
            { label: "Si", value: "si", },
            { label: "En proceso", value: "en proceso", },
        ]
    }, {
        component: "textField",
        name: "kindOfDream",
        id: "kind-of-dream",
        type: "text",
        label: "Tipo de sueño",
        placeholder: "Escriba aqui",
    }, {
        component: "textField",
        name: "dayDreamDuration",
        id: "day-dream-duration",
        type: "text",
        label: "Horas de sueño diurno",
        placeholder: "Escriba aqui",
    }, {
        component: "textField",
        name: "nightDreamDuration",
        id: "night-dream-duration",
        type: "text",
        label: "Horas de sueño nocturno",
        placeholder: "Escriba aqui",
    }, {
        component: "checkbox",
        name: "enuresis",
        id: "enuresis",
        label: "¿Enuresis?",
    },

]