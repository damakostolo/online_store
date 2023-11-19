require('dotenv').config()  // опдключаем из виртуального окружения наши конфигурации  
const express = require('express')  // импортируем некий модуль 
const sequelize = require('./db')
const models = require('./models/models')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middeleware/ErrorHandlingMiddleware')
const path = require ('path')

const PORT = process.env.PORT || 5000 

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(fileUpload({}))
app.use('/api', router)

//Проверка ошибок
app.use(errorHandler)


const start = async() => {
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT,  () => console.log (`Serever startrd on port ${PORT}`)) // start server
    }catch (e){
        console.log(e)
    }
}

start()