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
import { FC, useEffect } from 'react';
import { useAppSelector } from '../../store/useAppDispatch';
import { useNavigate } from 'react-router-dom';

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

interface AddOrEditInterviewProps {
  action?: string;
}
export const AddOrEditInterview: FC<AddOrEditInterviewProps> = ({ action }) => {
  const navigate = useNavigate();
  const { selectedInterview } = useAppSelector((state) => state.interview);
  const { displayName } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (action === 'edit' && !selectedInterview) {
      navigate('/entrevistas');
    }
  }, [action, selectedInterview]);

  return (
    <>
      {
        action === 'add' ?
          <FormLayout title="Nueva Entrevista" getStepContent={getStepContent} redirectRoute="/entrevistas" steps={steps} action={action} defaultValues={{ ...interviewDefaultValues, interviewerName: displayName }} />
          : selectedInterview ?
            <FormLayout title="Editar Entrevista" getStepContent={getStepContent} redirectRoute="/entrevistas" action={action} steps={steps} />
            : navigate('/entrevistas')
      }
    </>
  );
};
