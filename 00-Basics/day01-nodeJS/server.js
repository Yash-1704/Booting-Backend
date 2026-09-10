let http = require('http')



let server = http.createServer((req,res)=>{
    console.log('Hello i am server');
    res.end('ok maine tumhari baat sun li')
})



server.listen(3000,()=>{
    console.log('Server is running on port 3000');
})