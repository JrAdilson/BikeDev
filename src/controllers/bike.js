let bikeService = require('../services/bike')
const getBike = async(req,res,next) => {
      try{
           await bikeService.getBike(req.params)
              .then(ret => res.status(201).send(ret))
              .catch(err => res.status(500).send(err))
     }catch(err){
        next(err)
     }
}
module.exports.getBike = getBike