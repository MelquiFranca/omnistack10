const routes = require('express').Router();
const DevController = require('./controllers/DevControllers');

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/devs/:username', DevController.select);
routes.put('/devs/:username', DevController.update);
routes.delete('/devs/:username', DevController.delete);

module.exports = routes;