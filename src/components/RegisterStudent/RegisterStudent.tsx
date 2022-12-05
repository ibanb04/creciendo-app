import { Button, Chip, Container, Link, Paper, Skeleton, Stack } from "@mui/material";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { Link as RouterLink } from "react-router-dom";
import { setStudent } from "../../store/slices/student/student.slice";
import { useAppDispatch } from "../../store/useAppDispatch"
import { ListStudents } from "../ListStudents";

export const RegisterStudent = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          mb={5}
        >
          <Typography variant="h4" gutterBottom>
            Estudiantes
          </Typography>
          <Link
            underline="none"
            color="secondary.main"
            onClick={() => dispatch(setStudent(null))}
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
