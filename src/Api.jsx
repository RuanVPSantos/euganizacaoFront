import httpClient from './httpClient';

export const fetchVideos = async () => {
    try {
        const response = await httpClient.get('/yt/');
        return response.data;
    } catch (error) {
        throw new Error(`Erro ao buscar vídeos: ${error}`);
    }
};

export const markVideoAsWatched = async (videoId) => {
    try {
        await httpClient.post(`/yt/videos/${videoId}/mark-as-watched`);
    } catch (error) {
        throw new Error(`Erro ao marcar vídeo como assistido: ${error}`);
    }
};

// Função para marcar um vídeo como não assistido
export const markVideoAsUnwatched = async (videoId) => {
    try {
        await httpClient.post(`/yt/videos/${videoId}/mark-as-unwatched`);
    } catch (error) {
        throw new Error(`Erro ao marcar vídeo como não assistido: ${error}`);
    }
};
