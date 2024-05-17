import axiosInstance from './axiosConfig';

const YT_API_BASE = `${import.meta.env.VITE_YT_API}yt/`;
const MAIN_NOTE_API_BASE = `${import.meta.env.VITE_MAINNOTE_API}main_note/`;
const TASK_API_BASE = `${import.meta.env.VITE_TASK_API_BASE}tasks/`;

export const fetchVideos = async () => {
  try {
    const response = await axiosInstance.get(YT_API_BASE);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar vídeos: ' + error.response?.statusText || error.message);
  }
};

export const fetchMainNote = async () => {
  try {
    const response = await axiosInstance.get(MAIN_NOTE_API_BASE);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar main note: ' + error.response?.statusText || error.message);
  }
};

export const markVideoAsWatched = async (videoId) => {
  try {
    await axiosInstance.post(`${YT_API_BASE}videos/${videoId}/mark-as-watched`);
  } catch (error) {
    throw new Error('Erro ao marcar vídeo como assistido: ' + error.response?.statusText || error.message);
  }
};

export const markVideoAsUnwatched = async (videoId) => {
  try {
    await axiosInstance.post(`${YT_API_BASE}videos/${videoId}/mark-as-unwatched`);
  } catch (error) {
    throw new Error('Erro ao marcar vídeo como não assistido: ' + error.response?.statusText || error.message);
  }
};

export const updateMainNote = async (content) => {
  try {
    const response = await axiosInstance.put(MAIN_NOTE_API_BASE, { content }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Erro ao atualizar a nota principal: ' + error.response?.statusText || error.message);
  }
};


export const createTask = async (content, status = 1) => {
  try {
    const response = await axiosInstance.post(TASK_API_BASE, {
      content,
      status
    });
    return response.data;
  } catch (error) {
    throw new Error('Erro ao criar tarefa: ' + error.response?.statusText || error.message);
  }
};

export const getUserTasks = async () => {
  try {
    const response = await axiosInstance.get(`${TASK_API_BASE}`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar tarefas do usuário: ' + error.response?.statusText || error.message);
  }
};

// Update a task
export const updateTask = async (taskId, updates) => {
  try {
    const response = await axiosInstance.put(`${TASK_API_BASE}${taskId}`, updates);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao atualizar tarefa: ' + error.response?.statusText || error.message);
  }
};

export const deleteTask = async (taskId) => {
  try {
    const response = await axiosInstance.delete(`${TASK_API_BASE}${taskId}`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao deletar tarefa: ' + error.response?.statusText || error.message);
  }
};