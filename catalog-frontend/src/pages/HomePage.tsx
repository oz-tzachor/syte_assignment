import React, { useState, useEffect } from "react";
import {
  fetchCatalogs,
  deleteCatalog,
  addCatalog,
  updateCatalog,
} from "../services/api";
import CatalogTable from "../components/CatalogTable";
import CatalogForm from "../components/CatalogForm";
import ConfirmationModal from "../components/ConfirmationModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HomePage: React.FC = () => {
  const [catalogs, setCatalogs] = useState<any[]>([]);
  const [filteredCatalogs, setFilteredCatalogs] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [editingCatalog, setEditingCatalog] = useState<any | null>(null);
  const [showConfirmation, setShowConfirmation] = useState<boolean>(false);
  const [catalogToDelete, setCatalogToDelete] = useState<string | null>(null);

  // Search and filter states
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [verticalFilter, setVerticalFilter] = useState<string>("all");

  const loadCatalogs = async () => {
    setLoading(true);
    try {
      const data = await fetchCatalogs();
      setCatalogs(data);
      setFilteredCatalogs(data);
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message || "Failed to load catalogs.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  // Filter by search query only
  useEffect(() => {
    if (searchQuery) {
      const filteredByName = catalogs.filter((catalog) =>
        catalog.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredCatalogs(filteredByName);
    } else if (verticalFilter !== "all") {
      const filteredByVertical = catalogs.filter(
        (catalog) => catalog.vertical === verticalFilter
      );
      setFilteredCatalogs(filteredByVertical);
    } else {
      setFilteredCatalogs(catalogs); // Show all if no filters
    }
  }, [searchQuery, verticalFilter, catalogs]);

  const handleAddCatalog = async (data: {
    name: string;
    vertical: string;
    isPrimary: boolean;
    locales: string[];
  }) => {
    try {
      if (editingCatalog) {
        await updateCatalog(editingCatalog._id, data);
        toast.success("Catalog updated successfully!");
      } else {
        await addCatalog(data);
        toast.success("Catalog added successfully!");
      }
      loadCatalogs();
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message || "Failed to save catalog.";
      toast.error(errorMessage);
    } finally {
      setEditingCatalog(null);
      setShowForm(false);
    }
  };

  const handleDelete = async () => {
    if (!catalogToDelete) return;
    try {
      await deleteCatalog(catalogToDelete);
      toast.success("Catalog deleted successfully!");
      loadCatalogs();
    } catch (error: any) {
      const errorMessage =
        error?.response?.data?.message || "Failed to delete catalog.";
      toast.error(errorMessage);
    } finally {
      setCatalogToDelete(null);
      setShowConfirmation(false);
    }
  };

  const confirmDelete = (id: string) => {
    setCatalogToDelete(id);
    setShowConfirmation(true);
  };

  const handleEdit = (catalog: any) => {
    setEditingCatalog(catalog);
    setShowForm(true);
  };

  useEffect(() => {
    loadCatalogs();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-8">
      <ToastContainer position="top-right" autoClose={5000} />
      <div className="max-w-6xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Catalog Management
          </h1>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            onClick={() => {
              setEditingCatalog(null);
              setShowForm(true);
            }}
          >
            Add Catalog
          </button>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input
            type="text"
            placeholder="Search by name"
            className="p-2 border rounded-md w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <select
            className="p-2 border rounded-md w-full"
            value={verticalFilter}
            onChange={(e) => setVerticalFilter(e.target.value)}
          >
            <option value="all">All Verticals</option>
            <option value="fashion">Fashion</option>
            <option value="home">Home</option>
            <option value="general">General</option>
          </select>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          </div>
        ) : filteredCatalogs.length > 0 ? (
          <CatalogTable
            catalogs={filteredCatalogs}
            onEdit={handleEdit}
            onDelete={confirmDelete}
          />
        ) : (
          <p className="text-center text-lg text-gray-600 mt-8">
            No catalogs match the selected filters.
          </p>
        )}

        {showForm && (
          <CatalogForm
            initialValues={editingCatalog}
            onSubmit={handleAddCatalog}
            onClose={() => setShowForm(false)}
          />
        )}

        {showConfirmation && (
          <ConfirmationModal
            title="Confirm Deletion"
            message="Are you sure you want to delete this catalog? This action cannot be undone."
            onConfirm={handleDelete}
            onCancel={() => setShowConfirmation(false)}
          />
        )}
      </div>
    </div>
  );
};

export default HomePage;
