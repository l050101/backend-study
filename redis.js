const redis = require('redis')
const Client = redis.createClient(6379,'127.0.0.1')
Client.get('myKey',(err,value)=>{
    console.log(value)
})