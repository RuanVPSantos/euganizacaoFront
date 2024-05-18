import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    List,
    ListItem,
    ListItemText,
    Typography,
    IconButton,
    Collapse,
} from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ListItemIcon from '@mui/material/ListItemIcon';
import FraterLinks from './FraterLinks';
import OtherLinks from './OtherLinks';
import ButlerLinks from './ButlerLinks';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ListItemButton from '@mui/material/ListItemButton';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import CodeOffOutlinedIcon from '@mui/icons-material/CodeOffOutlined';

function SidebarLinks({ fraterOpen, butlerOpen, toggleFrater, toggleButler }) {
    return (
        <List>
            <ListItem button>
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                >
                    <HomeOutlinedIcon />
                </ListItemIcon>
                <ListItemText>
                    <Typography component={Link} to={"/"}>
                        Home
                    </Typography>
                </ListItemText>
            </ListItem>
            <ListItem
                button
                key="Frater"
                selected={false}
                onClick={toggleFrater}
            >
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                >
                    <EngineeringOutlinedIcon />
                </ListItemIcon>
                <ListItemText>
                    <Typography component={Link} to={"/frater"}>
                        Frater
                    </Typography>
                </ListItemText>
                {open ? (
                    <IconButton onClick={toggleFrater}>
                        {fraterOpen ? <ExpandLessIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                ) : (
                    <> </>
                )}
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
                                <ListItemText>{link.text}</ListItemText>
                            </ListItem>
                        </a>
                    ))}
                </List>
            </Collapse>
            <ListItem
                button
                key="Butler"
                selected={false}
                onClick={toggleButler}
            >
                <ListItemIcon
                    sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                    }}
                >
                    <CodeOffOutlinedIcon />
                </ListItemIcon>
                <ListItemText>
                    <Typography component={Link} to={"/butler"}>
                        Butler
                    </Typography>
                </ListItemText>
                {open ? (
                    <IconButton onClick={toggleButler}>
                        {butlerOpen ? <ExpandLessIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                ) : (
                    <> </>
                )}
            </ListItem>
            <Collapse in={butlerOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {ButlerLinks.map((link) => (
                        <a
                            key={link.text}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <ListItem button>
                                <ListItemText>{link.text}</ListItemText>
                            </ListItem>
                        </a>
                    ))}
                </List>
            </Collapse>
            {OtherLinks.map((item) => (
                <ListItem key={item.text}>
                    <ListItemIcon
                        sx={{
                            minWidth: 0,
                            mr: open ? 3 : 'auto',
                            justifyContent: 'center',
                        }}
                    >
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText>
                        <Typography component={Link} to={item.path}>
                            {item.text}
                        </Typography>
                    </ListItemText>
                </ListItem>
            ))}
        </List>
    );
}

export default SidebarLinks;
