import Catalog, { ICatalog } from "../models/catalog";

// Get all catalogs
export const getAllCatalogs = async (): Promise<ICatalog[]> => {
  return Catalog.find();
};

// Add a new catalog
export const addCatalog = async (data: Partial<ICatalog>): Promise<ICatalog> => {
  if (data.isPrimary) {
    // Check if another primary catalog exists for the same vertical
    const existingPrimary = await Catalog.findOne({ vertical: data.vertical, isPrimary: true });
    if (existingPrimary) {
      throw new Error(`There is already a primary catalog for vertical "${data.vertical}".`);
    }
  }
  const catalog = new Catalog(data);
  return catalog.save();
};

// Update an existing catalog
export const updateCatalog = async (id: string, data: Partial<ICatalog>): Promise<ICatalog | null> => {
  if (data.isPrimary) {
    // Check if another primary catalog exists for the same vertical
    const existingPrimary = await Catalog.findOne({ vertical: data.vertical, isPrimary: true, _id: { $ne: id } });
    if (existingPrimary) {
      throw new Error(`There is already a primary catalog for vertical "${data.vertical}".`);
    }
  }
  return Catalog.findByIdAndUpdate(id, data, { new: true });
};

// Delete a catalog
export const deleteCatalog = async (id: string): Promise<ICatalog | null> => {
  return Catalog.findByIdAndDelete(id);
};
