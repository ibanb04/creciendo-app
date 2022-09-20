import { FC } from "react";
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
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import svg from "../../assets/img/EscudoCreciendo.png";
import { Grid } from "@mui/material";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

interface SidebarProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  drawerWidth: number;
}

export const Sidebar: FC<SidebarProps> = ({ open, setOpen, drawerWidth }) => {
  const theme = useTheme();

  const handleDrawerClose = () => setOpen(false);
  const listSidebar = [
    "Gestionar Estudiantes",
    "Gestionar Matricula",
    "Entrevistas",
    "Plantillas",
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
          <Grid
            component="img"
            sx={{
              height: 100,
              width: 100,
              maxHeight: { xs: 167, md: 167 },
              maxWidth: { xs: 167, md: 167 },
            }}
            alt="The house from the offer."
            src={svg}
          />
        </Grid>
        <Divider />
        <List>
          {listSidebar.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};
