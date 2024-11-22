import axios from "axios";

const API_BASE_URL = "http://localhost:3033/api/catalogs";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Fetch all catalogs
export const fetchCatalogs = async (filters?: {
  name?: string;
  multiLocale?: boolean;
}) => {
  const params: any = {};
  if (filters?.name) params.name = filters.name;
  if (filters?.multiLocale) params.multiLocale = "true";

  const response = await api.get("/", { params });
  return response.data;
};

// Add a catalog
export const addCatalog = async (catalog: {
  name: string;
  vertical: string;
  isPrimary?: boolean;
  locales: string[];
}) => {
  const response = await api.post("/", catalog);
  return response.data;
};

// Update a catalog
export const updateCatalog = async (id: string, catalog: any) => {
  const response = await api.put(`/${id}`, catalog);
  return response.data;
};

// Delete a catalog
export const deleteCatalog = async (id: string) => {
  const response = await api.delete(`/${id}`);
  return response.data;
};
