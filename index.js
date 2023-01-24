//Modules and Globals
require('dotenv').config();
const express = require('express');
const app = express();

//Express Settings
// app.set('views', _dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))


//Controllers & Routes
app.use('/places', require('./controllers/places.js'))


app.get('/', (req,res) => {        //home page route
    res.render('Home')
})



app.get('*', (req, res) => {      //404 route / error page 
    res.render('error404')
})


//Listen for Connections 
app.listen(process.env.PORT)









