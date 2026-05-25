import axios from "axios";

/**
 * My Money Friend - API Client Configuration
 * Base URL: Points to the Go/Gin backend.
 */
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3001/api",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("mymoneyfriend_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Helper for data extraction to keep code DRY
const extractData = (res: any) => res.data.data;

/**
 * 👤 USER SERVICE
 */
export const usersService = {
  getAll: () => api.get("/users").then(extractData),
  create: (payload: any) => api.post("/users", payload).then(extractData),
  update: (id: string, payload: any) => api.put(`/users/${id}`, payload).then(extractData),
  delete: (id: string) => api.delete(`/users/${id}`),
};

/**
 * 💳 ACCOUNTS SERVICE
 */
export const accountsService = {
  getAll: () => api.get("/accounts").then(extractData),
  create: (payload: any) => api.post("/accounts", payload).then(extractData),
  update: (id: string, payload: any) => api.put(`/accounts/${id}`, payload).then(extractData),
  delete: (id: string) => api.delete(`/accounts/${id}`),
};

/**
 * 💸 TRANSACTIONS SERVICE
 */
export const transactionsService = {
  // Backend returns all transactions in one endpoint
  getAll: async () => {
    return api.get("/transactions").then(extractData);
  },
  create: (payload: any) => {
    return api.post("/transactions", payload).then(extractData);
  },
  delete: (id: string, type?: string) => {
    return api.delete(`/transactions/${id}`);
  },
};

/**
 * 🎯 GOALS SERVICE
 */
export const goalsService = {
  getAll: () => api.get("/goals").then(extractData),
  create: (payload: any) => api.post("/goals", payload).then(extractData),
  update: (id: string, payload: any) => api.put(`/goals/${id}`, payload).then(extractData),
  delete: (id: string) => api.delete(`/goals/${id}`),
};

/**
 * 🏷️ CATEGORIES SERVICE
 */
export const categoriesService = {
  getAll: () => api.get("/categories").then(extractData),
  create: (payload: any) => api.post("/categories", payload).then(extractData),
  update: (id: string, payload: any) => api.put(`/categories/${id}`, payload).then(extractData),
  delete: (id: string) => api.delete(`/categories/${id}`),
};

/**
 * 📈 INVESTMENTS SERVICE
 */
export const investmentsService = {
  getAll: () => api.get("/investments").then(extractData),
  create: (payload: any) => api.post("/investments", payload).then(extractData),
  delete: (id: string) => api.delete(`/investments/${id}`),
};

/**
 * 📝 BUDGET RULES SERVICE
 */
export const budgetRulesService = {
  getAll: () => api.get("/budget-rules").then(extractData),
  create: (payload: any) => api.post("/budget-rules", payload).then(extractData),
  update: (id: string, payload: any) => api.put(`/budget-rules/${id}`, payload).then(extractData),
  delete: (id: string) => api.delete(`/budget-rules/${id}`),
};
