import { useState, useEffect } from 'react';
import { Grid, Typography, Skeleton } from "@mui/material";
import MediaCard from './components/card';

function Home() {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchVideos() {
            try {
                const response = await fetch(`${import.meta.env.VITE_YT_API}yt/`);
                if (response.ok) {
                    const data = await response.json();
                    const formattedVideos = formatVideos(data);
                    setVideos(formattedVideos);
                } else {
                    console.error('Erro ao buscar vídeos:', response.statusText);
                }
            } catch (error) {
                console.error('Erro ao buscar vídeos:', error);
            } finally {
                setLoading(false);
            }
        }
        fetchVideos();
    }, []);

    const formatVideos = (data) => {
        const formatted = [];
        for (const [channelName, channelVideos] of Object.entries(data)) {
            formatted.push({
                channelName: channelName,
                videos: channelVideos
            });
        }
        return formatted;
    };

    const markVideoAsWatched = async (videoId) => {
        try {
            await fetch(`${import.meta.env.VITE_YT_API}yt/videos/${videoId}/mark-as-watched`, {
                method: 'POST'
            });
            const updatedVideos = videos.map(channel => ({
                ...channel,
                videos: channel.videos.map(video => {
                    if (video.id === videoId) {
                        return { ...video, seen: true };
                    }
                    return video;
                })
            }));
            setVideos(updatedVideos);
        } catch (error) {
            console.error('Erro ao marcar vídeo como assistido:', error);
        }
    };
    
    const markVideoAsUnwatched = async (videoId) => {
        try {
            await fetch(`${import.meta.env.VITE_YT_API}yt/videos/${videoId}/mark-as-unwatched`, {
                method: 'POST'
            });
            const updatedVideos = videos.map(channel => ({
                ...channel,
                videos: channel.videos.map(video => {
                    if (video.id === videoId) {
                        return { ...video, seen: false };
                    }
                    return video;
                })
            }));
            setVideos(updatedVideos);
        } catch (error) {
            console.error('Erro ao marcar vídeo como não assistido:', error);
        }
    };

    return (
        <Grid container spacing={4} p={4}>
            {loading ? (
                Array.from(Array(3).keys()).map(index => (
                    <Grid item xs={12} key={index}>
                        <Skeleton variant="rectangular" sx={{ height: 40, width: 100 }}/>
                        {Array.from(Array(3).keys()).map(index => (
                            <Grid container spacing={2} mt={1} key={index}>
                                {Array.from(Array(3).keys()).map(index => (
                                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                        <Skeleton variant="rectangular" sx={{ height: 220 }} />
                                    </Grid>
                                ))}
                            </Grid>
                        ))}
                    </Grid>
                ))
            ) : (
                videos.map((channel, index) => (
                    <Grid item xs={12} key={index}>
                        <Typography variant="h4" style={{ color: '#f2ecff' }}>
                            {channel.channelName}
                        </Typography>
                        <Grid container spacing={2}>
                            {channel.videos.map((video, index) => (
                                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                                    <MediaCard
                                        video={video}
                                        onMarkAsWatched={markVideoAsWatched}
                                        onMarkAsUnwatched={markVideoAsUnwatched}
                                    />
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                ))
            )}
        </Grid>
    );
}

export default Home;
