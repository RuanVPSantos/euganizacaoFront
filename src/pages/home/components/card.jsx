import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton'; // Importar Skeleton
import PropTypes from 'prop-types';
import { useState } from 'react';

function MediaCard({ video, onMarkAsWatched, onMarkAsUnwatched }) {
    const [seen, setSeen] = useState(video.seen);

    const cardStyle = {
        maxWidth: 200,
        opacity: seen ? 0.3 : 1
    };

    const handleMarkAsWatched = () => {
        setSeen(true)
        onMarkAsWatched(video.id);
    };

    const handleMarkAsUnwatched = () => {
        setSeen(false)
        onMarkAsUnwatched(video.id);
    };

    return (
        <Card sx={cardStyle}>
            {video.thumbnail_url ? ( // Verificar se a URL da miniatura existe
                <CardMedia
                    sx={{ height: 100 }}
                    image={video.thumbnail_url}
                    title={video.title}
                />
            ) : (
                <Skeleton variant="rectangular" height={100} /> // Usar Skeleton se a URL não existir
            )}
            <CardContent>
                {video.title ? ( // Verificar se o título existe
                    <Typography variant="body2" color="text.secondary">
                        {video.title}
                    </Typography>
                ) : (
                    <Skeleton variant="text" /> // Usar Skeleton se o título não existir
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

MediaCard.propTypes = {
    video: PropTypes.shape({
        id: PropTypes.number.isRequired,
        thumbnail_url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        seen: PropTypes.bool.isRequired
    }).isRequired,
    onMarkAsWatched: PropTypes.func.isRequired,
    onMarkAsUnwatched: PropTypes.func.isRequired
};

export default MediaCard;
