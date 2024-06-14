import axiosInstance from './axiosConfig';

const YT_API_BASE = `${import.meta.env.VITE_YT_API}yt/`;
const MAIN_NOTE_API_BASE = `${import.meta.env.VITE_MAINNOTE_API}main_note/`;
const TASK_API_BASE = `${import.meta.env.VITE_TASK_API_BASE}tasks/`;
const CCS_API_BASE = `${import.meta.env.VITE_API_FRATER_CCS}`;
const LOGIN_API_BASE = `${import.meta.env.VITE_LOGIN_URL}`;

export const logoutApi = async () => {
  try {
    const eraseCookie= (name) => {
      document.cookie = name + '=; expires=0'
    }
    const response = await axiosInstance.post(`${LOGIN_API_BASE}logout/`);
    eraseCookie("access_token")
    localStorage.removeItem('username');
    return response.data;
  } catch (error) {
    throw new Error('Erro ao realizar logout: ' + (error.response?.statusText || error.message));
  }
};

export const checkAuth = async () => {
  try {
    // Verifica se o token está presente no localStorage
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    }

    const token = getCookie("access_token");
    if (!token) {
      throw new Error('Token de acesso não encontrado no armazenamento local');
    }

    const response = await axiosInstance.get(`${LOGIN_API_BASE}check_auth/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    if (response.data && response.data.name) {
      localStorage.setItem("username", response.data.name);
    }
    return response.data;
  } catch (error) {
    localStorage.clear()
    console.log(error);
  }
};


export const loginApi = async (email, password) => {
  try {
    const formData = {
      username : email,
      password : password
    }

    const response = await axiosInstance.post(`${LOGIN_API_BASE}login/`, formData);
    if (response.status === 200) {
      console.log("Login bem-sucedido:", response.data);
      let exp = new Date(new Date().setDate(new Date().getDate() + 1));
      document.cookie = `access_token = ${response.data.access_token}; expires=${exp}`;
      localStorage.setItem("username", response.data.name);
      console.log("Token salvo:", localStorage.getItem("access_token"));
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
    const response = await axiosInstance.get(`${CCS_API_BASE}api/cc/`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar todos os CCs: ' + (error.response?.statusText || error.message));
  }
};

export const getCc = async (id) => {
  try {
    const response = await axiosInstance.get(`${CCS_API_BASE}api/cc/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar o CC: ' + (error.response?.statusText || error.message));
  }
};

export const createCc = async (data) => {
  try {
    const response = await axiosInstance.post(`${CCS_API_BASE}api/cc/`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Erro ao criar o CC: ' + (error.response?.statusText || error.message));
  }
};

export const updateCc = async (id, data) => {
  try {
    const response = await axiosInstance.put(`${CCS_API_BASE}api/cc/${id}/`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Erro ao atualizar o CC: ' + (error.response?.statusText || error.message));
  }
};

export const deleteCc = async (id) => {
  try {
    const response = await axiosInstance.delete(`${CCS_API_BASE}api/cc/${id}/`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Erro ao deletar o CC: ' + (error.response?.statusText || error.message));
  }
};

export const fetchVideos = async () => {
  const token = localStorage.getItem("access_token");
  try {
    const response = await axiosInstance.get(YT_API_BASE, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar vídeos: ' + error.response?.statusText || error.message);
  }
};

export const fetchMainNote = async () => {
  const token = localStorage.getItem("access_token");
  try {
    const response = await axiosInstance.get(MAIN_NOTE_API_BASE, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar main note: ' + error.response?.statusText || error.message);
  }
};

export const markVideoAsWatched = async (videoId) => {
  const token = localStorage.getItem("access_token");
  try {
    await axiosInstance.post(`${YT_API_BASE}videos/${videoId}/mark-as-watched`, null, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  } catch (error) {
    throw new Error('Erro ao marcar vídeo como assistido: ' + error.response?.statusText || error.message);
  }
};

export const markVideoAsUnwatched = async (videoId) => {
  const token = localStorage.getItem("access_token");
  try {
    await axiosInstance.post(`${YT_API_BASE}videos/${videoId}/mark-as-unwatched`, null, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  } catch (error) {
    throw new Error('Erro ao marcar vídeo como não assistido: ' + error.response?.statusText || error.message);
  }
};

export const updateMainNote = async (content) => {
  const token = localStorage.getItem("access_token");
  try {
    const response = await axiosInstance.put(MAIN_NOTE_API_BASE, { content }, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Erro ao atualizar a nota principal: ' + error.response?.statusText || error.message);
  }
};

export const createTask = async (content) => {
  const token = localStorage.getItem("access_token");
  try {
    const response = await axiosInstance.post(TASK_API_BASE, { content, status: 1 }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Erro ao criar tarefa: ' + (error.response?.statusText || error.message));
  }
};

export const getUserTasks = async () => {
  const token = localStorage.getItem("access_token");
  try {
    const response = await axiosInstance.get(`${TASK_API_BASE}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Erro ao buscar tarefas do usuário: ' + (error.response?.statusText || error.message));
  }
};

// Atualizar uma tarefa
export const updateTask = async (taskId, updates) => {
  const token = localStorage.getItem("access_token");
  try {
    const response = await axiosInstance.put(`${TASK_API_BASE}${taskId}`, updates, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Erro ao atualizar tarefa: ' + (error.response?.statusText || error.message));
  }
};

export const deleteTask = async (taskId) => {
  const token = localStorage.getItem("access_token");
  try {
    const response = await axiosInstance.delete(`${TASK_API_BASE}${taskId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Erro ao deletar tarefa: ' + (error.response?.statusText || error.message));
  }
};
