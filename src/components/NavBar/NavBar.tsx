import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { FC, Fragment, useContext, useState } from "react";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../auth/types/types";

interface NavBarProps {
  open?: boolean;
  drawerWidth?: number;
  setOpen?: any;
}

export const NavBar: FC<NavBarProps> = ({ open, drawerWidth, setOpen }) => {
  const [auth, setAuth] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };
  const handleDrawerOpen = () => setOpen(true);
  interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
  }
  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({
      type: types.logout,
    });
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
          backgroundImage:
            "linear-gradient(90deg, rgba(248, 196, 249, 0.66) 22.8%, rgba(253, 122, 4, 0.15) 64.6%)",
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Colegio Creciendo
          </Typography>
          {auth && (
            <PopupState variant="popover" popupId="demo-popup-menu">
              {(popupState) => (
                <Fragment>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    {...bindTrigger(popupState)}
                    color="secondary"
                  >
                    <AccountCircle />
                  </IconButton>
                  <Menu {...bindMenu(popupState)}>
                    <MenuItem onClick={popupState.close}>Profile</MenuItem>
                    <MenuItem onClick={popupState.close}>My account</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </Fragment>
              )}
            </PopupState>
          )}
        </Toolbar>
      </AppBar>
      <Toolbar />
      {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? "Logout" : "Login"}
        />
      </FormGroup> */}
    </Box>
  );
};
