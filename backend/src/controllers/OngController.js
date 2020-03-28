const generateUniqueId = require('../utils/generateUniqueId');
const connection = require('../database/connection');

module.exports = {
    async create(req, res) {
        try {
            const { name, email, whatsapp, city, uf } = req.body;
    
            const id = generateUniqueId();
    
            await connection('ongs').insert({
                id,
                name,
                email,
                whatsapp,
                city,
                uf
            })
    
            return res.json({ id });
        } catch(err) {
            console.log(err);
        }
    },

    async index(req, res) {
        try {
            const ongs = await connection('ongs').select('*');
    
            return res.json(ongs);
        } catch(err) {
            console.log(err);
        }
    }
}