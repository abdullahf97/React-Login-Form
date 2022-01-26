const express = require('express'),
app = express()

require('dotenv').config()
app.set('view engine', 'ejs')
app.use('/', require('./routes/hello'))

app.use('/', require('./routes/hello'))
//app.get('/',(req, res)=> {
//    res.send('hello world a')
//})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log('Listening on Port: ${PORT}') 
})