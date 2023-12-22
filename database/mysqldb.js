const {createPool} = require ("mysql2/promise")
require ("dotenv").config ()

const HOST_DB = process.env.HOST_DB
const PORT_DB = process.env.PORT_DB
const NAME_DB = process.env.NAME_DB
const USER_DB = process.env.USER_DB
const PASSWORD_DB = process.env.PASSWORD_DB


const conectiondb = createPool ({
    host: HOST_DB,
    port: PORT_DB,
    database: NAME_DB,
    user: USER_DB,
    password: PASSWORD_DB

})

module.exports = {
    conectiondb, 
}