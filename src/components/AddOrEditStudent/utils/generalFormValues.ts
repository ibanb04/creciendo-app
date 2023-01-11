import { Departamentos } from "./departamentos";

export type GeneralFormValuesType = {
  component?: string;
  id?: string;
  name?: string;
  type?: string;
  label?: string;
  placeholder?: string;
  menuItem?: menuItem[] | string[];
  rows?: number;
  isRequired?: boolean;
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
    isRequired: true,
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
    name: "firstLastName",
    id: "first-last-name",
    type: "text",
    label: "Primer Apellido",
    isRequired: true,
    placeholder: "Primer Apellido aqui",
  },
  {
    component: "textField",
    name: "secondLastName",
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
    isRequired: true,
    menuItem: [
      {
        label: "Tarjeta de identidad",
        value: "TI",
      },
      {
        label: "Registro civil",
        value: "RC",
      },
      {
        label: "Extranjero",
        value: "EX",
      }
    ],
  },
  {
    component: "textField",
    name: "idNumber",
    id: "id-number",
    type: "number",
    label: "Numero de Documento",
    isRequired: true,
    placeholder: "Escriba aquí",
  },

  {
    component: "select",
    label: "Genero",
    name: "gender",
    isRequired: true,
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
    component: "textField",
    name: "age",
    id: "age",
    type: "number",
    label: "Edad",
    placeholder: "Escriba aquí",
    isRequired: true,
  },
  {
    component: "autocomplete",
    name: "birthDepartment",
    label: "Departamento de Nacimiento",
    id: "birth-department",
    placeholder: "Departamento de Nacimiento aqui",
    menuItem: Departamentos,
    isRequired: true,
  },
  {
    component: "select",
    name: "cityOfBirth",
    id: "city-of-birth",
    type: "text",
    label: "Ciudad de Nacimiento",
    isRequired: true,
  },
  {
    component: "datePicker",
    id: "birth-date",
    name: "birthDate",
    label: "Fecha de Nacimiento",
    isRequired: true,
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
    name: "neighborhood",
    id: "neighborhood",
    type: "text",
    label: "Barrio",
    placeholder: "Barrio aqui",
  },
  {
    component: "textField",
    name: "studentPhoneNumber",
    id: "studentPhoneNumber",
    type: "number",
    label: "Celular",
    placeholder: "Celular aqui",
  },
  {
    component: "datePicker",
    id: "admission-date",
    name: "admissionDate",
    label: "Fecha de Matricula",
  }
];
