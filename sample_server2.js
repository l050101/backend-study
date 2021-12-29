const http = require('http')

http.createServer((req,res)=>{
   if(req.url==='/'){
       res.write('hello')
       res.end()
   }
   else if(req.url==='/a'){
       res.write('A hello')
       res.end()
   }
})
.listen(8080,()=>{
    console.log('8080 포트에서 연결중 ')
})