import PropTypes from 'prop-types';
import { Grid, Typography } from '@mui/material';
import MediaCard from './MediaCard';

const VideoGrid = ({ channelName, videos, onMarkAsWatched, onMarkAsUnwatched }) => (
  <Grid item xs={12}>
    <Typography variant="h4" style={{ color: '#f2ecff' }}>
      {channelName}
    </Typography>
    <Grid container spacing={2}>
      {videos.map((video, index) => (
        <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
          <MediaCard
            video={video}
            onMarkAsWatched={onMarkAsWatched}
            onMarkAsUnwatched={onMarkAsUnwatched}
          />
        </Grid>
      ))}
    </Grid>
  </Grid>
);

VideoGrid.propTypes = {
  channelName: PropTypes.string.isRequired,
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      seen: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onMarkAsWatched: PropTypes.func.isRequired,
  onMarkAsUnwatched: PropTypes.func.isRequired,
};

export default VideoGrid;
