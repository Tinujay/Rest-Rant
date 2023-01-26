//routes

const { application } = require('express')
const express = require('express')
const router = express.Router()



//GET/places/new  (this needs to come before :id)
router.get('/new', (req, res) => {
  res.render('places/new')
})


// GET /places/:id
router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/padthai.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coffeecat.jpg'
      }]
      
      res.render('places/index', { places })

  })
  
  
  router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
  })

  
module.exports = router 



