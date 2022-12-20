import express from 'express';

export const createCellsRouter = (filename: string, dir: string) => {
  const router = express.Router();

  router.get('/cells', async (req, res) => {
    // make sure the cell storage file exists
    // if it doesn't exist, create a default list of cells
    // read the file
    // parse list of cells
    // send list of cells to browser
  });

  router.post('/cells', async (req, res) => {
    // make sure the file exists
    // create it if necessary
    // take list of cells from the req object and serialize
    // write cells into the file
  });

  return router;
};
