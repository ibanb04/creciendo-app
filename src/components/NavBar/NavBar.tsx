import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { FC, Fragment, useState } from "react";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { useAppDispatch, useAppSelector } from "../../store/useAppDispatch";
import { startLogout } from '../../store/slices/auth/thunks';
import Divider from "@mui/material/Divider/Divider";
import SettingsIcon from '@mui/icons-material/Settings';
import { Avatar, ListItemIcon } from "@mui/material";
import Logout from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";

interface NavBarProps {
  open?: boolean;
  drawerWidth?: number;
  setOpen?: any;
}

export const NavBar: FC<NavBarProps> = ({ open, drawerWidth, setOpen }) => {
  const [auth, setAuth] = useState(true);
  const { displayName, photoURL } = useAppSelector(state => state.auth);
  const navigate = useNavigate();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };
  const handleDrawerOpen = () => setOpen(true);
  interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        open={open}
        color="transparent"
        sx={{
          backdropFilter: "blur(20px)",
          backgroundColor: "rgba(229, 128, 255, 0.26)",
          //boxShadow: "none",
        }}
      >
        <Toolbar>
          <IconButton
            sx={{ mr: 2, ...(open && { display: "none" }) }}
            size="large"
            edge="start"
            color="inherit"
            onClick={handleDrawerOpen}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontFamily: "Didact Gothic", fontWeight: 600 }}>
            COLEGIO CRECIENDO
          </Typography>
          {auth && (
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <Fragment>
                  <Typography variant="body1" display={{ xs: "none", md: "block" }} >
                    {displayName}
                  </Typography>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    {...bindTrigger(popupState)}
                    color="secondary"
                  >
                    <Avatar sx={{ width: 30, height: 30 }} src={photoURL || ''} />

                  </IconButton>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={() => navigate('/perfil/editar')}>
                      <ListItemIcon>
                        <Avatar sx={{ width: 30, height: 30 }} src={photoURL || ''} />
                      </ListItemIcon>
                      {displayName}
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={() => navigate('/perfil/editar')}>
                      <ListItemIcon>
                        <SettingsIcon />
                      </ListItemIcon>
                      Ajustes
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                      <ListItemIcon>
                        <Logout />
                      </ListItemIcon>
                      Cerrar sesión
                    </MenuItem>
                  </Menu>
                </Fragment>
              )}
            </PopupState>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />

    </Box>
  );
};
