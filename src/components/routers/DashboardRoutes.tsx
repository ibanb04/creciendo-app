import { Box, Grid, styled, Toolbar } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { DrawerHeader, Sidebar } from "../Sidebar";
import { RegisterStudent } from "../RegisterStudent/RegisterStudent";
import { NavBar } from "../NavBar";
import { useState } from "react";
import { NewStudent } from "../NewStudent";
import { Enrollment } from "../Enrollment";
import { Interview } from "../Interview";
import { NewInterview } from "../NewInterview";

const drawerWidth = 250;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,

  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

export const DashboardRoutes = () => {
  const [open, setOpen] = useState(true);

  return (
    <BrowserRouter>
      <NavBar open={open} drawerWidth={drawerWidth} setOpen={setOpen} />
      <Box sx={{ display: "flex" }}>
        <Sidebar open={open} drawerWidth={drawerWidth} setOpen={setOpen} />
        <Toolbar />
        <Main open={open}>
          <DrawerHeader />
          <Grid container direction="row">
            <Routes>
              <Route path="/estudiantes" element={<RegisterStudent />} />
              <Route path="/estudiantes/nuevo" element={<NewStudent />} />
              <Route path="/matriculas" element={<Enrollment />} />
              <Route path="/entrevistas" element={<Interview />} />
              <Route path="/entrevistas/nuevo" element={<NewInterview />} />
            </Routes>
          </Grid>
        </Main>
      </Box>
    </BrowserRouter>
  );
};
