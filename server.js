const express = require('express');

const app = express();

app.get('/rota1',function(req, res){
    res.status(200).send('Servidor ON. Primeira rota');
});app.get('/rota2',function(req, res){
    res.status(200).send('Servidor ON. Segunda Rota');
});app.get('/rota3',function(req, res){
    res.status(200).send('Servidor ON. Terceira Rota');
});app.get('/rota4',function(req, res){
    res.status(200).send('Servidor ON. Quarta Rota');
});app.get('/rota5',function(req, res){
    res.status(200).send('Servidor ON. Quinta Rota');
});

app.listen(3334, ()=> console.log('Servidor ON - Porta 3344'));