import { GeneralFormValuesType } from "./generalFormValues";

export const guardianFormValues: GeneralFormValuesType[] = [
  {
    component: "textField",
    name: "guardianName",
    id: "guardian-name",
    type: "text",
    label: "Acudiente",
    placeholder: "Escriba aqui",
  },
  {
    component: "textField",
    name: "guardiantTel",
    id: "guardiant-tel",
    type: "number",
    label: "Celular",
    placeholder: "Celular aqui",
  },
  {
    component: "textField",
    name: "guardiantId",
    id: "guardiant-id",
    type: "text",
    label: "Cedula",
    placeholder: "Cedula aqui",
  },
  {
    component: "textField",
    name: "guardiantExpeditionPlace",
    id: "guardiant-expedition-place",
    type: "text",
    label: "Lugar de Expedicion",
    placeholder: "Escriba aqui",
  },
  {
    component: "textField",
    name: "guardiantRelationship",
    id: "guardiant-relationship",
    type: "text",
    label: "Parentesco",
    placeholder: "Escriba aqui",
  },
  {
    component: "textField",
    name: "guardiantEmail",
    id: "guardiant-email",
    type: "email",
    label: "Correo",
    placeholder: "Escriba aqui",
  },
  {
    component: "checkbox",
    name: "guardiantlivesWithStudent",
    id: "guardiant-lives-with-student",
    label: "Vive con el estudiante",
  },
];
