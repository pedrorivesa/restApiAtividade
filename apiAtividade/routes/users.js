import express from 'express';

const router = express.Router();

const users = [ 
    {
        nome: "Lucky",
        cpf: 7777,
        DataDeNascimento: 20/50/52,
        Telefone: 302341,
        eMail: "Lucky@email.com",
        cidade: "Maringa",
        estado: "Parana"  
    
    },

    {
        nome: "Joy",
        cpf: 4545,
        DataDeNascimento: 20/50/29,
        Telefone: 7513,
        eMail: "Joy@email.com",
        cidade: "Maringa",
        estado: "Parana"
    }
]

router.get('/users', (req,res) =>{
    

    res.send(users);
});

router.post('/', (req,res) =>{
    

    const user = req.body;

    users.push(user);
    
    res.send(`Usuario com o nome ${user.nome} adicionado com sucesso` ); 
});

export default router;