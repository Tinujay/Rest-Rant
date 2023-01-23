require('dotenv').config()

const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())




app.use('/places', require('./controllers/places'))


app.get('/', (req,res) => {        //home page route
    res.render('Home')
})



app.get('*', (req, res) => {      //404 route / error page 
    res.render('error404')
})



app.listen(process.env.PORT)









