const {uuid, isUuid} = require('uuidv4')
const express = require('express');
const app = express();

const port = 3000

app.use(express.json())

app.listen(port, ()=>{
  console.log(`rodando na porta ${port} 🚀`)
})

let bandas = []
let bandasListaAlterada = []

function logRequests(req,res,next){
  const {method, url} = req;

  console.log(`${method} on ${url} route`)

  return next();
}

function validateBandId(req, res, next){
  const {id} = req.params

  if(!isUuid(id)){
    return res.status('400').json({error: 'Invalid ID project'})
  }

  return next();
}

app.use(logRequests)

app.use('/bandas/:id', validateBandId)

app.get('/bandas', (req,res) => {
  
  const {nome} = req.query;

  bandasListaAlterada = nome
    ? bandas.filter(banda => banda.nome.includes(nome))
    : bandasListaAlterada;

  return res.json(bandasListaAlterada)
})

app.post('/bandas', (req,res) => {
  const body = req.body;

  const banda = {
    id: uuid(),
    nome: body.nome,
    genero: body.genero
  }

  bandas.push(banda)
  bandasListaAlterada = bandas
  res.send('banda adicionada')
})

app.put('/bandas/:id', (req,res)=> {
  
  let novaLista = []

  novaLista = bandas.map(banda => {
    if(banda.id === req.params.id){
      return {
        ...banda,...req.body
      }
    }
    return banda
  })

  bandasListaAlterada = novaLista;
  
  res.send('alteracao salva')
})

app.delete('/bandas/:id', (req,res) =>{

  let novaLista = []

  novaLista = bandas.filter(banda => banda.id!==req.params.id)

  bandasListaAlterada = novaLista

  res.send('banda excluida')
})

