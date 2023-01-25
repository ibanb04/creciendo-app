import { FC } from 'react';
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
import { studentDefaultValuesProps } from '../../components/AddOrEditStudent/utils/studentDefaultValues';
import { interviewDefaultValuesProps } from '../../components/AddOrEditInterview/utils/interviewDefaultValues';
import { useAppDispatch, useAppSelector } from '../../store/useAppDispatch';
import { setStudent } from '../../store/slices/student/student.slice';
import { setInterview } from '../../store/slices/interview/interview.slice';
import bg_blurry_gradient_form from '../../assets/bg_blurry_gradient_form1.svg';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Stack } from '@mui/system';
import { startStudentRegister, startUpdateStudent } from '../../store/slices/student/thunks';
import { startInterviewRegister, startUpdateInterview } from '../../store/slices/interview/thunks';


interface FormLayoutProps {
    title: string;
    getStepContent: (value: number) => React.ReactNode;
    redirectRoute: string;
    steps: string[];
    defaultValues?: studentDefaultValuesProps | interviewDefaultValuesProps;
    action?: string;
}

const FormLayout: FC<FormLayoutProps> = ({ title = "", getStepContent, redirectRoute, action, steps, defaultValues }) => {
    const dispatch = useAppDispatch();
    const { selectetStudent } = useAppSelector((state) => state.student);
    const { selectedInterview } = useAppSelector((state) => state.interview);

    const methods = useForm<studentDefaultValuesProps | interviewDefaultValuesProps>({
        defaultValues: selectetStudent ? selectetStudent : selectedInterview ? selectedInterview : defaultValues,
    });
    const [activeStep, setActiveStep] = useState(0);
    const id = useId();
    const navigate = useNavigate();

    const handleNext = (data: studentDefaultValuesProps | interviewDefaultValuesProps) => {
        if (activeStep === steps.length - 1) {
            if (redirectRoute === '/estudiantes' && action === 'add') {
                dispatch(setStudent(null));
                dispatch(startStudentRegister(data));
            }
            if (redirectRoute === '/estudiantes' && action === 'edit') {
                dispatch(startUpdateStudent(data));
                dispatch(setStudent(null));
            }

            if (redirectRoute === '/entrevistas' && action === 'add') {

                dispatch(startInterviewRegister(data));
            }
            if (redirectRoute === '/entrevistas' && action === 'edit') {
                dispatch(setInterview(null));
                dispatch(startUpdateInterview(data));
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

            <Grid item xs={12} pr={{ md: 5, }} >
                <Box sx={{
                    minHeight: "100vh",
                    backgroundImage: `url(${bg_blurry_gradient_form})`,
                    backgroundPosition: "center",
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    minWidth: { xs: 'none', md: '100%' },
                    maxWidth: "100%",
                    boxShadow: "0 20px 29px 0 rgba(128,128,128, 0.5)",
                    pl: 4, pr: 2, py: 4, borderRadius: 4, mb: 3, mr: { xs: 3, md: 0 }
                }} >
                    <Grid item xs={12} sx={{ mb: 3 }} >
                        <Stack
                            direction="row" alignItems="center"
                        >
                            <IconButton
                                aria-label="Atrás"
                                color="inherit"
                                onClick={() => navigate(-1)}
                            >
                                <ArrowBackIcon />
                            </IconButton>
                            <Typography color="inherit" variant="h4" sx={{ fontSize: 30 }} >
                                {title}
                            </Typography>
                        </Stack>
                        <Divider />
                    </Grid>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((step, index) => (
                            <Step key={id + index} >
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
                                                my={1}
                                                pb={1}
                                                px={2}
                                                sx={{
                                                    backgroundColor: "rgba( 255, 255, 255, 0.25 )",
                                                    backdropFilter: "blur( 8.5px )",
                                                    WebkitBackdropFilter: "blur( 8.5px )",
                                                    borderRadius: "10px",
                                                }}
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
                </Box>
            </Grid >
        </>
    );
};


export default FormLayout