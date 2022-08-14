const db = require('../configs/pg')
const sql = `INSERT INTO bike (nome, proprietario, aro, marca) values ($1, $2, $3, $4)`
const postBike = async(params) => {
    const {nome, proprietario, aro, marca} = params
    await db.query(sql, [nome, proprietario, aro, marca])
}

module.exports.postBike = postBike