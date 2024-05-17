import PropTypes from 'prop-types';

const VideoManagerPropTypes = {
  videos: PropTypes.arrayOf(PropTypes.shape({
    channelName: PropTypes.string.isRequired,
    videos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      seen: PropTypes.bool.isRequired,
    })).isRequired,
  })).isRequired,
  loading: PropTypes.bool.isRequired,
  handleMarkAsWatched: PropTypes.func.isRequired,
  handleMarkAsUnwatched: PropTypes.func.isRequired,
};

export default VideoManagerPropTypes;
