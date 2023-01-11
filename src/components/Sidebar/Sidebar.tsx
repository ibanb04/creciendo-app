import { FC, useEffect, useId, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import logo from "../../assets/img/logo.png";
import { Grid, Link } from "@mui/material";
import { Box } from "@mui/system";
import FaceIcon from '@mui/icons-material/Face';
import { Link as RouterLink } from "react-router-dom";
import BadgeIcon from '@mui/icons-material/Badge';
import HiveIcon from '@mui/icons-material/Hive';
import bg_blurry_gradient_form from '../../assets/bg_blurry_gradient_form3.svg';
import HomeIcon from '@mui/icons-material/Home';

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

interface ListSidebar {
  title: string;
  path: string;
  icon: any;
}
interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  drawerWidth: number;
}

export const Sidebar: FC<SidebarProps> = ({ open, setOpen, drawerWidth }) => {
  const [withScreen, setWithScreen] = useState(1420);

  const reportWindowSize = () => {
    setWithScreen(window.innerWidth);
  };
  window.onresize = reportWindowSize;

  const theme = useTheme();
  const id = useId();
  const handleDrawerClose = () => setOpen(false);
  const handleDrawerCloseMobil = () => {
    withScreen < 1420 && setOpen(false);
  };
  useEffect(() => {
    if (withScreen < 1420) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [withScreen, setOpen]);
  const listSidebar: ListSidebar[] = [
    {
      title: "Home",
      path: "/",
      icon: HomeIcon,
    },

    {
      title: "   Estudiantes",
      path: "/estudiantes",
      icon: FaceIcon,
    },
    {
      title: "Gestionar matrícula ",
      path: "/matriculas",
      icon: BadgeIcon,
    },
    {
      title: "Entrevistas",
      path: "/entrevistas",
      icon: HiveIcon,
    },
  ];

  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            boxShadow: 3,
            minHeight: "100vh",
            backgroundImage: `url(${bg_blurry_gradient_form})`,
            backgroundPosition: "center",
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{
            paddingBottom: 3,
          }}
        >
          <RouterLink to="/">
            <Box
              component="img"
              sx={{
                height: 100,
                width: 100,
                maxHeight: { xs: 167, md: 167 },
                maxWidth: { xs: 167, md: 167 },
                boxShadow: "0 5px 14px 0 rgba(128,128,128, 0.5)",
                borderRadius: "50%",
                border: "none",
              }}
              alt="Colegio Creciendo"
              src={logo}
            />
          </RouterLink>
        </Grid>
        <Divider />
        <List>
          {listSidebar.map((item, index) => (
            <Link
              key={id + index}
              underline="none"
              color="secondary.main"
              component={RouterLink}
              to={item.path}
              onClick={handleDrawerCloseMobil}
            >
              <ListItem disablePadding>
                <ListItemButton >
                  <ListItemIcon>
                    <Box component={item.icon} />
                  </ListItemIcon>
                  <ListItemText primaryTypographyProps={{ style: { color: "#000000" } }} primary={item.title} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </>
  );
};
