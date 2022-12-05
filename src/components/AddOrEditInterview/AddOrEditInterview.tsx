
import FormLayout from '../../ui/layouts/FormLayout';
import AdditionalCommetsForm from './Forms/AdditionalCommetsForm';
import EarlyChildhoodForm from './Forms/EarlyChildhoodForm';
import EmotionalAndFamilyRelationshipsForm from './Forms/EmotionalAndFamilyRelationshipsForm';
import GeneralInfoForm from './Forms/GeneralInfoForm';
import GuardiantForm from './Forms/GuardiantForm';
import MedicalHistoryForm from './Forms/MedicalHistoryForm';
import ObservedAspectsForm from './Forms/ObservedAspectsForm';
import PrenatalHistoryForm from './Forms/PrenatalHistoryForm';
import PsychoAffectivityForm from './Forms/PsychoAffectivityForm';
import PsychoPedagogicalHistoryForm from './Forms/PsychoPedagogicalHistoryForm';
import { interviewDefaultValues } from './utils/interviewDefaultValues';
import { FormLayoutProps } from '../AddOrEditStudent/AddOrEditStudent';
import { FC } from 'react';

const steps = [
  "Información del Acudiente:",
  "Datos Generales del Estudiante:",
  "Historia Pre-Natal:",
  "Informacion de Primera Infancia (Responder en término de meses aproximado):",
  "Aspectos Relevantes del Desarrollo Observados por los Padres:",
  "Historia Médica:",
  "Psico-Afectividad",
  "Relaciones Afectivas y Familiares:",
  "Historial Psico-Pedagogico:",
  "Observaciones Adicionales:",
];


function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <GuardiantForm />;
    case 1:
      return <GeneralInfoForm />;
    case 2:
      return <PrenatalHistoryForm />;
    case 3:
      return <EarlyChildhoodForm />;
    case 4:
      return <ObservedAspectsForm />;
    case 5:
      return <MedicalHistoryForm />;
    case 6:
      return <PsychoAffectivityForm />;
    case 7:
      return <EmotionalAndFamilyRelationshipsForm />;
    case 8:
      return <PsychoPedagogicalHistoryForm />;
    case 9:
      return <AdditionalCommetsForm />;

    default:
      return "unknown step";
  }
}

export const AddOrEditInterview: FC<FormLayoutProps> = ({ action }) => {

  return (
    <>
      <FormLayout title="Nueva Entrevista" getStepContent={getStepContent} redirectRoute="/entrevistas" steps={steps} action={action} defaultValues={interviewDefaultValues} />
    </>
  );
};
