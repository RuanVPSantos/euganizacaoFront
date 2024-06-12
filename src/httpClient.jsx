import axios from "axios";

// Configurar a instância do axios com base na URL da API e credenciais
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // URL base da API
  withCredentials: true, // Permitir o envio de cookies e credenciais entre domínios
  headers: {
    'Content-Type': 'application/json', // Definir o tipo de conteúdo como JSON
  },
});

export default axiosInstance;
