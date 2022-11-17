import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { useId, useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { FormProvider, useForm } from "react-hook-form";
import { GeneralForm } from "./Forms/GeneralForm";
import { AcademicForm } from "./Forms/AcademicForm";
import { SocialEconomicForm } from "./Forms/SocialEconomicForm";
import { FamiliarForm } from "./Forms/FamiliarForm";
import { StudentStateForm } from "./Forms/StudentStateForm";
import { useNavigate } from "react-router-dom";

function getSteps() {
  return [
    "Información General del Alumno:",
    "Información Académica:",
    "Informacion Socioeconómica:",
    "Informacion Familiar:",
    "Estado del alumno:",
  ];
}

function getStepContent(step: any) {
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
  const methods = useForm({
    defaultValues: {
      firstName: "",
      middleName: "",
      lastName: "",
      secondSurname: "",
      colegio: "",
      ciudad: "",
      idType: "",
      idNumber: "",
      birthDate: "",
      age: "",
      gender: "",
      departmentOfBirth: "",
      cityOfBirth: "",
      expeditionPlace: "",
      dateOfBirth: "",
      address: "",
      barrio: "",
      tel: "",
      especially: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const id = useId();
  const navigate = useNavigate();

  const handleNext = (data: any) => {
    if (activeStep === steps.length - 1) {
      console.log(data);
      navigate("/estudiantes");
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>

      <Grid item xs={12} >
        <Box sx={{ backgroundColor: '#f8f8f8', minWidth: { xs: 'none', md: '100%' }, maxWidth: "100%", boxShadow: 3,pl: 4, pr: 2, py: 4, borderRadius: 4, mb: 3, mr: { xs: 3, md: 0 } }} >
          <Grid item xs={12} sx={{ mb: 3 }} >
            <Typography color="secondary.main" variant="h5">
              Nuevo Estudiante
            </Typography>
            <Divider />
          </Grid>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={id + index}>
                <StepLabel
                  optional={
                    index === 4 ? (
                      <Typography variant="caption">Ultimo paso</Typography>
                    ) : null
                  }
                >
                  {step}
                </StepLabel>
                <StepContent>
                  <FormProvider {...methods}>
                    <form onSubmit={methods.handleSubmit(handleNext)}>
                      <Grid
                        container
                        direction="row"
                        columnSpacing={1}
                        spacing={2.5}
                        mb={2}
                        py={1}
                      >
                        {getStepContent(activeStep)}
                      </Grid>
                      <Box sx={{ mb: 2 }}>
                        <div>
                          <Button
                            color="secondary"
                            variant="contained"
                            //onClick={handleNext}
                            sx={{ mt: 1, mr: 1 }}
                            type="submit"
                            size="large"
                          >
                            {index === steps.length - 1
                              ? "Finish"
                              : "Continuar"}
                          </Button>
                          <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            disabled={index === 0}
                            onClick={handleBack}
                            sx={{ mt: 1, mr: 1 }}
                          >
                            Atras
                          </Button>
                        </div>
                      </Box>
                    </form>
                  </FormProvider>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>
                Todos los pasos han sido completados - has finalizado el
                registro!
              </Typography>
              <Button
                color="secondary"
                onClick={handleReset}
                sx={{ mt: 1, mr: 1 }}
              >
                Reset
              </Button>
            </Paper>
          )}
        </Box>
      </Grid>
    </>
  );
};
