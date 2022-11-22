import express from 'express';

import { v4 as uuidv4 } from 'uuid';



const router = express.Router();

const users = [];

router.get('/users', (req,res) =>{
    

    res.send(users);
});

router.post('/', (req,res) =>{

    const user = req.body;

    users.push( { ...user, id: uuidv4()});
    
    res.send(`Usuario com o nome ${user.nome} adicionado com sucesso.` ); 
}); 


router.get('/:id',(req, res) =>{

    const { id } = req.params;

    const foundUser = users.find((user) => user.id == id);

    res.send(foundUser);
});


router.delete('/:id', (req,res) =>{
    const { id } = req.params;

    users = users.filter((user) => user.id != id);

    res.send('Usuario com o id ${id} foi deletado com sucesso.');
});

export default router;