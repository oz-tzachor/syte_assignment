import { Request, Response } from "express";
import {
  getAllCatalogs,
  addCatalog,
  updateCatalog,
  deleteCatalog,
} from "../services/catalogService";

export const getCatalogs = async (req: Request, res: Response) => {
  try {
    const catalogs = await getAllCatalogs();
    res.json(catalogs);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch catalogs" });
  }
};

export const createCatalog = async (req: Request, res: Response) => {
  try {
    const catalog = await addCatalog(req.body);
    res.status(201).json(catalog);
  } catch (error) {
    res.status(400).json({ message: "Failed to create catalog", error });
  }
};

export const updateCatalogById = async (req: Request, res: Response) => {
  try {
    const catalog = await updateCatalog(req.params.id, req.body);
    if (!catalog) return res.status(404).json({ message: "Catalog not found" });
    res.json(catalog);
  } catch (error) {
    res.status(400).json({ message: "Failed to update catalog", error });
  }
};

export const deleteCatalogById = async (req: Request, res: Response) => {
  try {
    const catalog = await deleteCatalog(req.params.id);
    if (!catalog) return res.status(404).json({ message: "Catalog not found" });
    res.json({ message: "Catalog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete catalog", error });
  }
};
