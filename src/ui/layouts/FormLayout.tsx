import { FC, useEffect } from 'react';
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
import { useNavigate } from "react-router-dom";
import { startStudenRegister, registerInterview } from '../../firebase/providers';
import { studentDefaultValuesProps } from '../../components/NewStudent/utils/studentDefaultValues';
import { interviewDefaultValuesProps } from '../../components/NewInterview/utils/interviewDefaultValues';


interface FormLayoutProps {
    title: string;
    getStepContent: (value: number) => React.ReactNode;
    redirectRoute: string;
    steps: string[];
    defaultValues?: studentDefaultValuesProps | interviewDefaultValuesProps;
}

const FormLayout: FC<FormLayoutProps> = ({ title = "", getStepContent, redirectRoute, steps, defaultValues }) => {
    const methods = useForm<studentDefaultValuesProps | interviewDefaultValuesProps>({
        defaultValues: defaultValues,
    });
    const [activeStep, setActiveStep] = useState(0);

    const id = useId();
    const navigate = useNavigate();
   
    const handleNext = (data: studentDefaultValuesProps | interviewDefaultValuesProps) => {
        if (activeStep === steps.length - 1) {
            if (redirectRoute === '/estudiantes') {
                startStudenRegister(data);
            }
            if (redirectRoute === '/entrevistas') {
                registerInterview(data);
            }

            navigate(redirectRoute);
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
                <Box sx={{ backgroundColor: '#f8f8f8', minWidth: { xs: 'none', md: '100%' }, maxWidth: "100%", boxShadow: 3, pl: 4, pr: 2, py: 4, borderRadius: 4, mb: 3, mr: { xs: 3, md: 0 } }} >
                    <Grid item xs={12} sx={{ mb: 3 }} >
                        <Typography color="secondary.main" variant="h5">
                            {title}
                        </Typography>
                        <Divider />
                    </Grid>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((step, index) => (
                            <Step key={id + index}>
                                <StepLabel
                                    optional={
                                        index === steps.length - 1 ? (
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
                                                            ? "Guardar"
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


export default FormLayout