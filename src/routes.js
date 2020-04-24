const express = require('express');
const routes = express.Router();
const ongControler = require('./controlers/ongControler');
const incidentsControler = require('./controlers/incidentsControler');
const profileControler = require('./controlers/profileControler');
const sessionControler = require('./controlers/sessionControler');

routes.post('/session', sessionControler.create);

routes.get('/ongs', ongControler.index);
routes.post('/ongs', ongControler.create);

routes.get('/profile', profileControler.index)

routes.get('/incidents', incidentsControler.index);
routes.post('/incidents', incidentsControler.create);
routes.delete('/incidents/:id', incidentsControler.delete);

 module.exports = routes;