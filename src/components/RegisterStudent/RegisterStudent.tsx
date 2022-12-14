import { Button, Container, Link, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { Link as RouterLink } from "react-router-dom";
import { ListStudents } from "../ListStudents";
import { useResetStudentAndInterviewState } from '../../hooks/useResetStudentAndInterviewState';

export const RegisterStudent = () => {

  return (
    <>
      <Container sx={{ paddingLeft: 0 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
        >
          <Typography variant="h4" fontWeight={500} gutterBottom>
            Estudiantes
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
        <ListStudents />
      </Container>
    </>
  );
};
