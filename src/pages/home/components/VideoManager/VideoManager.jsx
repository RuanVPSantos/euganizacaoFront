import { Grid } from '@mui/material';
import LoadingSkeleton from '../LoadingSkeleton/LoadingSkeleton';
import VideoGrid from '../VideoGrid/VideoGrid';
import VideoManagerPropTypes from './VideoManager.propTypes';

const VideoManager = ({ videos, loading, handleMarkAsWatched, handleMarkAsUnwatched }) => {
  return (
    <Grid item xs={12} md={8}>
      {loading ? <LoadingSkeleton /> : videos.map((channel, index) => (
        <VideoGrid
          key={index}
          channelName={channel.channelName}
          videos={channel.videos}
          onMarkAsWatched={handleMarkAsWatched}
          onMarkAsUnwatched={handleMarkAsUnwatched}
        />
      ))}
    </Grid>
  );
};

export default VideoManager;

VideoManager.propTypes = VideoManagerPropTypes;
