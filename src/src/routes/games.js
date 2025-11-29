
import { Router } from 'express';
import { list, get, create, update, remove } from '../controllers/gamesController.js';

const r = Router();

r.get('/', list);
r.get('/:id', get);
r.post('/', create);
r.put('/:id', update);
r.delete('/:id', remove);

export default r;
