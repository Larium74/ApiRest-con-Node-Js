const { log } = require("console")
const express = require ("express")
let app = express ()
require ("dotenv").config ()
const PORT = process.env.PORT_SERVER
const router = require ("./routes/user.routes")
app.use (express.json ())
app.use (express.urlencoded ({extended: false}))

app.use ("/api" ,router)

app.listen (PORT, ()=> {console.log("Servidor inicializado", PORT);})