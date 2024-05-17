import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import { fetchVideos, fetchMainNote, markVideoAsWatched, markVideoAsUnwatched, updateMainNote } from '../../services/api';
import useTasks from './hooks/useTasks';
import VideoManager from './components/VideoManager/VideoManager';
import NoteManager from './components/NoteManager/NoteManager';
import TaskManager from './components/TaskManager/TaskManager';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mainNoteContent, setMainNoteContent] = useState('');
  const { tasks, newTaskContent, setNewTaskContent, handleCreateTask, handleUpdateTask, handleDeleteTask } = useTasks();

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
      <VideoManager
        videos={videos}
        loading={loading}
        handleMarkAsWatched={handleMarkAsWatched}
        handleMarkAsUnwatched={handleMarkAsUnwatched}
      />
      <NoteManager
        mainNoteContent={mainNoteContent}
        handleMainNoteSave={handleMainNoteSave}
      />
      <TaskManager
        tasks={tasks}
        newTaskContent={newTaskContent}
        setNewTaskContent={setNewTaskContent}
        handleCreateTask={handleCreateTask}
        handleUpdateTask={handleUpdateTask}
        handleDeleteTask={handleDeleteTask}
      />
    </Grid>
  );
};

export default Home;
