const express = require('express')
const app = express()

app.get('/',function(req,res,next){
    res.send('hello world')
    next()
})

const myLogger = function(req,res,next){
    console.log('LOGGED' + req.ip)
    next()
}

app.use(myLogger)
app.listen(8080)