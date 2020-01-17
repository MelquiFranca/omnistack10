const routes = require('express').Router();
const DevController = require('./controllers/DevControllers');
const SearchController = require('./controllers/SearchControllers');

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.get('/devs/:username', DevController.select);
routes.put('/devs/:username', DevController.update);
routes.delete('/devs/:username', DevController.delete);

routes.get('/search', SearchController.index);

module.exports = routes;