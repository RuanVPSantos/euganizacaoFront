import React, { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Collapse, IconButton, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import menuItems from './menuItems';

const SidebarLinks = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleOpen = (name) => {
    setOpenItems(prevOpenItems => ({
      ...prevOpenItems,
      [name]: !prevOpenItems[name]
    }));
  };

  return (
    <List>
      {menuItems.map(item => (
        <React.Fragment key={item.name}>
          <ListItem button component={Link} to={item.link}>
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: 3,
                justifyContent: 'center',
              }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText>
              <Typography>
                {item.name}
              </Typography>
            </ListItemText>
            {item.sublinks && (
              <IconButton onClick={() => toggleOpen(item.name)}>
                {openItems[item.name] ? <ExpandLessIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            )}
          </ListItem>
          {item.sublinks && (
            <Collapse in={openItems[item.name]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.sublinks.map(sublink => (
                  <ListItem key={sublink.name} button component="a" href={sublink.link} target="_blank" rel="noopener noreferrer">
                    <ListItemText inset>
                      <Typography>{sublink.name}</Typography>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Collapse>
          )}
        </React.Fragment>
      ))}
    </List>
  );
};

export default SidebarLinks;
