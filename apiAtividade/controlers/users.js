import { v4 as uuidv4 } from 'uuid';

let users = [];

export const getUsers = (req, res) => {
    res.send(users);
}

const createUser = () => (req,res) =>{

    const user = req.body;

    users.push( { ...user, id: uuidv4()});
    
    res.send(`Usuario com o nome ${user.nome} adicionado com sucesso.` ); 
}

export const getUser = (req, res) =>{

    const { id } = req.params;

    const foundUser = users.find((user) => user.id == id);

    res.send(foundUser);
}

export const deleteUser = (req,res) =>{
    const { id } = req.params;

    users = users.filter((user) => user.id != id);

    res.send(`Usuario com o id ${id} foi deletado com sucesso.`);
}

export const updateUser =  (req,res) => {
    const user = users.find((user) => user.id === req.params.id);
    
    user.nome = req.body.nome;
    user.cpf = req.body.cpf;
    user.DataDeNascimento = req.body.DataDeNascimento;
    user.Telefone = req.body.Telefone;
    user.eMail = req.body.eMail;
    user.cidade = req.body.cidade;
    user.estado = req.body.estado;

    res.send(`O usuario ${req.body.nome} recebeu alteracao ${req.body.cpf}`)

};
