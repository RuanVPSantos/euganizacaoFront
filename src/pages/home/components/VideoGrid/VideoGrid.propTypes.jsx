import PropTypes from 'prop-types';

export const videoPropTypes = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  seen: PropTypes.bool.isRequired,
});

export const VideoGridPropTypes = {
  channelName: PropTypes.string.isRequired,
  videos: PropTypes.arrayOf(videoPropTypes).isRequired,
  onMarkAsWatched: PropTypes.func.isRequired,
  onMarkAsUnwatched: PropTypes.func.isRequired,
};
