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
import PropTypes from 'prop-types';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import CodeOffOutlinedIcon from '@mui/icons-material/CodeOffOutlined';

function SidebarLinks({ fraterOpen, butlerOpen, toggleFrater, toggleButler }) {
    return (
        <List>
            <ListItem component={Link} to={"/"}>
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
                    <Typography>
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
                <ListItem 
                    key={item.text}
                    component={Link}
                    to={item.path}
                >
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
                        <Typography>
                            {item.text}
                        </Typography>
                    </ListItemText>
                </ListItem>
            ))}
        </List>
    );
}

export default SidebarLinks;

SidebarLinks.propTypes = {
    fraterOpen: PropTypes.bool.isRequired,
    butlerOpen: PropTypes.bool.isRequired,
    toggleFrater: PropTypes.func.isRequired,
    toggleButler: PropTypes.func.isRequired,
};
