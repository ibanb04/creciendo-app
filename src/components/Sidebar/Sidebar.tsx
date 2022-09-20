import { FC, useId } from "react";
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
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import svg from "../../assets/img/EscudoCreciendo.png";
import { Grid, Link } from "@mui/material";
import { Box } from "@mui/system";
import Face6Icon from "@mui/icons-material/Face6";
import FeedIcon from "@mui/icons-material/Feed";
import { Link as RouterLink } from "react-router-dom";

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
  const theme = useTheme();
  const id = useId();
  const handleDrawerClose = () => setOpen(false);
  const listSidebar: ListSidebar[] = [
    {
      title: "Gestionar Estudiante",
      path: "/estudiantes",
      icon: Face6Icon,
    },
    {
      title: "Gestionar Matricula",
      path: "/matriculas",
      icon: FeedIcon,
    },
    {
      title: "Entrevistas",
      path: "/entrevistas",
      icon: FamilyRestroomIcon,
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
            backgroundColor: "secondary.main",
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
              }}
              alt="Colegio Creciendo"
              src={svg}
            />
          </RouterLink>
        </Grid>
        <Divider />
        <List>
          {listSidebar.map((item, index) => (
            <Link
              key={id + index}
              underline="none"
              color="inherit"
              component={RouterLink}
              to={item.path}
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Box component={item.icon} />
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
    </>
  );
};
