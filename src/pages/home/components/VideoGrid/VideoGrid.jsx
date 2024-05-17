import { Grid, Typography } from '@mui/material';
import MediaCard from '../MediaCard/MediaCard';
import { VideoGridPropTypes } from './VideoGrid.propTypes';

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

export default VideoGrid;

VideoGrid.propTypes = VideoGridPropTypes;