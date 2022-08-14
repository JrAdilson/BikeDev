let bikeService = require('../services/bike')

const postBike = async(req, res, next) => {
   try {
      await bikeService.postBike(req.body)
         .then(ret => res.status(201).send(ret))
         .catch(err => res.status(500).send(err))
   }catch(err){
      next(err)
   }
}
module.exports.postBike = postBike