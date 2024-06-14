import SidebarLinks from './sidebarLinks';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Avatar, ListItem, ListItemIcon, ListItemText, Typography, List } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { logoutApi, checkAuth } from '../services/api';
import theme from '../theme';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const [fraterOpen, setFraterOpen] = React.useState(false);
  const [butlerOpen, setButlerOpen] = React.useState(false);
  const [authenticated, setAuthenticated] = React.useState(false);
  const [open, setOpen] = React.useState(true);

  React.useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await checkAuth();
        console.log(response)
        if (response) {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
        }
      } catch (error) {
        console.error("Error checking authentication:", error);
        setAuthenticated(false);
      }
    };

    checkAuthentication();
  }, []);

  const toggleFrater = () => {
    setFraterOpen(!fraterOpen);
  };
  
  const toggleButler = () => {
    setButlerOpen(!butlerOpen);
  };

  const toggleDrawer = () => {
    if (open) {
      setFraterOpen(false);
      setButlerOpen(false);
    }
    setOpen(!open);
  }

  const logoutHandler = async () => {
    await logoutApi(); 
    window.location.reload();
  };
  const drawerContent = authenticated ? (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open} >
      <DrawerHeader width={10}>
        <IconButton onClick={toggleDrawer}>
          {!open ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>
      {open ? <List>
      <ListItem sx={{ flexDirection: 'column', alignItems: 'center' }}>
        <ListItemIcon>
          <Avatar sx={{ width: '4rem', height: '4rem', color: theme.palette.background.paper, backgroundColor: theme.palette.primary.main }} />
        </ListItemIcon>
        <ListItemText sx={{ textAlign: 'center' }}>
          <Typography variant="subtitle1">
            {localStorage.getItem('username')}
          </Typography>
        </ListItemText>
      </ListItem>
      </List> : <></>}
      <Divider />
      <SidebarLinks 
        fraterOpen={fraterOpen}
        butlerOpen={butlerOpen}
        toggleFrater={toggleFrater}
        toggleButler={toggleButler}
      />
      <Divider />
      <List>
      <ListItem button onClick={logoutHandler}>
  <ListItemIcon
    sx={{
      minWidth: 0,
      mr: 3,
      justifyContent: 'center',
    }}
  >
    <ExitToAppIcon />
  </ListItemIcon>
  <ListItemText>
    <Typography>
      Logout
    </Typography>
  </ListItemText>
</ListItem>
      </List>
      </Drawer>
    </Box>
  ) : null;

  return (
    <>{drawerContent}</>
  );
}
