import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';
import { useState } from 'react';
import { MediaCardPropTypes } from './MediaCard.propTypes';

function MediaCard({ video, onMarkAsWatched, onMarkAsUnwatched }) {
  const [seen, setSeen] = useState(video.seen);

  const cardStyle = {
    maxWidth: 200,
    opacity: seen ? 0.3 : 1,
  };

  const handleMarkAsWatched = () => {
    setSeen(true);
    onMarkAsWatched(video.id);
  };

  const handleMarkAsUnwatched = () => {
    setSeen(false);
    onMarkAsUnwatched(video.id);
  };

  return (
    <Card sx={cardStyle}>
      {video.thumbnail_url ? (
        <CardMedia
          sx={{ height: 100 }}
          image={video.thumbnail_url}
          title={video.title}
        />
      ) : (
        <Skeleton variant="rectangular" height={100} />
      )}
      <CardContent>
        {video.title ? (
          <Typography variant="body2" color="text.secondary">
            {video.title}
          </Typography>
        ) : (
          <Skeleton variant="text" />
        )}
      </CardContent>
      <CardActions>
        <a href={video.url} target='_blank' rel="noreferrer">
          <Button size="small">Assistir</Button>
        </a>
        {seen ? (
          <Button size="small" onClick={handleMarkAsUnwatched}>Não assistido</Button>
        ) : (
          <Button size="small" onClick={handleMarkAsWatched}>Assistido</Button>
        )}
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = MediaCardPropTypes;

export default MediaCard;
