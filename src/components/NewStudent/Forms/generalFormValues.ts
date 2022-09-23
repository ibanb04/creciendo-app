type GeneralFormValuesType = {
  component?: string;
  id?: string;
  name?: string;
  type?: string;
  label?: string;
  placeholder?: string;
  menuItem?: menuItem[];
};

type menuItem = {
  label: string;
  value: string;
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
    placeholder: "Segundo Nombre aqui",
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
    placeholder: "Segundo Apellido aqui",
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
    placeholder: "Numero de Documento aqui",
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
    component: "textField",
    name: "placeOfBirth",
    id: "place-of-birth",
    type: "text",
    label: "Departamento de Nacimiento",
    placeholder: "Departamento de Nacimiento aqui",
  },
  {
    component: "textField",
    name: "cityOfBirth",
    id: "city-of-birth",
    type: "text",
    label: "Ciudad de Nacimiento",
    placeholder: "Ciudad de Nacimiento aqui",
  },
  {
    component: "textField",
    name: "expeditionPlace",
    id: "expedition-place",
    type: "text",
    label: "Lugar de Expedicion",
    placeholder: "Lugar de Expedicion aqui",
  },
];
