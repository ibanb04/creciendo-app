import { Departamentos } from "./departamentos";

export type GeneralFormValuesType = {
  component?: string;
  id?: string;
  name?: string;
  type?: string;
  label?: string;
  placeholder?: string;
  menuItem?: menuItem[] | string[];
};

type menuItem = {
  label: string;
  value?: string;
};


export const generalFormValues: GeneralFormValuesType[] = [
  {
    component: "textField",
    id: "first-name",
    name: "firstName",
    type: "text",
    label: "Primer Nombre",
    placeholder: "Primer Nombre aqui",
  },
  {
    component: "textField",
    id: "middle-name",
    name: "middleName",
    type: "text",
    label: "Segundo Nombre",
    placeholder: "Escriba aqui",
  },
  {
    component: "textField",
    name: "lastName",
    id: "last-name",
    type: "text",
    label: "Primer Apellido",
    placeholder: "Primer Apellido aqui",
  },
  {
    component: "textField",
    name: "secondSurname",
    id: "second-surname",
    type: "text",
    label: "Segundo Apellido",
    placeholder: "Escriba aquí",
  },
  {
    component: "select",
    label: "Tipo de Documento",
    name: "idType",
    id: "id-type",
    menuItem: [
      {
        label: "Tarjeta de identidad",
        value: "TI",
      },
      {
        label: "Registro civil",
        value: "RC",
      },
    ],
  },
  {
    component: "textField",
    name: "idNumber",
    id: "id-number",
    type: "number",
    label: "Numero de Documento",
    placeholder: "Escriba aquí",
  },

  {
    component: "select",
    label: "Genero",
    name: "gender",
    id: "id-gender",
    menuItem: [
      {
        label: "Masculino",
        value: "M",
      },
      {
        label: "Femenino",
        value: "F",
      },
    ],
  },
  {
    component: "autocomplete",
    name: "departmentOfBirth",
    label: "Departamento de Nacimiento",
    id: "department",
    placeholder: "Departamento de Nacimiento aqui",
    menuItem: Departamentos,
  },
  {
    component: "select",
    name: "cityOfBirth",
    id: "city-of-birth",
    type: "text",
    label: "Ciudad de Nacimiento",
  },  
  {
    component: "datePicker",
    name: "dateOfBirth",
    label: "Fecha de Nacimiento",

  },
  {
    component: "textField",
    name: "expeditionPlace",
    id: "expedition-place",
    type: "text",
    label: "Lugar de Expedicion",
    placeholder: "Escrbir aqui",
  },
  {
    component: "textField",
    name: "address",
    id: "address",
    type: "text",
    label: "Direccion",
    placeholder: "Direccion aqui",
  },
  {
    component: "textField",
    name: "barrio",
    id: "barrio",
    type: "text",
    label: "Barrio",
    placeholder: "Barrio aqui",
  },
  {
    component: "textField",
    name: "tel",
    id: "tel",
    type: "tel",
    label: "Celular",
    placeholder: "Celular aqui",
  },
];
