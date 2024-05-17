// src/views/Home.jsx
import { useState, useEffect } from 'react';
import { Grid, Skeleton } from '@mui/material';
import LoadingSkeleton from './components/LoadingSkeleton/LoadingSkeleton';
import MarkdownEditor from './components/MarkdownEditor/MarkdownEditor';
import { fetchVideos, fetchMainNote, markVideoAsWatched, markVideoAsUnwatched, updateMainNote } from '../../services/api';
import VideoGrid from './components/VideoGrid/VideoGrid';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mainNoteContent, setMainNoteContent] = useState('');

  useEffect(() => {
    const loadVideos = async () => {
      try {
        const data = await fetchVideos();
        const formattedVideos = formatVideos(data);
        setVideos(formattedVideos);
      } catch (error) {
        console.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    const loadMainNote = async () => {
      try {
        const data = await fetchMainNote();
        setMainNoteContent(data.var_content_mnt);
      } catch (error) {
        console.error(error.message);
      }
    };

    loadMainNote();
    loadVideos();
  }, []);

  const formatVideos = (data) => {
    return Object.entries(data).map(([channelName, channelVideos]) => ({
      channelName,
      videos: channelVideos
    }));
  };

  const handleMarkAsWatched = async (videoId) => {
    try {
      await markVideoAsWatched(videoId);
      updateVideoStatus(videoId, true);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleMarkAsUnwatched = async (videoId) => {
    try {
      await markVideoAsUnwatched(videoId);
      updateVideoStatus(videoId, false);
    } catch (error) {
      console.error(error.message);
    }
  };

  const updateVideoStatus = (videoId, seen) => {
    setVideos(videos.map(channel => ({
      ...channel,
      videos: channel.videos.map(video => video.id === videoId ? { ...video, seen } : video)
    })));
  };

  const handleMainNoteSave = async (text) => {
    try {
      await updateMainNote(text);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Grid container spacing={4} p={4}>
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
      <Grid item xs={12} md={4}>
        {
          mainNoteContent ? 
          <MarkdownEditor initialContent={mainNoteContent} onSave={handleMainNoteSave} /> 
          : 
          <Skeleton variant="rectangular" sx={{ height: 120, width: 300 }}/>
        }
      </Grid>
    </Grid>
  );
};

export default Home;
