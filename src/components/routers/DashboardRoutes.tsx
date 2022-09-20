import { Box, Grid, Toolbar } from "@mui/material";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import { RegisterStudent } from "../RegisterStudent";
import { NavBar } from "../NavBar";
import { useState } from "react";
import { NewStudent } from "../NewStudent";
import { Enrollment } from "../Enrollment";
import { Interview } from "../Interview";
import { NewInterview } from "../NewInterview";

const drawerWidth = 250;

export const DashboardRoutes = () => {
  const [open, setOpen] = useState(true);
  let xs;

  if (open) {
    xs = 9;
  } else {
    xs = 11;
  }

  return (
    <BrowserRouter>
      <Box sx={{ display: "flex" }}>
        <Grid container direction="row" columnSpacing={5}>
          <Grid item xs={12}>
            <NavBar open={open} drawerWidth={drawerWidth} setOpen={setOpen} />
          </Grid>
          <Grid item xs={xs - 10}>
            <Sidebar open={open} drawerWidth={drawerWidth} setOpen={setOpen} />
          </Grid>
          <Grid item xs>
            <Toolbar />
            <Routes>
              <Route path="/estudiantes" element={<RegisterStudent />} />
              <Route path="/estudiantes/nuevo" element={<NewStudent />} />
              <Route path="/matriculas" element={<Enrollment />} />
              <Route path="/entrevistas" element={<Interview />} />
              <Route path="/entrevistas/nuevo" element={<NewInterview />} />
            </Routes>
          </Grid>
        </Grid>
      </Box>
    </BrowserRouter>
  );
};
