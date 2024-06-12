import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DescriptionIcon from '@mui/icons-material/Description';

export default function CardComponent({ title, link, image }) {
  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="document">
            <DescriptionIcon />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={title}
      />
      <CardMedia
        component="a"
        href={link}
        target="_blank"
      >
        <img
          src={image}
          alt="Coding Symbol"
          style={{ width: '100%', height: 'auto', padding: '1em' }}
        />
      </CardMedia>
    </Card>
  );
}

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
