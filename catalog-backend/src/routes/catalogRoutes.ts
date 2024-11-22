import { Router, Request, Response } from 'express';
import { getCatalogs, createCatalog, updateCatalogById, deleteCatalogById } from '../controllers/catalogController';

const router = Router();

// Route Definitions
router.get('/', (req: Request, res: Response) => {
  getCatalogs(req, res);
});

router.post('/', (req: Request, res: Response) => {
  createCatalog(req, res);
});

router.put('/:id', (req: Request, res: Response) => {
  updateCatalogById(req, res);
});

router.delete('/:id', (req: Request, res: Response) => {
  deleteCatalogById(req, res);
});

export default router;
