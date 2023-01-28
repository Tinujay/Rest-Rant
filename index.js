// Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')




//Express Settings
// app.set('views', _dirname + '/views')
app.set('view engine', 'jsx')   //method used in Express.js to set the view engine to use JSX. (Used when working with React and Express together)
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public')) // use the 'public' folder as a static folder (useful for images/CSS)
app.use(express.urlencoded({ extended: true })) // middleware function in Express.js that parses the request body of an incoming HTTP request. 
app.use(methodOverride('_method'))


//Controllers & Routes
app.use('/places', require('./controllers/places.js')) // '/places' is your index page JSX




app.get('/', (req,res) => {        //home page route
    res.render('home')             //rendering the home JSX html 
})



app.get('*', (req, res) => {      //404 route / error page 
    res.render('error404')
})


//Listen for Connections 
app.listen(process.env.PORT)









