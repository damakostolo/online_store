require('dotenv').config()  // опдключаем из виртуального окружения наши конфигурации  
const express = require('express')  // импортируем некий модуль 

const PORT = process.env.PORT || 5000 

const app = express()

app.listen(PORT,  () => console.log (`Serever startrd on port ${PORT}`)) // start server