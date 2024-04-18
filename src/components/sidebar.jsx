import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton,
  Collapse,
  createTheme,
  ThemeProvider,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const FraterLinks = [
  { text: 'Caju Limão', href: 'https://plataforma.vobi.com.br/profissional/projetos/perfil/174872/financeiro/cobrancas' },
  { text: 'QI 11 - Rafael', href: 'https://plataforma.vobi.com.br/profissional/projetos/perfil/170234/financeiro/cobrancas' },
  { text: 'Hênio', href: 'https://plataforma.vobi.com.br/profissional/projetos/perfil/132277/financeiro/cobrancas' },
  { text: 'Tiffany', href: 'https://plataforma.vobi.com.br/profissional/projetos/perfil/185454/financeiro/cobrancas' },
  { text: 'QI 11 Casa 10', href: '' },
  { text: '402 Norte', href: 'https://plataforma.vobi.com.br/profissional/projetos/perfil/147823/financeiro/cobrancas' },
  { text: 'Darson', href: 'https://plataforma.vobi.com.br/profissional/projetos/perfil/132283/financeiro/cobrancas' },
  { text: 'Maia', href: '' },
  { text: 'Thibaus', href: 'https://plataforma.vobi.com.br/profissional/projetos/perfil/132290/financeiro/cobrancas' },
  { text: 'Pingret', href: 'https://plataforma.vobi.com.br/profissional/projetos/perfil/162162/financeiro/cobrancas' },
];

const OtherLinks = [
  { text: 'Butler', path: '/butler' },
  { text: 'Faculdade', path: '/faculdade' },
  { text: 'Família', path: '/familia' },
  { text: 'Amigos', path: '/amigos' },
  { text: 'Projetos de expansão', path: '/projetos' },
  { text: 'Jogos', path: '/jogos' },
  { text: 'Contas', path: '/contas' },
  { text: 'Sonhos', path: '/sonhos' },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [fraterOpen, setFraterOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const toggleFrater = () => {
    setFraterOpen(!fraterOpen);
  };


  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div style={{ display: 'flex' }}>
        <Drawer
          variant="permanent"
          open={open}
          sx={{
            width: 240,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: 240,
              boxSizing: 'border-box',
            },
          }}
        >
          <List>
          <ListItem
              button
              component={Link}
              to={"/"}
              selected={false}
            >
              <ListItemText>
                <Typography variant="h6">Home</Typography>
              </ListItemText>
            </ListItem>
            <ListItem
              button
              key="Frater"
              selected={false}
            >
              <ListItemText>
                <Typography variant="h6" component={Link}
              to={"/frater"}>Frater</Typography>
              </ListItemText>
              <IconButton onClick={toggleFrater}>
                {fraterOpen ? <ExpandLessIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </ListItem>
            <Collapse in={fraterOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {FraterLinks.map((link) => (
                  <a
                    key={link.text}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ListItem button>
                      <ListItemText>
                        {link.text}
                      </ListItemText>
                    </ListItem>
                  </a>
                ))}
              </List>
            </Collapse>
            
            {OtherLinks.map((item) => (
              <ListItem
                button
                key={item.text}
                component={Link}
                to={item.path}
                selected={false}
              >
                <ListItemText>
                  <Typography variant="h6">{item.text}</Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            display: { xs: 'block', sm: 'none' },
            position: 'fixed',
            top: '8px',
            left: '8px',
          }}
        >
          <MenuIcon />
        </IconButton>
      </div>
    </ThemeProvider>
  );
};

export default Sidebar;
