require('dotenv').config()

const express = require('express')
const app = express()


app.use('/places', require('./controllers/places'))


app.get('/', (req,res) => {        //home page route
    res.send('Hello There')
})







app.get('*', (req, res) => {      //404 route / error page 
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)









