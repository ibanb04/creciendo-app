import { Button, Grid, Link, Container, Stack, Skeleton, Paper } from '@mui/material';
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { Link as RouterLink } from "react-router-dom";
import { ListInterviews } from '../ListInterviews';
import { useAppDispatch } from '../../store/useAppDispatch';

export const Interview = () => {
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
            Entrevistas
          </Typography>
          <Link
            underline="none"
            color="secondary.main"
            //onClick={() => dispatch()}
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
