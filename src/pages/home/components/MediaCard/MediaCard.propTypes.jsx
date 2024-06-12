import PropTypes from 'prop-types';

export const MediaCardPropTypes = {
  video: PropTypes.shape({
    id: PropTypes.string.isRequired,
    thumbnail_url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    seen: PropTypes.bool.isRequired,
  }).isRequired,
  onMarkAsWatched: PropTypes.func.isRequired,
  onMarkAsUnwatched: PropTypes.func.isRequired,
};
