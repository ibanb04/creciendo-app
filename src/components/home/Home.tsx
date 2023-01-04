import {
  Grid, Typography,
  Button,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions
} from "@mui/material";
import asset1 from "../../assets/img/asset1.jpg";
import asset2 from "../../assets/img/asset2.jpg";
import asset3 from "../../assets/img/asset3.jpg";
import { useLectiveYear } from '../../hooks/useLectiveYear';
import { useNavigate } from "react-router-dom";

interface ItemsTypes {
  title: string;
  img: string;
  description: string;
  path: string;
}
const items: ItemsTypes[] = [
  {
    title: "Nuevo Estudiante",
    img: asset1,
    description: "Aquí podras matricular estudiantes nuevos y antiguos",
    path: "/estudiantes"
  },
  {
    title: "Gestión de Matrículas",
    img: asset2,
    description: "Aquí podras gestionar todos los documentos del proceso de matriculas",
    path: "/matriculas"
  },
  {
    title: "Entrevistas",
    img: asset3,
    description: "Aquí podras gestionar las entrevistas de los nuevos estudiantes",
    path: "/entrevistas"
  },

];
const Home = () => {
  const navigate = useNavigate();
  const lectiveYear = useLectiveYear();
  return (
    <Grid container spacing={2}  >
      <Grid item xs={12}>
        <Typography variant="h4">SISTEMA DE GESTIÓN DE MATRÍCULAS</Typography>
      </Grid>
      {
        items.map((item: ItemsTypes, i) => (
          <Grid key={i} item xs={4}  >
            <Card sx={{ maxWidth: 345 }} onClick={() => navigate(item.path)}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={item.img}
                  alt={item.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="secondary" onClick={() => navigate(item.path)}>
                  comenzar
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))
      }
    </Grid>
  );
};

export default Home;
