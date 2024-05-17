import { useState, useEffect } from 'react';
import { Grid, Skeleton } from '@mui/material';
import VideoGrid from './components/VideoGrid';
import LoadingSkeleton from './components/LoadingSkeleton';
import MarkdownEditor from './components/MarkdownEditor';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mainNoteContent, setMainNoteContent] = useState();

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
    async function fetchMainNote() {
      try {
        const response = await fetch(`${import.meta.env.VITE_MAINNOTE_API}main_note/`);
        if (response.ok) {
          const data = await response.json();
          setMainNoteContent(data.var_content_mnt);
        } else {
          console.error('Erro ao buscar main note:', response.statusText);
        }
      } catch (error) {
        console.error('Erro ao buscar main note:', error);
      } 
    }
    fetchMainNote();
    fetchVideos();
  }, []);

  const formatVideos = (data) => {
    return Object.entries(data).map(([channelName, channelVideos]) => ({
      channelName,
      videos: channelVideos
    }));
  };

  const markVideoAsWatched = async (videoId) => {
    try {
      await fetch(`${import.meta.env.VITE_YT_API}yt/videos/${videoId}/mark-as-watched`, { method: 'POST' });
      updateVideoStatus(videoId, true);
    } catch (error) {
      console.error('Erro ao marcar vídeo como assistido:', error);
    }
  };
  
  const markVideoAsUnwatched = async (videoId) => {
    try {
      await fetch(`${import.meta.env.VITE_YT_API}yt/videos/${videoId}/mark-as-unwatched`, { method: 'POST' });
      updateVideoStatus(videoId, false);
    } catch (error) {
      console.error('Erro ao marcar vídeo como não assistido:', error);
    }
  };
  
  const updateVideoStatus = (videoId, seen) => {
    setVideos(videos.map(channel => ({
      ...channel,
      videos: channel.videos.map(video => video.id === videoId ? { ...video, seen } : video)
    })));
  };

  const updateMainNote = async (content) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_MAINNOTE_API}/main_note/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content })
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Main note updated:', data);
      } else {
        console.error('Erro ao atualizar a nota principal:', response.statusText);
      }
    } catch (error) {
      console.error('Erro ao atualizar a nota principal:', error);
    }
  };

  const handleMainNoteChange = (text) => {
    setMainNoteContent(text);
    updateMainNote(text);
  };

  return (
    <Grid container spacing={4} p={4}>
      <Grid item xs={12} md={8}>
        {loading ? <LoadingSkeleton /> : videos.map((channel, index) => (
          <VideoGrid
            key={index}
            channelName={channel.channelName}
            videos={channel.videos}
            onMarkAsWatched={markVideoAsWatched}
            onMarkAsUnwatched={markVideoAsUnwatched}
          />
        ))}
      </Grid>
      <Grid item xs={12} md={4}>
        {
          mainNoteContent != undefined ? 
          <MarkdownEditor initialContent={mainNoteContent} onChange={handleMainNoteChange} /> 
          : 
          <Skeleton variant="rectangular" sx={{ height: 120, width: 300 }}/>
        }
        
      </Grid>
    </Grid>
  );
};

export default Home;


