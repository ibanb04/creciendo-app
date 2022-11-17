import { Box, Grid, styled, Toolbar } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { DrawerHeader, Sidebar } from "../components/Sidebar";
import { RegisterStudent } from "../components/RegisterStudent/RegisterStudent";
import { NavBar } from "../components/NavBar";
import { useState } from "react";
import { NewStudent } from "../components/NewStudent";
import { Enrollment } from "../components/Enrollment";
import { Interview } from "../components/Interview";
import { NewInterview } from "../components/NewInterview";

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
    <>
      <NavBar open={open} drawerWidth={drawerWidth} setOpen={setOpen} />
      <Box sx={{ display: "flex" }}>
        <Sidebar open={open} drawerWidth={drawerWidth} setOpen={setOpen} />
        <Toolbar />
        <Main open={open}>
          <DrawerHeader />
          <Grid container direction="row" px={{ md: "10%" }}>
            <Routes>
              <Route path="/estudiantes" element={<RegisterStudent />} />
              <Route path="/estudiantes/nuevo" element={<NewStudent />} />
              <Route path="/matriculas" element={<Enrollment />} />
              <Route path="/entrevistas" element={<Interview />} />
              <Route path="/entrevistas/nuevo" element={<NewInterview />} />
              <Route path="/*" element={ <Navigate to="/" /> } />

            </Routes>
          </Grid>
        </Main>
      </Box>
    </>
  );
};
