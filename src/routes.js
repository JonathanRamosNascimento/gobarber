import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Joathan Ramos',
    email: 'ramos.was.jonathan@gmail.com',
    password_hash: '56454313843',
  });

  return res.json(user);
});

export default routes;
