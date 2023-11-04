const ApiError = require('../error/ApiError')

class userController{
    async regisration(req,res){

    }

    async login (req, res){

    }

    async check(req, res ,next){
        const {id} = req.query
        if (!id){
            return next(ApiError.badRequest('Ебть я ахуевший'))
        }
        res.json(id)
    }
}

module.exports = new userController()