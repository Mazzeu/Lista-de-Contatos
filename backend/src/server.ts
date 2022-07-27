/* Realizamos a importação do Express */
import express from "express";
/* Método utilizado para construir seu aplicativo */
const app = express()
/* 
  Escolha a porta que sera ouvida para chamar o aplicativo 
  e realizamos a função como callback, para executar alguma
  coisa, quando esse servidor for levantado, utilizando arrow function
*/
app.listen('3333', () => {
  console.log('Back-end Started!')
})