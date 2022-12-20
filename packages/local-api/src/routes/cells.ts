import express from 'express';
import fs from 'fs/promises';
import path from 'path';

interface Cell {
  id: string;
  content: string;
  type: 'text' | 'javascript';
}

export const createCellsRouter = (filename: string, dir: string) => {
  const router = express.Router();

  const fullPath = path.join(dir, filename);

  router.get('/cells', async (req, res) => {
    // make sure the cell storage file exists
    // if it doesn't exist, create a default list of cells
    // read the file
    // parse list of cells
    // send list of cells to browser
  });

  router.post('/cells', async (req, res) => {
    // take list of cells from the req object and serialize
    const { cells }: { cells: Cell[] } = req.body;

    // write cells into the file
    await fs.writeFile(fullPath, JSON.stringify(cells), 'utf-8');

    res.send({ status: 'ok' });
  });

  return router;
};
