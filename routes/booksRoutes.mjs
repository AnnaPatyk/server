import express from 'express'
import booksControllers from '../controllers/booksControllers.mjs';
const booksRouter = express.Router();
  booksRouter.get('/', booksControllers.all)
  booksRouter.get('/:id', booksControllers.byId)
  booksRouter.post('/', booksControllers.create )
  booksRouter.put('/:id', booksControllers.update)
  booksRouter.delete('/:id', booksControllers.remove)

 export default booksRouter