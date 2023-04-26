// importing .env file
require('dotenv').config()
require('./db/connection')
const express = require('express')
const cors = require('cors')
const server = express()
const router=require('./router/router')
server.use(cors())
server.use(express.json())
server.use(router)

const PORT = process.env.PORT || 3000
server.listen(PORT,()=>{
    console.log(`server is listning to portnumber ${PORT}`);
})