const connection = require('../dataBase/connection');

module.exports = {
    async create(request, response){
        const { id } = request.body;

        const ong = await connection('ongs')
            .where('id', id)
            .select('name')
            .first();

            if(!ong){
                return response.status(400).json({error: 'No ong found whit this id'});
            }
            return response.json(ong);
    }
}