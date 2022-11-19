import { GeneralFormValuesType } from "../../NewStudent/utils/generalFormValues";

export const medicalHistoryFormValues: GeneralFormValuesType[] = [
    {
        component: "textField",
        name: "illnessesSuffered",
        id: "illnesses-suffered",
        type: "text",
        label: "Enfermedades padecidas",
        placeholder: "Escriba aqui",
    }, {
        component: "select",
        name: 'allergies',
        id: "allergies",
        label: "Alergias",
        menuItem: [
            { label: "Si", value: "si", },
            { label: "No", value: "no", },
        ]
    }, {
        component: "textField",
        name: "allergiesDescription",
        id: "allergies-description",
        type: "text",
        label: "Tipo de alergia (si aplica)",
        placeholder: "Escriba aqui",
    }, 
    {
        component: "select",
        name: 'accidents',
        id: "accidents",
        label: "Accidentes",
        menuItem: [
            { label: "Si", value: "si", },
            { label: "No", value: "no", },
        ]
    }, {
        component: "textField",     
        name: "accidentsDescription",
        id: "accidents-description",
        type: "text",
        label: "Tipo de accidente (si aplica)",
        placeholder: "Escriba aqui",
    }, {
        component: "select",
        name: 'surgery',
        id: "surgery",
        label: "Cirugías",
        menuItem: [
            { label: "Si", value: "si", },
            { label: "No", value: "no", },
        ]
    }, {
        component: "textField",
        name: "surgeryDescription",
        id: "surgery-description",
        type: "text",
        label: "Tipo de cirugía (si aplica)",
        placeholder: "Escriba aqui",
    }, {
        component: "textField",
        name: "diseaseDiagnosis",
        id: "disease-diagnosis",
        type: "text",
        label: "Diagnóstico de enfermedad",
        placeholder: "Escriba aqui",
    }, {
        component: "textField",
        name: "treatmentSpecialties",
        id: "treatment-specialties",
        type: "text",
        label: "Especialidades de tratantes",
        placeholder: "Escriba aqui",
    }, {
        component: "textField",
        name: "treatmentDescription",
        id: "treatment-description",
        type: "text",
        label: "Tratamientos, medicaion o terapias",
        placeholder: "Escriba aqui",    
    }, {
        component: "textField",
        name: "familyHistoryOfDisabilities",
        id: "family-history-of-disabilities",
        type: "text",
        label: "Antecedentes familiares de discapacidad",
        placeholder: "Escriba aqui",
    }, 
]