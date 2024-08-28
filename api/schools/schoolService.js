const connection = require('../../config/db.config')

const add = (data, callBack) => {
    connection.query(
        `insert into schools(id, name, address, latitude, longitude) values (?,?,?,?,?)`,
        [
            data.id,
            data.name,
            data.address,
            data.latitude,
            data.longitude
        ],
        (error, results, fields) => {
            if (error) {
                return callBack(error)
            }
            else {
                return callBack(null, results)
            }
        }
    )
}

const list = (callBack) => {

    connection.query(
        `SELECT * from schools`,
        (error, results, fields) => {
            if (error) {
                return callBack(error)
            }
            else {
                return callBack(null, results)
            }
        }
    )
}
module.exports = { add, list }