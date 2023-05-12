require("dotenv").config()
const express = require('express')
const models = require("./models/models")
const router = require("./routes/index")
var cors = require('cors')
const sequelize = require("./db")
const path = require('path')
const errorHandler = require('./middlewares/errorHandlingMiddleware')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname,'static')))
app.use('/api', router)
app.use(errorHandler)

//  const localtunnel = require('localtunnel');
// (async () => {
//   const tunnel = await localtunnel({ port: process.env.PORT });
//   console.log(tunnel.url)
//   tunnel.on('close', () => {
//     // tunnels are closed
//   });
// })(); 

const start = async()=>{
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(process.env.PORT,()=>console.log(`server started listening on ${process.env.PORT}`))
    } catch (e){
        console.log(e)
    }
}

start()