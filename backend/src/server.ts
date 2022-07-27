import express from "express";
const app = express()
/* 
  Precisamos acessar o rota da aplicação, iniciamos
  a variável utilida para contruir o aplicativo no caso 'app'
  e em seguida buscamos o nome do método 'get', se colocarmos
  o mouse em cima do 'get' podemos ver que ele espera receber
  uma string que é o nome da nossa rota "/users", porém eu não
  tenho domínio, no ambiente de desenvolvimento o domínio é
  "http://localhost:{porta}", então quando o front-end fizer
  uma requição do tipo get com a URL "http://localhost:3333/users"
  vai cair nesse método e mostrar assim a lista de usuários, o
  método 'get' pode ter um segundo argumento que é uma função de
  callback que pode receber um argumento chamado 'request' e/ou 'respose'
  request é o que você requisita
  response é o que você recebe
  Então todos que acessarem essa rota, vai ser retornado uma resposta em
  formato JSON, em alguns momentos podemos abrevir de:
  request = req
  response = res
  Adicionamos sequencialmente as proximas rotas, com suas mensagens.
  Porém não conseguimos acessar as outras rotas se não a 'get' pelo
  navegador.
*/
app.get('/users', (request, response) => {
  return response.json(['usuário 1', 'usuário 2'])
})

app.post('/users', (request, response) => {
  return response.json({message: 'Criando usuário'})
})

app.put('/users', (request, response) => {
  return response.json({message: 'Atualizando usuário'})
})

app.delete('/users', (request, response) => {
  return response.json({message: 'Excluindo usuário'})
})

app.listen('3333', () => {
  console.log('Back-end Started!')
})