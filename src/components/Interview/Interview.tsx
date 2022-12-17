import { Button, Grid, Link, Container, Stack, Skeleton, Paper } from '@mui/material';
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { Link as RouterLink } from "react-router-dom";
import { ListInterviews } from '../ListInterviews';
import { useResetStudentAndInterviewState } from '../../hooks/useResetStudentAndInterviewState';

export const Interview = () => {
  return (
    <>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
        >
          <Typography variant="h4" fontWeight={500} gutterBottom>
            Entrevistas
          </Typography>
          <Link
            underline="none"
            color="secondary.main"
            onClick={useResetStudentAndInterviewState()}
            component={RouterLink}
            to="nuevo"
          >
            <Button variant="contained">
              <AddIcon />
              &nbsp; Nuevo
            </Button>
          </Link>
        </Stack>
        <ListInterviews />
      </Container>
    </>
  );
};
