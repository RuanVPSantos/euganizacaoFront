import axiosInstance from './axiosConfig';

const YT_API_BASE = `${import.meta.env.VITE_YT_API}yt/`;
const MAIN_NOTE_API_BASE = `${import.meta.env.VITE_MAINNOTE_API}main_note/`;
const TASK_API_BASE = `${import.meta.env.VITE_TASK_API_BASE}tasks/`;
const CCS_API_BASE = `${import.meta.env.VITE_API_FRATER_CCS}`;
const LOGIN_API_BASE = `${import.meta.env.VITE_LOGIN_URL}`;

export const checkAuth = async () => {
  try {
    const response = await axiosInstance.get(`${LOGIN_API_BASE}check_auth/`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao verificar autenticação: ' + (error.response?.statusText || error.message));
  }
};
export const loginApi = async (email, password) => {
  try {
    const response = await axiosInstance.post(`${LOGIN_API_BASE}login/`, {
      email,
      password
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Erro ao fazer login: ' + response.statusText);
    }
  } catch (error) {
    throw new Error('Erro ao fazer login: ' + error.message);
  }
};

export const getAllCc = async () => {
  try {
    const response = await axiosInstance.get(`${CCS_API_BASE}api/cc/`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar todos os CCs: ' + (error.response?.statusText || error.message));
  }
};

export const getCc = async (id) => {
  try {
    const response = await axiosInstance.get(`${CCS_API_BASE}api/cc/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar o CC: ' + (error.response?.statusText || error.message));
  }
};

export const createCc = async (data) => {
  try {
    const response = await axiosInstance.post(`${CCS_API_BASE}api/cc/`, data);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao criar o CC: ' + (error.response?.statusText || error.message));
  }
};

export const updateCc = async (id, data) => {
  try {
    const response = await axiosInstance.put(`${CCS_API_BASE}api/cc/${id}/`, data);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao atualizar o CC: ' + (error.response?.statusText || error.message));
  }
};

export const deleteCc = async (id) => {
  try {
    const response = await axiosInstance.delete(`${CCS_API_BASE}api/cc/${id}/`);
    return response.data;
  } catch (error) {
    throw new Error('Erro ao deletar o CC: ' + (error.response?.statusText || error.message));
  }
};

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

export const createTask = async (content) => {
  try {
    const response = await axiosInstance.post(TASK_API_BASE, { content, status: 1 });
    return response.data;
  } catch (error) {
    throw new Error('Erro ao criar tarefa: ' + (error.response?.statusText || error.message));
  }
};


export const getUserTasks = async () => {
  try {
    const response = await axiosInstance.get(`${TASK_API_BASE}`);
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
