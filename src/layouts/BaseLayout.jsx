import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'
import SettingsIcon from '@mui/icons-material/Settings'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import LeaderboardIcon from '@mui/icons-material/Leaderboard'
import CasinoIcon from '@mui/icons-material/Casino'

import HomeIcon from '@mui/icons-material/Home';

import GameAvatar from './../components/GameAvatar'

import PhantomButton from './../components/PhantomButton'

//import Cashier from './../components/Cashier'

import { disconnect } from './../features/user/userSlice'

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
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
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

const BaseLayout = ({ children, showMenu }) => {
  const isConnected = useSelector(({ user }) => user.isConnected)
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const redirect = useNavigate()
  const dispatch = useDispatch()

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar sx={{ p: 0 }}>
          { false && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                // marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Box style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Box style={{ display: 'flex' }}>
              <IconButton>
                <GameAvatar /> { /* marginRight: '1rem', marginLeft: '-1rem', marginTop: '0.25rem',  */}

              </IconButton>
            </Box>
            <Box style={{ display: 'flex', flexDirection: 'column', padding: '0.25rem' }}>
              <Typography color="primary" variant="h6" noWrap component="span">
                LUDO Game
              </Typography>
              <Typography color="secondary" variante="h6" noWrap component="span" sx={{ }}>
                Roll, Race, Reign!
              </Typography>
            </Box>
          </Box>

          <Box style={{ float: 'right', display: 'flex', flexDirection: 'column' }}>
            { /* isConnected ? <Cashier />  : <PhantomButton /> */}
          </Box>

        </Toolbar>
      </AppBar>
      
      { showMenu && (

        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />

          { /* Public menu */ }
          <List>
            <ListItem key='home-page' disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                onClick={() => redirect('/connect')}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  backgroundColor: window.location.pathname === '/connect' || window.location.pathname === '/' ? theme.palette.primary.dark : theme.palette.background.default,
                  px: 2.5,
                }}
                disabled={window.location.pathname === '/connect' || window.location.pathname === '/' }
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText primary="Home" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
            <ListItem key='documentation' disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                onClick={() => redirect('/docs')}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  backgroundColor: window.location.pathname === '/docs' ? theme.palette.primary.dark : theme.palette.background.default,
                  px: 2.5,
                }}
                disabled={window.location.pathname === '/docs'}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <MenuBookIcon />
                </ListItemIcon>
                <ListItemText primary="Documentation" sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          </List>

          { /* Game Menu (for connected users */ }
          
          { isConnected && (
            <>
              <Divider />

              <List>
                <ListItem key='game' disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    onClick={() => redirect('/rooms')}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      <CasinoIcon />
                    </ListItemIcon>
                    <ListItemText primary='Play' sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              </List>
              
              <List>
                <ListItem key='leaderboard' disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      <LeaderboardIcon />
                    </ListItemIcon>
                    <ListItemText primary='leaderboard' sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              </List>
            </>
          )}

          { /* Footer Menu */ }
          { isConnected && (
            <>
              <Divider />
              <List sx={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'flex-end' }}>
                <ListItem key='setting' disablePadding sx={{ display: 'block' }}>
                  <ListItemButton
                    onClick={() => {
                      redirect('/settings')
                    }}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }}
                    >
                      <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary='Settings' sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>

                <ListItem key='disconnect' disablePadding sx={{ display: 'block', color: theme.palette.error.main }}>
                  <ListItemButton
                    onClick={() => {
                      dispatch(disconnect())
                      redirect('/connect')
                    }}
                    sx={{
                      minHeight: 48,
                      justifyContent: open ? 'initial' : 'center',
                      px: 2.5,
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                        color: theme.palette.error.main
                      }}
                    >
                      <PowerSettingsNewIcon />
                    </ListItemIcon>
                    <ListItemText primary='Disconnect' sx={{ opacity: open ? 1 : 0 }} />
                  </ListItemButton>
                </ListItem>
              </List>
            </>
          )}
        </Drawer>
      )}

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        { children }
      </Box>
    </Box>
  );
}

export default BaseLayout
