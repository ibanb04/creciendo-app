import { GeneralFormValuesType } from "../../NewStudent/utils/generalFormValues";

export const psychoPedagogicalHistoryFormValues: GeneralFormValuesType[] = [
  {
    component: "select",
    name: "lastSchoolGrade1",
    id: "last-school-grade-1",
    label: "Grado escolar",
    menuItem: [
      { label: "Párvulo", value: "párvulo" },
      { label: "Prejardín", value: "prejardín" },
      { label: "Jardín", value: "jardín" },
      { label: "Transición", value: "transición" },
      { label: "Primero", value: "primero" },
      { label: "Segundo", value: "segundo" },
      { label: "Tercero", value: "tercero" },
      { label: "Cuarto", value: "cuarto" },
      { label: "Quinto", value: "quinto" },
    ],
  },
  {
    component: "textField",
    name: "lastSchoolYear1",
    id: "last-school-year-1",
    type: "text",
    label: "Año escolar",
    placeholder: "Escriba aqui",
  },
  {
    component: "textField",
    name: "educationalInstitutionApplied1",
    id: "educational-institution-applied-1",
    type: "text",
    label: "Institución educativa",
    placeholder: "Escriba aqui",
  },
  {
    component: "textField",
    name: "withdrawalReason1",
    id: "withdrawal-reason-1",
    type: "text",
    label: "Motivo de retiro",
    placeholder: "Escriba aqui",
  },
  {
    component: "select",
    name: "lastSchoolGrade2",
    id: "last-school-grade-2",
    label: "Grado escolar",
    menuItem: [
      { label: "Párvulo", value: "párvulo" },
      { label: "Prejardín", value: "prejardín" },
      { label: "Jardín", value: "jardín" },
      { label: "Transición", value: "transición" },
      { label: "Primero", value: "primero" },
      { label: "Segundo", value: "segundo" },
      { label: "Tercero", value: "tercero" },
      { label: "Cuarto", value: "cuarto" },
      { label: "Quinto", value: "quinto" },
    ],
  },
  {
    component: "textField",
    name: "lastSchoolYear2",
    id: "last-school-year-2",
    type: "text",
    label: "Año escolar",
    placeholder: "Escriba aqui",
  },
  {
    component: "textField",
    name: "educationalInstitutionApplied2",
    id: "educational-institution-applied-2",
    type: "text",
    label: "Institución educativa",
    placeholder: "Escriba aqui",
  },
  {
    component: "textField",
    name: "withdrawalReason2",
    id: "withdrawal-reason-2",
    type: "text",
    label: "Motivo de retiro",
    placeholder: "Escriba aqui",
  },
  {
    component: "select",
    name: "schoolAdaptationProcess",
    id: "school-adaptation-process",
    label: "Proceso de adaptación escolar",
    menuItem: [
      { label: "Excelente", value: "excelente" },
      { label: "Bueno", value: "bueno" },
      { label: "Aceptable", value: "aceptable" },
      { label: "Difícil", value: "dificil" },
    ],
  },
  {
    component: "select",
    name: "relationshipWithTeachers",
    id: "relationship-with-teachers",
    label: "Relaciones con los docentes",
    menuItem: [
      { label: "Excelente", value: "excelente" },
      { label: "Bueno", value: "bueno" },
      { label: "Aceptable", value: "aceptable" },
      { label: "Malas", value: "malas" },
    ],
  },
  {
    component: "textField",
    name: "scholarDifficulties",
    id: "scholar-difficulties",
    type: "text",
    label: "Mayores dificultades presentadas en su proceso escolar",
    placeholder: "Escriba aqui",
    rows: 2,
  },
  {
    component: "textField",
    name: "scholarAchievements",
    id: "scholar-achievements",
    type: "text",
    label: "Mayores logros educativos",
    placeholder: "Escriba aqui",
    rows: 2,
  },
  {
    component: "checkbox",
    name: "teamworkActivities",
    id: "teamwork-activities",
    label:
      "Participó o participa en actividades que requieran integración grupal",
  },
  {
    component: "textField",
    name: "listTeamworkActivities",
    id: "list-teamwork-activities",
    type: "text",
    label: "¿Cuáles?",
    placeholder: "Escriba aqui",
    rows: 4,
  },
  {
    component: "select",
    name: "performance",
    id: "performance",
    label: "Desempeño",
    menuItem: [
      { label: "Excelente", value: "excelente" },
      { label: "Bueno", value: "bueno" },
      { label: "Aceptable", value: "aceptable" },
      { label: "No hay evidencia", value: "no hay evidencia" },
    ],
  },
];