import { Box, Grid, styled, Toolbar } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import { DrawerHeader, Sidebar } from "../components/Sidebar";
import { RegisterStudent } from "../components/RegisterStudent/RegisterStudent";
import { NavBar } from "../components/NavBar";
import { useState } from "react";
import { Enrollment } from "../components/Enrollment";
import { Interview } from "../components/Interview";
import { AddOrEditStudent } from '../components/AddOrEditStudent/AddOrEditStudent';
import { AddOrEditInterview } from "../components/AddOrEditInterview";
import Home from "../components/home/Home";

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
          <Grid container direction="row" pr={{ md: 5}}>
            <Routes>
              <Route path="/estudiantes" element={<RegisterStudent />} />
              <Route path="/estudiantes/nuevo" element={<AddOrEditStudent action="add" />} />
              <Route path="/estudiantes/editar" element={<AddOrEditStudent action="edit" />} />
              <Route path="/matriculas" element={<Enrollment />} />
              <Route path="/entrevistas" element={<Interview />} />
              <Route path="/entrevistas/nuevo" element={<AddOrEditInterview action="add" />} />
              <Route path="/entrevistas/editar" element={<AddOrEditInterview action="edit" />} />
              <Route path="/*" element={<Home />} />
            </Routes>
          </Grid>
        </Main>
      </Box>
    </>
  );
};
