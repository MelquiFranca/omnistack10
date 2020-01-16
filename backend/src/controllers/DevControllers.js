const Dev = require('../models/Dev');
const parseStringArray = require('../utils/parseStringArray');
const axios = require('axios');

module.exports = {
    async store(request, response) {
        const { github_username, techs, latitude, longitude } = request.body;
        
        let dev = await Dev.findOne({ github_username });

        if(!dev) {
            const retorno = await axios.get(`https://api.github.com/users/${github_username}`);

            const { login, bio, avatar_url } = retorno.data;
            console.log(retorno.data);
            const techsArray = parseStringArray(techs);
            
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }

            dev = await Dev.create({
                github_username,
                name: login,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });
        }

        return response.json(dev);
    },

    async index(request, response) {
        
        const dev = await Dev.find();
        
        return response.json(dev);
    },

    async select(request, response) {
        const { username } = request.params;

        const dev = await Dev.findOne({
            github_username: username
        })

        return response.json(dev);
    },

    async update(request, response) {

        const { username } = request.params;

        const { techs, latitude, longitude, bio, name, avatar_url } = request.body;

        const techsArray = parseStringArray(techs);
            
            const location = {
                type: 'Point',
                coordinates: [longitude, latitude],
            }

            dev = await Dev.updateOne({
                github_username: username,
            },
                {
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });

        return response.json(dev);
    },

    async delete(request, response) {
        const { username } = request.params;

        const dev = await Dev.deleteOne({
            github_username: username
        });

        return response.json(dev);
    },
}