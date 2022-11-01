import { Box, Button, Grid, Paper, Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material";
import { useId, useState, FC } from 'react';
import MotherForm from './MotherForm';
import FatherForm from './FatherForm';
import GuardiantForm from './GuardiantForm';
import AnotherContactForm from './AnotherContactForm';

function getSteps() {
  return [
    "Información de la madre:",
    "Información del padre:",
    "Informacion del acudiente:",
    "Otro contacto:",
  ];
}

function getStepContent(step: any) {
  switch (step) {
    case 0:
      return <MotherForm/>;
    case 1:
      return <FatherForm/>;
    case 2:
      return <GuardiantForm/>;
    case 3:
      return <AnotherContactForm/>;
    default:
      return "unknown step";
  }
}

export const FamiliarForm: FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const id = useId();

  const handleNext = () => {

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Grid item xs={12} sx={{ padding: '2%' }}>
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
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}

                    size="small"
                  >
                    siguiente
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Atras
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Grid>
  )
}
