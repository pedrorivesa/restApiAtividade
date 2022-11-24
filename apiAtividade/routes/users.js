import express from 'express';

import {createUser, getUser,getUsers,deleteUser,updateUser} from '../controlers/users'; 

const router = express.Router();

router.get('/users', getUsers);

router.post('/', createUser); 

router.get('/:id',getUser);

router.delete('/:id',deleteUser);

router.patch('/:id', updateUser);

export default router;