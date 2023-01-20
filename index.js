const express = require('express')
const app = express()

app.get('/', (req,res) => {        //home page route
    res.send('Hello World')
})

app.listen(3000)