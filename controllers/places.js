//routes

const { application } = require('express')
const express = require('express')
const placesarray = require('../models/placesarray.js')
const router = express.Router()

const places = require('../models/placesarray.js')



//GET/places/new  (this needs to come before :id)
router.get('/new', (req, res) => {
  res.render('places/new')
})


// GET /places/:id
router.get('/', (req, res) => {
  res.render('places/index', { places })   //this is the variable to the array in placesarray
})
  

//show route
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {       //check
    res.render('error404')
  }
  else {
    res.render('places/show', {place: places[id]})
  }
})




//POST - new data
router.post('/', (req, res) => {
  console.log(req.body)  //you can take this off 
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'https://wallpapercave.com/wp/wp3105346.jpg'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})


  
module.exports = router 



