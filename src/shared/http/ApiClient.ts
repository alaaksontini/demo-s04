import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  // Succès
  (response) => response,
  // Erreur
  (error) => {
    if (error.response?.status === 401) {
      // Token expiré → redirect login
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export default api;
