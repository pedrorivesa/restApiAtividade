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

export const updateUser =  (req, res) =>{
    const {id} = req.params;

    const user = users.find((user) => user.id == id);
    const {nome,cpf,DataDeNascimento,Telefone,eMail,cidade,estado} = req.body;

    if(nome){
        user.nome = nome;
    }

    if(cpf){
        user.nome = cpf;
    }
    if(DataDeNascimento){
        user.nome = DataDeNascimento;
    }
    if(Telefone){
        user.nome = Telefone;
    }
    if(eMail){
        user.nome = eMail;
    }
    if(cidade){
        user.nome = cidade;
    }
    if(estado){
        user.nome = estado;
    }

    res.send(`O usuario ${id} foi atualizado`);
}
