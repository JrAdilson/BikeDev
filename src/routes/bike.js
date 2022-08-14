const bikeController = require('../controllers/bike')
module.exports = (app) => {
    app.get('/bike/', bikeController.postBike)
}