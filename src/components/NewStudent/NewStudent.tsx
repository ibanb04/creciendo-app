import { GeneralForm } from "./Forms/GeneralForm";
import { AcademicForm } from "./Forms/AcademicForm";
import { SocialEconomicForm } from "./Forms/SocialEconomicForm";
import { FamiliarForm } from "./Forms/FamiliarForm";
import { StudentStateForm } from "./Forms/StudentStateForm";
import { studentDefaultValues } from "./utils/studentDefaultValues";
import FormLayout from '../../ui/layouts/FormLayout';

const steps = [
  "Información General del Alumno:",
  "Información Académica:",
  "Informacion Socioeconómica:",
  "Informacion Familiar:",
  "Estado del alumno:",
];


function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <GeneralForm />;
    case 1:
      return <AcademicForm />;
    case 2:
      return <SocialEconomicForm />;
    case 3:
      return <FamiliarForm />;
    case 4:
      return <StudentStateForm />;
    default:
      return "unknown step";
  }
}

export const NewStudent = () => {

  return (
    <>
      <FormLayout title="Nuevo Estudiante" getStepContent={getStepContent} redirectRoute="/estudiantes" steps={steps} defaultValues={studentDefaultValues} />
    </>
  );
};
