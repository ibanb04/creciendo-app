import { styled } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Sidebar } from "../Sidebar";
import { RegisterStudent } from "../RegisterStudent";
import { NavBar } from "../NavBar";

const drawerWidth = 250;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
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
  const [open, setOpen] = useState(false);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Grid container>
          <Grid item xs={12}>
            <NavBar open={open} drawerWidth={drawerWidth} setOpen={setOpen} />
          </Grid>
          <Grid xs={4}>
            <Sidebar open={open} drawerWidth={drawerWidth} setOpen={setOpen} />
          </Grid>
          <Grid xs={8}>
            <Main open={open}>
              <BrowserRouter>
                <Routes>
                  <Route path="/sidebar" element={<RegisterStudent />} />
                </Routes>
              </BrowserRouter>
            </Main>
          </Grid>
        </Grid>
      </Box>
      {/* <Router>
        <div>
          <Route path="/sidebar" component={Sidebar} />
        </div>
      </Router> */}
    </>
  );
};
