const express = require('express')
const app = express()
app.get('/', (req, res) => res.status(200).send('API - Bike Dev - Software de Aluguel de Bicicletas.'))
app.listen(3000)