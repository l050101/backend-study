const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send(req.query)
    res.send('hello world get')
})
app.post('/',(req,res)=>{
    console.log(req.body)
    res.send('hello world post')
})

app.listen(8080,()=>{
    console.log('8080포트에서 서버 실행중')
})